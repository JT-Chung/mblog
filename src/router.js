import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Login - 登录',
        hideInMenu: true
      },
      component: () => import('./views/About')
    },
    {
      path: '/bloglist',
      name: 'BlogList',
      component: () => import( './views/BlogList')
    },
    {
      path: '/goodmood',
      name: 'GoodMood',
      component: () => import('@/views/GoodMood')
    },
    {
      path: '/detail',
      name: 'BlogDetail',
      component: () => import('@/views/BlogDetail')
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: () => import('@/views/TimeLine')
    }
  ]
})
