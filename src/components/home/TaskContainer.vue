<template>
  <div class="task-container-box">
    <h1 style="text-align: left;margin-bottom: 10px">任务列表</h1>
    <div class="task-list" v-if="taskData.datas.length != 0">
      <div class="task-item" v-for="(item,index) in taskData.datas"
           :class="{'task-l':item.taskLevel==0,'task-m':item.taskLevel==1,'task-h':item.taskLevel==2}"
      >
        <h1 class="task-title">{{item.taskTitle}}</h1>
        <h2 class="task-remark">{{item.taskContent}}</h2>
        <div class="task-info">
          <h2 class="task-status" @click="finish(item.id)">FINISH</h2>
          <h2 class="task-performer">{{item.publisherName}}</h2>
        </div>
      </div>
    </div>
    <h1 v-else class="task-null">😘暂时没有任务哟!</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {TaskModel} from "@/model/datas";
import axios from "axios";
import apis from "@/common/apis";
import {useStore} from "vuex";
import router from "@/router";

export default defineComponent({
  name: "TaskList",
  setup(){
    const store = useStore()
    const taskData = reactive({
      datas:Array<TaskModel>()
    })

    initDataTask()
    function initDataTask(){
      axios.get(apis.apiUrl.task+'me/'+localStorage.getItem("adminId")).then(res=>{
        console.log(res)
        for(let i = 0;i<res.data.data.length;i++){
          taskData.datas.push(res.data.data[i])
        }
      })
    }

    function finish(taskId:number){

        axios.put(apis.apiUrl.task+"finish/"+taskId).then(res=>{
          router.go(0)
        })
    }

    return{
      taskData,
      finish
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.task-container-box{
  background-color: white;
  //@include shadow();
  //padding: 30px;
  width: 350px;
  .task-list{
    //padding: 5px;
    height: 650px;
    overflow-y: auto;
    .task-l{
      border-left: 5px solid #42b983 !important;
    }
    .task-m{
      border-left: 5px solid #F7DC6F !important;
    }
    .task-h{
      border-left: 5px solid #E74C3C !important;
    }
    .task-item{
      margin-bottom: 10px;
      text-align: left;
      border-left: 5px solid #42b983;
      padding: 20px;
      transition: all 0.3s;
      &:hover{
        @include shadowDynamic();
      }
      .task-remark{
        background-color: #F4F6F6;
        border-radius: 10px;
        padding: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        word-break: break-all;
      }
      .task-info{
        @include xFlex();
        align-items: center;
        justify-content: space-between;
        .task-status{
          cursor: pointer;
          transition: all 0.6s;
          &:hover{
            color: #42b983;
          }
        }
      }
    }
  }
  .task-null{
    padding: 10px;
    height: 100px;
    line-height: 100px;
    @include shadow();
  }
}
</style>
