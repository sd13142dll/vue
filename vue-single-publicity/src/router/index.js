import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/detail',
            component: Detail
        }
    ],
    linkActiveClass: 'router-active'
})
