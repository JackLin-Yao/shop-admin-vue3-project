import { RouteRecordRaw, RouterView } from 'vue-router'
export const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue')
    },
    {
      path: 'offline',
      name: 'order_offline',
      component: () => import('@/views/order/offline/index.vue')
    }
  ]
}
export default routes
