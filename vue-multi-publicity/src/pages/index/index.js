// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index.vue'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#index',
  render(h){
  	return h(Index);
  }
  /*
  components: { App },
  template: '<App/>'
  */
})
 