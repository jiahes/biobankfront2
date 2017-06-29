import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import In from '@/components/In'
import Platform from '@/components/Platform'
import Register from '@/components/in/Register'
import Sampling from '@/components/in/Sampling'
import Send from '@/components/in/Send'
import Accept from '@/components/in/Accept'
import Handle from '@/components/in/Handle'
import Save from '@/components/in/Save'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/in',
      name: 'In',
      component: In,
      children: [
        {
          path: 'register',
          component: Register
        },
        {
          path: 'sampling',
          component: Sampling
        },
        {
          path: 'send',
          component: Send
        },
        {
          path: 'accept',
          component: Accept
        },
        {
          path: 'handle',
          component: Handle
        },
        {
          path: 'save',
          component: Save
        }
      ]
    }
    ,
    {
      path: '/platform',
      name: 'Platform',
      component: Platform
    }
  ]
})
