<!--  
    .msgbox 
      :style="{
        'background-color': program_info.back_color,
        width: program_info.width + 'px',
        height: program_info.height + 'px',
      }"
-->
<template>
  <div
    class="msgbox"
    :style="{
      'background-color': program_info.back_color,
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
</template>

<script>
//test  only
//import axios from "axios";
export default {
  name: "TextShow",
  data() {
    return {};
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
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
};
</script>
<style scoped>
/* @import url(); 引入css类 */

.msgbox {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
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

.msgcontent {
  text-align: center;
}
</style>
