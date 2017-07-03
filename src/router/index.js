import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import In from '@/components/In'
import Out from '@/components/Out'
import Book from '@/components/out/Book'
import Definite from '@/components/out/Definite'
import Inquiry from '@/components/out/Inquiry'
import Requiry from '@/components/out/Requiry'
import Platform from '@/components/Platform'
import Register from '@/components/in/Register'
import Sampling from '@/components/in/Sampling'
import Send from '@/components/in/Send'
import Save from '@/components/in/Save'
import Accept from '@/components/in/Accept'
import Handle from '@/components/in/Handle'
import RegisterNew from '@/components/in/RegisterNew'
import AddRegister from '@/components/in/AddRegister'
import Schedule from '@/components/in/Schedule'
import Import from '@/components/in/Import'
import Edc from '@/components/in/Edc'
import System from '@/components/System'
import User from '@/components/system/User'
import Role from '@/components/system/Role'
import Authority from '@/components/system/Authority'
import OutputControl from '@/components/OutputControl'
import CreateControl from '@/components/outputControl/CreateControl'
import OutputDefinite from '@/components/outputControl/OutputDefinite'
import OutputExact from '@/components/outputControl/OutputExact'
import DataImport from '@/components/outputControl/DataImport'
import ControlRecord from '@/components/outputControl/ControlRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
          path: '',
          redirect: 'register'
        },
        {
          path: 'register',
          component: Register,

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
        },
        {
          path: 'registerNew',
          component: RegisterNew,
          children: [
            {
              path: '',
              component: AddRegister
            },{
              path: 'addRegister',
              component: AddRegister
            },{
              path: 'schedule',
              component: Schedule
            },{
              path: 'import',
              component: Import
            },{
              path: 'edc',
              component: Edc
            }

          ]
        }
      ]
    }
    ,
    {
      path: '/platform',
      name: 'Platform',
      component: Platform
    },
    {
        path: '/out',
        name: 'out',
        component: Out,
        children: [
          {
            path: 'book',
            component:Book
          },
          {
            path: 'definite',
            component: Definite
          },
          {
            path: 'inquiry',
            component: Inquiry
          },
          {
              path: 'requiry',
              component: Requiry
          }
        ]
      },
      {
          path: '/system',
          name: 'system',
          component: System,
          children: [
            {
              path: 'user',
              component: User
            },
            {
              path: 'role',
              component:Role
            },
            {
              path: 'authority',
              component: Authority
            }
          ]
        },
      {
          path: '/outputControl',
          name: 'outputControl',
          component: OutputControl,
          children: [
            {
              path: 'createControl',
              component: CreateControl
            },
            {
              path: 'outputDefinite',
              component:OutputDefinite
            },
            {
              path: 'outputExact',
              component: OutputExact
            },{
              path: 'dataImport',
              component: DataImport
            },{
              path: 'controlRecord',
              component: ControlRecord
            }
          ]
        }
  ]
})
