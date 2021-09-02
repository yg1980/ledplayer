<template>
  <div id="app">
    <!-- <Home></Home> -->
    <div
      class="item"
      v-for="(item, index) in playList"
      :key="item.id"
      v-if="index === curIndex"
    >
      <img v-if="item.type == 'picture'" :src="item.url" />
      <p v-else-if="item.type == 'text'">{{ item.url }}</p>
    </div>
    <div>
      <button @click="clickmy">next</button>
    </div>
    <div>
      <button @click="size(0)">--</button>
      <button @click="size(1)">++</button>
    </div>
    <Text-show :program_info="program_info"></Text-show>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import TextShow from "@/components/TextShow.vue";
export default {
  name: "App",
  data() {
    return {
      program_info: {
        // resource_id: this.text_info.resource_id,
        // name: this.text_info.name,
        type: "text",
        color: "#00ff00", //'#00ff00',
        back_color: "#000000", //'#000000',
        url: `谨慎驾驶上的发生地\n注意安全`, //"请输入",
        font_size: 40, //20,
        width: 256,
        height: 160,
      },
      curIndex: 0,
      playList: [
        {
          id: "1",
          type: "text",
          url: "谨慎驾驶",
          duration: 10,
          order: 10,
          level: "normal",
          begin: "00:00",
          end: "23:59",
        },
        {
          id: "11",
          type: "text",
          url: "注意安全",
          duration: 10,
          order: 10,
          level: "normal",
          begin: "00:00",
          end: "23:59",
        },
        {
          id: "111",
          type: "picture",
          url: "http://127.0.0.1:9090/file/7e82f4d6-cf5f-4fc5-b1c8-e676c3b6df68.jpg",
          duration: 10,
          order: 10,
          level: "normal",
          begin: "00:00",
          end: "23:59",
        },
      ],
    };
  },
  components: { Home, TextShow },
  methods: {
    clickmy() {
      if (this.curIndex < this.playList.length - 1) this.curIndex++;
      else this.curIndex = 0;
    },
    size(flag) {
      if (flag == 1) {
        this.program_info.font_size++;
      } else {
        this.program_info.font_size--;
      }
      console.log(this.program_info.font_size);
    },
  },
};
</script>
<style lang="stylus">
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
}

.item {
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.item img {
  // width: 300px;
  // height: 200px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
