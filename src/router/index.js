import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

//嵌套不合理, 嵌套的 不应该用/开头
const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	}
]

const router = new VueRouter({
	mode: 'history', ////默认是hash 还是 history?
	base: process.env.BASE_URL, ///????
	routes
})

router.beforeEach((to, from, next) => {
	// console.log(to.path);
	// if (to.path === '/login') {
	// 	next()
	// } else {
	// 	let token = window.sessionStorage.getItem('Authorization')
	// 	if (token ===null){
	// 		// next('/login')
	// 		next({
	// 			path:'/login',
	// 			query:{ redirect: to.fullPath}
	// 		})
	// 	}else{
	// 		next()
	// 	}
	// }
})
export default router
