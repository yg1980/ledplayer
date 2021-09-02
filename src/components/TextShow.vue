<!--  -->
<template>
  <div ref="outdiv" class="outdiv">
    <div
      class="msgbox"
      :style="{
        'background-color': program_info.back_color,
        width: program_info.width + 'px',
        height: program_info.height + 'px',
      }"
    >
      <p
        class="msgcontent"
        v-text="program_info.url"
        :style="{
          'font-size': program_info.font_size + 'px',
          color: program_info.color,
        }"
      ></p>
    </div>
  </div>
</template>

<script>
//test  only
//import axios from "axios";
export default {
  name: "TextShow",
  data() {
    return {
    
    };
  },
  computed: {},
  props: {
    program_info: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
  methods: {
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
};
</script>
<style scoped>
/* @import url(); 引入css类 */
/* .outdiv{
  width: 100%;
} */
.msgbox {
  margin: 0 auto;
  padding: 0;
  /* width  height 动态改变 */
  width: 256px;
  height: 160px;
  background-color: #000;
  /* border: 1px solid red; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.msgbox {
  /*  */
  font-family: "黑体";
  color: lime;
  white-space: pre-wrap;
}

.msgedit {
  margin: 10px auto;
  /* width: 500px; */
}
.msgedit textarea {
  width: 100%;
  box-sizing: border-box;
}
.msgctrl {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.msgsizeselect {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.msgcontent {
  text-align: center;
}
.el-select-size {
  width: 120px;
}
/*修改 渲染后的 标签 需要在全局css里改;*/
/* .elinput-pname input{
  background-color: red;
  padding: 0 2px;
} */

.elinput-pname {
  font-size: 16px;
  width: 180px;
}
</style>
