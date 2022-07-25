import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 1安装路由插件
Vue.use(VueRouter)
// 路由的原型push方法重新赋值给
const VueRouterPush = VueRouter.prototype.push
// console.log(VueRouter)
// 重写原型上的push方法，统一处理错误信息
VueRouter.prototype.push = function push (location) {
  // console.log(location)路径。测试错误信息
  return VueRouterPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})
// 连续点击两次 push 报错解决办法


export default router
