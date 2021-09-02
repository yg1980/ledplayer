import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios";
// import './font_icon/iconfont.css'

import MyHttpServer from './plugins/http'

Vue.use(ElementUI);

// axios.defaults.baseURL
// Vue.prototype.$http = axios
Vue.use(MyHttpServer)
// 后台上传路径
//Vue.prototype.$uploadUrl = 'http://127.0.0.1:9090/gjyxledapi/upload'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
