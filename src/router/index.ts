import { createRouter, createWebHashHistory } from 'vue-router'
import {routes} from './rouer.config'


const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router