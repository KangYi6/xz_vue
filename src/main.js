//公共的JS
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'

//引入MyHeader组件
import MyHeader from './components/MyHeader'
//将MyHeader组件变为全局组件
Vue.component("my-header",MyHeader);

//引入MyFooter组件
import MyFooter from './components/MyFooter'
//将Myfooter组件变为全局组件
Vue.component("my-footer",MyFooter);

//1、安装axios：npm i axios --save
//2、配置axios请求的基础路径
axios.defaults.baseURL='http://localhost:5050';
//3、将axios放入原型对象中
Vue.prototype.axios=axios;
//结果：将来所有组件中都可以用 this.axios 发送请求


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
