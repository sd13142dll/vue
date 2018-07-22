// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import Login from './Login.vue'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  render(h){
  	return h(Login);
  }
  /*
  components: { App },
  template: '<App/>'
  */
})
 