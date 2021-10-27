<template>
  <div id="app">
    <!-- <Home></Home> -->
    <!-- class="animate__animated animate__fadeIn"  -->
    <!-- 2021-10-21 div.item 加了v-cloak, 也不行,;; 全加载一遍 第二遍好点, 再循环还闪屏 -->
    <!-- 加animate css 是 为了掩盖 闪烁 -->
    <div
      class="item"
      v-for="(item, index) in playList"
      :key="item.schedule_id"
      v-if="index === curIndex"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <img
        class="animate__animated animate__fadeIn"
        v-if="item.type == 'picture'"
        :src="item.url"
      />
      <video
        v-if="item.type == 'video'"
        :src="item.url"
        autoplay
        muted
        loop
      ></video>
      <Text-show v-if="item.type == 'text'" :program_info="item"></Text-show>
    </div>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import TextShow from "@/components/TextShow.vue";
import { getDefaultList, LedSize } from "../static/ledSetting.js";
export default {
  name: "App",
  data() {
    return {
      //启动定时器, 定时向后台 查询节目,
      //获取后,如果节目有变化, 则修改最新的本地bak列表
      //定时 下一条

      timerId_getList: null,
      timerId_next: null,
      width: 400,
      height: 300,
      errCntForGetPlayList: 0,

      playListBak: [],
      curIndex: 0,
      playList: [],
    };
  },
  computed: {},
  watch: {
    playList: {
      handler(val, oldVal) {
        console.log("playlist changed, stratPlay");
        this.startPlay();
      },
      deep: true,
    },
  },
  components: { Home, TextShow },
  destroyed() {
    console.log("destroyed");
    clearInterval(this.timerId_getList);
    clearTimeout(this.timerId_next);
  },
  mounted() {
    console.log("mounted");
    let { width, height } = LedSize;
    this.width = width;
    this.height = height;
    this.playListBak = getDefaultList();

    //watch 监控 playList 的变化?
    this.filterThePlayList();

    //定时访问远程节目
    this.timerId_getList = setInterval(() => {
      this.getRomoteList();
    }, 30000);
  },
  methods: {
    startPlay() {
      clearTimeout(this.timerId_next);
      this.curIndex = -1; //
      this.timerId_next = setTimeout(() => {
        this.next();
      }, 2000);
    },
    async getRomoteList() {
      try {
        let ret = await this.$http.get("schedulesList");
        // console.log(ret);
        let { schedulesList } = ret.data.data;
        console.log(schedulesList);
        if (schedulesList) {
          let { width, height, list } = schedulesList;
          this.width = width;
          this.height = height;
          if (width && height) {
            LedSize.width = width;
            LedSize.height = height;
            console.log("LedSize ==>", LedSize.width, LedSize.height);
          }
          console.log(new Date().toString());
          if (JSON.stringify(this.playListBak) !== JSON.stringify(list)) {
            this.playListBak = list;
            console.log("changed");
          } else {
            console.log("no changed");
          }

          //每次都要过滤, 判断是否有时段变化
          this.filterThePlayList();

          this.errCntForGetPlayList = 0;
        }
      } catch (err) {
        console.log(err);
        this.errCntForGetPlayList++;
        if (this.errCntForGetPlayList >= 2) {
          ////离线开始
          console.log("开始播放离线--------->>>>>");
          this.errCntForGetPlayList = 0;
          this.playListBak = getDefaultList();
          this.filterThePlayList();
        }
      }
    },

    filterThePlayList() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      h < 10 && (h = "0" + h);
      m < 10 && (m = "0" + m);
      let curTime = h + ":" + m;

      // == null
      if (!this.playListBak) return;

      //[] length>=0

      //过滤在时间段内的
      let ret = this.playListBak.filter((v) => {
        return v.begin_time <= curTime && v.end_time >= curTime;
      });

      //过滤top级别的
      let retTopLevel = ret.filter((v) => {
        return v.level == "top";
      });

      //if has top level only play tops
      if (retTopLevel && retTopLevel.length > 0) {
        let curPlaylist = JSON.stringify(this.playList);
        let filterPlaylist = JSON.stringify(retTopLevel);
        if (curPlaylist !== filterPlaylist) {
          this.playList = JSON.parse(JSON.stringify(retTopLevel));
        }
      } else {
        let curPlaylist = JSON.stringify(this.playList);
        let filterPlaylist = JSON.stringify(ret);
        if (curPlaylist !== filterPlaylist) {
          this.playList = JSON.parse(JSON.stringify(ret));
        }
      }
    },
    next() {
      if (!this.playList || this.playList.length == 0) {
        console.log("!this.playList  || this.playList.length ==0");
        return;
      }
      if (this.curIndex < this.playList.length - 1) this.curIndex++;
      else this.curIndex = 0;
      console.log("curIndex", this.curIndex);
      //console.log("playList length", this.playList.length);

      let delayTime = this.playList[this.curIndex].delay;
      if (delayTime) {
        //
        // console.log(delayTime);
        clearTimeout(this.timerId_next);
        this.timerId_next = setTimeout(() => {
          this.next();
        }, delayTime * 1000);
      }
    },
  },
};
</script>
<style lang="stylus">
@import '~@/animatecss/animate.min.css';

// 临时注销隐藏鼠标 2021-9-26
.item {
  cursor: none !important;
}

html, body {
  height: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 背景色
  background-color: #000;
}

.item img {
  width: 100%;
  height: 100%;
  // contain fill
  object-fit: fill;
}

.item video {
  width: 100%;
  height: 100%;
}
</style>
