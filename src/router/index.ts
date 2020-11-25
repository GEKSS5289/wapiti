import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
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
      },
      {
        path:'/task',
        name:'Task',
        component:()=>import('../components/home/mng/TaskMng.vue')
      },
      {
        path:'/admin',
        name:'Admin',
        component:()=>import('../components/home/mng/AdminMng.vue')
      }
    ]
  },
  {
    path:'/',
    name:'Login',
    component:()=>import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
