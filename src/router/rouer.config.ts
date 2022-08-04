import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLoyout.vue'
import productRoutes from './module/product'
import permissionRoutes from './module/permission'
import orderRoutes from './module/order'
import mediaRoutes from './module/media'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      productRoutes,
      permissionRoutes,
      orderRoutes,
      mediaRoutes,
      {
        path: 'media',
        name: 'media',
        component: () => import('@/views/media/index.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'logn',
    component: () => import('@/views/login/index.vue')
  }
]
