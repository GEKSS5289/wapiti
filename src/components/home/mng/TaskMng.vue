<template>
  <div class="task-mng-box" :class="{'loginfo-transition-begin':loginfoStatus,'loginfo-transition-end':!loginfoStatus}">
    <div class="release-task-list" v-if="taskData.datas.length!=0">
      <div class="release-task-item" v-for="(item,index) in taskData.datas"
           :class="{'low-task':item.taskLevel==0,'middle-task':item.taskLevel==1,'hight-task':item.taskLevel==2}
      ">
        <h1 class="task-name">{{item.taskTitle}}<span style="font-size: 15px;margin-left: 10px;" v-if="item.finishTime">完成时间:2010-11-12</span></h1>
        <h2 class="task-remark">{{item.taskContent}}</h2>
        <div class="task-info">
          <h2 class="task-abolish" v-if="item.taskStatus!=2&&item.taskStatus!=1" @click="abolish(item.id)">废除</h2>
          <h2 class="task-status" v-if="item.taskStatus==1">已完成</h2>
          <h2 class="task-status" v-if="item.taskStatus==0">未完成</h2>
          <h2 class="task-performer">执行人:{{item.executorName}}</h2>
        </div>
      </div>
    </div>
    <h1 class="no-task"  v-else>😱你还没有发布任务呢</h1>
    <div class="release-task-center">
      <h1 style="text-align: left;margin-bottom: 20px">发布任务</h1>
      <div class="task-write-info">
        <input class="write-task-name" type="text" placeholder="任务名" v-model="pushData.taskTitle">
        <textarea class="write-task-content" placeholder="任务描述" v-model="pushData.taskContent"></textarea>
        <div class="task-select-level">
          <h1 class="level-low" @click="selectLevel(0)" :class="{'level-low-select':pushData.taskLevel==0}">低优先</h1>
          <h1 class="level-middle" @click="selectLevel(1)" :class="{'level-middle-select':pushData.taskLevel==1}">中优先</h1>
          <h1 class="level-hight" @click="selectLevel(2)" :class="{'level-hight-select':pushData.taskLevel==2}">高优先</h1>
        </div>
        <div class="push">
          <div class="select-performer" @click="selectAdmin" v-if="selectStatus">选择执行人</div>
          <div class="select-performer" @click="selectAdmin" v-else>执行人:{{pushData.executorName}}</div>
          <div class="push-task-btn" @click="pushTask">发布任务</div>
          <h1 class="error-msg" :class="{'loginfo-transition-begin':!pushData.errorMsg,'loginfo-transition-end':pushData.errorMsg}" >{{pushData.errorMsg}}</h1>
        </div>
      </div>
      <div class="performer-list" :class="{'loginfo-transition-begin':!adminsStatus,'loginfo-transition-end':adminsStatus}">
        <div class="performer-item" v-for="(item,index) in adminData.datas" @click="assign(item.id,item.adminName)">
          <h1 class="admin-emoji">{{item.adminFace}}</h1>
          <h1 class="admin-name">{{item.adminName}}</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive,ref,toRefs,toRef} from 'vue'
import {useStore} from "vuex";
import {AdminModel, TaskModel} from "@/model/datas";
import axios from "axios";
import apis from "@/common/apis";
import router from "@/router";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: "TaskMng",
  setup(){

    const store = useStore()
    const adminsStatus = ref(false)
    const selectStatus = ref(true)
    const pushData = reactive({
      executorId:'',
      publisherId:Number(sessionStorage.getItem("adminId")),
      taskTitle:'',
      taskContent:'',
      taskLevel:0,
      executorName:'',
      errorMsg:''
    })
    const adminData = reactive({
      datas:Array<AdminModel>()
    })
    const taskData = reactive({
      datas:Array<TaskModel>()
    })
    initDataAdmin()
    initDataTask()
    function initDataTask(){
      axios.get(apis.apiUrl.task+'rel/'+Number(sessionStorage.getItem("adminId"))).then(res=>{
        console.log(res)
        for(let i = 0;i<res.data.data.length;i++){
          taskData.datas.push(res.data.data[i])
        }
      })
    }

    function initDataAdmin(){
      axios.get(apis.apiUrl.admin).then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          adminData.datas.push(res.data.data[i])
        }
      })
    }

    function selectAdmin(){
      adminsStatus.value = !adminsStatus.value
    }

    function assign(executorId:string,adminName:string){
      selectStatus.value = false
      pushData.executorId = executorId
      pushData.executorName = adminName
      console.log(adminName)
      selectAdmin()
    }

    function selectLevel(levelNum:number){
      pushData.taskLevel = levelNum
    }

    function pushTask(){
      axios.post(apis.apiUrl.task,{
        executorId:pushData.executorId,
        publisherId:pushData.publisherId,
        taskTitle:pushData.taskTitle,
        taskContent:pushData.taskContent,
        taskLevel:pushData.taskLevel
      }).then(res=>{
        console.log(res)
        router.go(0)
      }).catch(err=>{
        if(err.data.executorId){
          pushData.errorMsg = err.data.executorId
        }else if(err.data.taskTitle){
          pushData.errorMsg = err.data.taskTitle
        }else if(err.data.taskContent){
          pushData.errorMsg = err.data.taskContent
        }else if(err.data.taskLevel){
          pushData.errorMsg = err.data.taskLevel
        }else{
          pushData.errorMsg = err.data.publisherId
        }


      })
    }

    function abolish(taskId:number){
      axios.put(apis.apiUrl.task+'abolish/'+taskId).then(res=>{
        console.log(res)
        router.go(0)
      })
    }


    return{
      pushData,
      taskData,
      adminData,
      adminsStatus,
      selectAdmin,
      selectStatus,
      selectLevel,
      assign,
      pushTask,
      abolish,
      ...cmsMngInit()
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.task-mng-box{

  margin-top: 30px;
  .release-task-list{
    border-radius: 15px;
    width: 780px;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    //padding: 5px;
    .release-task-item{
      margin-right: 30px;
      box-sizing: border-box;

      background-color: #42b983;
      padding: 10px;
      border-radius: 15px;
      text-align: left;
      //height: 130px;
      width: 350px;

      .task-name{
        color: white;
        margin-bottom: 10px;
      }
      .task-remark{

        word-break: break-all;
        white-space: normal;
        //width: 300px;
        background-color: white;
        color: #76D7C4;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .task-info{
        display: flex;
        align-items: center;
        justify-content: center;
        h2{

          flex: 1;
          padding: 10px;
        }
        .task-abolish{

          text-align: center;
          color: white;
          background-color: #F39C12;
          border-radius: 5px;
        }
        .task-status{
          background-color: #27AE60;
          border-radius: 5px;
          color: white;
          text-align: center;
        }
        .task-status:nth-child(2){
          //background-color: #F7DC6F!important;
          margin-left: 20px;
          margin-right: 20px;
        }
        .task-performer{
          background-color: #E8F6F3;
          border-radius: 5px;
          color: #76D7C4;
          text-align: center;
          //margin-left: 10px;
        }

      }
    }
  }

  .no-task{
    background-color: #F7DC6F;
    color: white;
    padding: 10px;
  }
  .release-task-center{
    margin-top: 20px;
    .task-write-info{
      display: flex;
      flex-direction: column;
      .write-task-name{
        width: 200px;
        height: 20px;
        font-size: 20px;
        color: #333333;
        border-left: 5px solid #42b983;
        background-color: #E8F6F3;
        border-bottom: none;
        border-top: none;
        border-right: none;
        outline: none;
        padding: 20px;
        margin-bottom: 20px;
      }
      .write-task-content{
        width: 500px;
        padding: 20px;
        height: 100px;
        resize: none;
        margin-bottom: 20px;
        border-left: 5px solid #42b983;
        border-bottom: none;
        border-top: none;
        border-right: none;
        //border-radius: 10px;
        font-size: 20px;
        background-color: #E8F6F3;
        font-weight: bold;
      }
      .task-select-level{
        display: flex;
        margin-bottom: 30px;
        h1{
          margin-right: 20px;
          padding: 5px 10px;
          cursor: pointer;
          transition: all 0.8s;
        }
        .level-hight{
          border: 2px solid red;
          border-radius: 15px;
          color: red;
        }
        .level-low{
          border: 2px solid #42b983;
          border-radius: 15px;
          color: #42b983;
        }
        .level-middle{
          border: 2px solid #F7DC6F;
          border-radius: 15px;
          color: #F7DC6F;
        }
        .level-hight-select{
          background-color: red;
          color: white;
        }
        .level-low-select{
          background-color: #42b983;
          color: white;
        }
        .level-middle-select{
          background-color:#F7DC6F;
          color: white;
        }

      }
      .push{
        display: flex;
        align-items: center;
        .write-select{
          width: 100px;
          height: 25px;

          border-radius: 10px;

        }
        .select-performer{
          //padding: 10px;
          //width: 100px;
          //height: 25px;
          padding: 10px;
          border-radius: 5px;
          background-color: #2c3e50;
          color: white;
          line-height: 25px;
          cursor: pointer;
        }
        .push-task-btn{
          padding: 10px;
          line-height: 25px;
          border-radius: 5px;
          margin-left: 20px;
          background-color: #42b983;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .error-msg{
          margin-left: 30px;
          color: #E74C3C;
        }
      }


    }
    .performer-list{
      margin-top: 20px;
      padding: 20px;
      overflow-x: auto;
      white-space: nowrap;
      display: flex;
      width: 480px;
      .performer-item{
        display: flex;
        @include shadow();
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 20px;
        transition: all 0.3s;
        &:hover{
          background-color: #42b983;
          color: white;
        }
      }
    }
  }
}
</style>
