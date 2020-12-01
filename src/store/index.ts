import { createStore } from 'vuex'

export default createStore({
  state: {
    adminId: sessionStorage.getItem("adminId"),
    isRoot:sessionStorage.getItem("isRoot"),
    face:sessionStorage.getItem("face"),
    name:sessionStorage.getItem("name"),

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
