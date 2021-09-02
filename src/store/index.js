import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ///可以不共享的, 就是在screen  及 screen dialog中用
    screen_info: {
      screen_id: "",
      name: "屏的名字1",
      ip: "192.168.0.110",
      brand: "南京洛普",
      district: "南京",
      width: 256,
      height: 160,
    },
    
    // all  no paging data 需要共享
    screenInfoListAll:[],
    groupInfoListAll:[], 
  },
  mutations: {
    setScreen_info(state,newScreen_info){
      state.screen_info =newScreen_info
    },
    
    setScreenListAll(state, newList){
      state.screenInfoListAll = newList
    },
    
    setGroupListAll(state, newList){
      state.groupInfoListAll = newList
    },


  },
  actions: {
  },
  modules: {
  }
})
