import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/mixin.scss'
import axios from 'axios'

axios.interceptors.request.use(config => {
  config.headers['token'] = sessionStorage.getItem("token")
  return config
})

axios.interceptors.response.use(config => {
  // config.headers['token'] = localStorage.getItem("token")
  return config
}, error => {
  if (error.response) {
    if (error.response.status === 403) {
      router.push("/")
    }
  }
      // window.alert('服务器正忙，请稍后重试')

  return Promise.reject(error.response.data)
})





createApp(App).use(store).use(router).mount('#app')
