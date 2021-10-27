import axios from 'axios'
import ElementUI from 'element-ui'
import router from '../router'
const MyHttpServer = {}
MyHttpServer.install = function (Vue, options) {
    //127.0.0.1 服务器IP
    //32.168.255.21
    // axios.defaults.baseURL = 'http://127.0.0.1:9090/gjyxledapi/'
    // axios.defaults.baseURL = 'http://192.168.30.14:9090/gjyxledapi/'
    axios.defaults.baseURL = 'http://192.168.2.66:9090/gjyxledapi/'
    //axios.defaults.baseURL='http://32.168.255.21:9090/gjyxledapi/'

    Vue.prototype.$http = axios
    axios.interceptors.request.use(
        function (config) {
            if (config.url !== 'login') {
                const token = sessionStorage.getItem('Authorization')
                if (token) {
                    config.headers.Authorization = token
                }
            }
            return config
        },
        function (err) {
            return Promise.reject(err)
        }
    )

    axios.interceptors.response.use(
        function (response) {
            // return response
            return Promise.resolve(response);
        }, function (error) {
            ///超时 , 401 等等 
            //2021-8-20 以下 代码 应该在 调用接口 catch error 时提示并跳转,
            //加到这里, 有点混乱.
            // if (error.response.status === 401) {
            //     ElementUI.Message.error('token超时,请重新登')
            //     sessionStorage.removeItem('Authorization')
            //     router.push({
            //         name: 'Login'
            //     })
            //     // window.location.href = "/login";
            // }
            // console.log('error',error);
            // error.response
            return Promise.reject(error) //error ?
        }
    )

}

export default MyHttpServer