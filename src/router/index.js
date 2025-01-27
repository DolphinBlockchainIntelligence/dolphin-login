import Vue from 'vue'
import About from '@/components/About'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Page from '@/components/Page'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/page/:id/',
      name: 'Page',
      component: Page,
      props: true,
      meta: { reuse: false }
    }
  ]
})
