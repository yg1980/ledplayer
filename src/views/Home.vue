<template>
  <div>sdfasfadfas</div>
</template>

<script scoped>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
  methods: {
    exit() {
      window.sessionStorage.removeItem("Authorization");
      this.$router.replace("/login");
    },
    to_screenlist() {
      this.$router
        .push({
          path: "screen",
          query: { userId: "query" },
          //name: 'Screen',
          //params:{userId: params}
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_group() {
      this.$router
        .push({
          // path:'group'
          name: "Group",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_status() {
      this.$router
        .push({
          // path:'status'
          name: "Status",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_resource() {
      this.$router
        .push({
          name: "Resource",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_program_pic() {
      this.$router
        .push({
          name: "Program_pic",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_program_text() {
      this.$router
        .push({
          name: "Resource_text",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_schedule_edit() {
      this.$router
        .push({
          name: "Schedule_edit",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_schedule_list() {
      this.$router
        .push({
          name: "Schedule_list",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_log_list() {
      this.$router
        .push({
          name: "Log_list",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
    to_user_list() {
      this.$router
        .push({
          name: "User_list",
        })
        .catch((err) => {
          console.log("error=>", err);
        });
    },
  },
};
</script>
<style scoped>
.divleft {
  /* background-color:rgba(17, 189, 17, 0.1); */
  background-color: rgba(9, 47, 96, 0.2);
  /* background-color: #092f60; */

  /* background-color: rgba(0, 0, 0, 0.075); */
  /* background-color: rgba(219, 222, 230, 0.267); */
  height: 100%;
  width: 100%;
  /* width: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-grow: 1; */
}
.divright {
  /* float: right;   */
  position: absolute;
  right: 30px;
  top: 10px;
}

.systitle:hover {
  color: green;
  font-size: 40px;
}

/* 2021-7-22 add , 不加也可以固定, 为啥? */
/* 因为 下面的el-body-all */
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

/* add  this style 2021-7-22 09:14:19 */
.el-body-all {
  /* absolute fixed 都可以 */
  /* positon = fixed, 会导致elment 对话框 有一个遮罩层 
     如果用fixed,  需要在 子元素弹出框设置:modal-append-to-body='false’即可,
     但是 对话框关闭时,如果点击取消, 还有遮罩层;
  */

  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
}

.el-header > div > img {
  padding: 2px;
  height: 80%;
  border: 1px solid gainsboro;
  /* border-radius: 60px; */
  /* background-color: khaki; */
  /* margin-left: 300PX; */
}

.el-header > div > span {
  font-size: 30px;
  margin-left: 30px;
}

.el-submenu .el-menu-item:hover {
  border-right: 1px solid black;
}

/* 2021-4-27 test */
.el-root-schedule {
  height: 100%;
}
</style>