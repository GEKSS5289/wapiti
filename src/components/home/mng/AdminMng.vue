<template>
  <div class="admin-mng-box" :class="{'cmsMng-transition-begin':cmsMngstatus,'cmsMng-transition-end':!cmsMngstatus}" >
    <div class="admin-list" v-if="adminData.datas.length!=0" >
      <div class="admin-item" v-for="(item,index) in adminData.datas" :key="item.id" :class="{'freeze-style':item.isFreeze}">
        <div class="admin-info">
          <h1 class="admin-emoji">{{item.adminFace}}</h1>
          <h1 class="admin-name">name:{{item.adminName}}</h1>
          <h1 class="admin-account">account:{{item.adminAccount}}</h1>
        </div>
        <div class="admin-op">
          <h3 class="admin-freeze" v-if="item.isFreeze==false" @click="freeze(item.id)">冻结</h3>
          <h3 class="admin-freeze" v-else @click="thaw(item.id)">解冻</h3>
          <h3 class="admin-up-super-admin" v-if="item.isRoot==false" @click="upgradeAdmin(item.id)">授权超级管理</h3>
          <h3 class="admin-up-super-admin" v-else @click="demoteAdmin(item.id)">降为普通管理员</h3>
          <h3 class="delete-admin" @click="deleteAdmin(item.id)">删除</h3>
        </div>
      </div>
    </div>
    <h1 class="no-admin" v-else>📺暂时没有其他管理员</h1>
    <div class="add-admin">
      <h1>添加管理员</h1>
      <h1 class="admin-icon">😁</h1>
      <input type="text" placeholder="输入管理员name" v-model="pushData.adminName" maxlength="10">
      <input type="text" placeholder="输入管理员手机号" maxlength="11" v-model="pushData.adminAccount">
      <h1 class="error-msg" v-if="pushData.errorMsgStatus">{{pushData.errorMsgCotent}}</h1>
      <h1 class="admin-push" @click="addAdmin" :class="{'no-active':pushData.adminAccount.length>11||pushData.adminAccount<11}">添加</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
import {AdminModel} from "@/model/datas";
import {useStore} from "vuex";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: "AdminMng",
  setup(){
    const store = useStore()
    const pushData = reactive({
      adminFace:'🌠',
      adminName:'',
      adminAccount:'',
      errorMsgStatus:false,
      errorMsgCotent:''
    })

    const adminData = reactive({
      datas:Array<AdminModel>()
    })

    initDataAdmin()


    function initDataAdmin(){
      axios.get(apis.apiUrl.admin).then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          adminData.datas.push(res.data.data[i])
        }
       adminData.datas =  adminData.datas.filter(a=>a.id != Number(sessionStorage.getItem("adminId")))
      })
    }

    function addAdmin(){
      axios.post(apis.apiUrl.admin,{
        adminFace:pushData.adminFace,
        adminName:pushData.adminName,
        adminAccount:pushData.adminAccount
      }).then(res=>{
        console.log(res)
        router.go(0)
        pushData.errorMsgStatus = false
      }).catch(err=>{

          pushData.errorMsgStatus = true
          pushData.errorMsgCotent = "用户已存在"

      })
    }

    function freeze(adminId:number){
      axios.put(apis.apiUrl.admin+'freeze/'+adminId).then(res=>{
        router.go(0)
      })
    }

    function thaw(adminId:number){
      axios.put(apis.apiUrl.admin+'thaw/'+adminId).then(res=>{
        router.go(0)
      })
    }

    function upgradeAdmin(adminId:number){
      axios.put(apis.apiUrl.admin+'up/'+adminId).then(res=>{
        router.go(0)
      })
    }

    function demoteAdmin(adminId:number){
      axios.put(apis.apiUrl.admin+'demote/'+adminId).then(res=>{
        router.go(0)
      })
    }

    function deleteAdmin(adminId:number){
      axios.delete(apis.apiUrl.admin+adminId).then(res=>{
        router.go(0)
      })
    }
    return{
      pushData,
      addAdmin,
      adminData,
      freeze,
      thaw,
      upgradeAdmin,
      demoteAdmin,
      deleteAdmin,
      ...cmsMngInit()
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.admin-mng-box{
  margin-top: 30px;


  .admin-list{
    display: flex;
    padding: 10px;
    overflow-y: auto;
    height: 200px;
    flex-direction: column;
    .freeze-style{
      background-color: #F7DC6F !important;
      &:hover{
        background-color: #1ABC9C;
        color: white;
        .admin-op{
          h3{
            background-color: #F39C12 !important;
            border: 1px solid #1ABC9C;
          }
        }
      }
      .admin-op{
        margin-left: 50px;
        h3{
          margin-bottom: 10px;
          cursor: pointer;
          text-align: center;
          color: white !important;
          border: 1px solid white !important;
          padding: 10px 10px;
          transition: all 0.8s;
          border-radius: 5px;
          &:hover{
            background-color: #F7DC6F !important;
            color: white;
          }
        }

      }
    }
    .admin-item{
      margin-bottom: 30px;
      display: flex;
      //width: 505px;
      justify-content: center;
      padding: 20px;
      text-align: left;
      align-items: center;
      transition: all 0.7s;
      @include shadow();
      &:hover{
        background-color: #1ABC9C;
        color: white;
        .admin-op{
          h3{
            background-color: white;
            border: 1px solid #1ABC9C;
          }
        }
      }
      .admin-op{
        margin-left: 50px;
        h3{
          margin-bottom: 10px;
          cursor: pointer;
          text-align: center;
          color: #76D7C4;
          border: 1px solid #76D7C4;
          padding: 10px 10px;
          transition: all 0.8s;
          border-radius: 5px;
          &:hover{
            background-color: #5DADE2;
            color: white;
          }
        }

      }
    }
  }
  .error-msg{
    margin-bottom: 10px;
    background: #E74C3C;
    width: 800px;
    text-align: center;
    border-radius: 10px;
    color: white;

  }
  .no-admin{
    background-color: #F7DC6F;
    color:white;
    padding: 50px;
    border-left: 5px solid #F9E79F;
  }
  .add-admin{
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .no-active{
      pointer-events: none;
      opacity: 0.5;
    }
    .admin-icon{
      margin-top: 20px;
      margin-bottom: 20px;

      padding: 0 15px;
      text-align: left;
      cursor: pointer;
    }
    input{
      width: 200px;
      height: 10px;
      font-size: 20px;
      padding: 20px;
      margin-bottom: 20px;
      border-top: none;
      border-bottom: none;
      border-right: none;
      border-left: 5px solid #42b983;
      background-color: #E8F6F3;
    }
    .admin-push{
      background-color: #42b983;
      border-radius: 10px;
      width: 150px;
      text-align: center;
      color: white;
      padding: 5px 10px;
    }
  }
}
</style>
