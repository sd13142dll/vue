import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import axios from 'axios'

// 使用 VueRouter
Vue.use(VueRouter);

// Vue原型中添加axios公共方法
Vue.prototype.$http = axios;

// 创建路由实例
const router = new VueRouter( routerConfig );

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
