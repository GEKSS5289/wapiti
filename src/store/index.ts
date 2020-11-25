import { createStore } from 'vuex'

export default createStore({
  state: {
    adminId: localStorage.getItem("adminId"),
    isRoot:localStorage.getItem("isRoot"),
    face:localStorage.getItem("face"),
    name:localStorage.getItem("name")
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getAdminId:(state)=>{
      return state.adminId
    },
    getAdminName:(state)=>{
      return state.name
    },
    getAdminFace:(state)=>{
      return state.face
    },
    getAdminIsRoot:(state)=>{
      return state.isRoot
    }
  }
})
