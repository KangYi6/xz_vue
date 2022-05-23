import Vue from 'vue'
import VueRouter from 'vue-router'
//引入Index组件
import Index from '../views/Index'


Vue.use(VueRouter)

// 设置路由字典
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },  
  
  
  //懒加载：异步加载，优化首屏加载慢问题
  {
    path: '/details/:lid',
    name: 'Details',
    props:true,//传参值直接进入变量lid
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },

  {
    path: '/mylist',
    name: 'MyList',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyList.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router