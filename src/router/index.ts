import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/story',
    children:[
      {
        path:'/story',
        name:'Story',
        component:()=>import('../components/home/mng/StoryMng.vue')
      },
      {
        path:'/video',
        name:'Video',
        component:()=>import('../components/home/mng/VideoMng.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
