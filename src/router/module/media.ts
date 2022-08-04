import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/index.vue')
}
export default routes