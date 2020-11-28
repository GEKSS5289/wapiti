<template>
  <div class="log-info-box" >
    <h1>🥪世界</h1>
    <div class="log-list" v-if="logsData.datas.length!=0">
      <div class="log-list-item" v-for="(item,index) in logsData.datas" :key="index">
        <h3 class="log-content">{{item.logContent}}</h3>
        <h3 class="log-create-time">{{item.createdTiem}}</h3>
      </div>
    </div>
    <h1 class="no-logs" v-else>毫无音讯...</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive} from 'vue'
import {LogsModel} from "@/model/datas";
import apis from "@/common/apis";
import axios from 'axios'
export default defineComponent({
  name: "LogInfo",
  setup(){
    const logsData = reactive({
      datas:Array<LogsModel>()
    })

    initData()
    function initData(){
      axios.get(apis.apiUrl.logs).then(res=>{
        for(let i = 0;i<res.data.data.length;i++){
          logsData.datas.push(res.data.data[i])
        }
      })
    }

    return{
      logsData
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.log-info-box{
  @include generalBox();
  flex: 1;
  .log-list{
    margin-top: 30px;
    height: 130px;
    overflow-y: auto;
    .log-list-item{
      margin-bottom: 5px;
      //width: 300px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      @include borderLeft(#42b983);
      //@include shadow();
      background-color: #E8F6F3;
      padding: 10px;
      .log-content{
        margin-right: 20px;

      }
      .log-create-time{

      }
    }
  }
  //flex: 1;
  .no-logs{
    padding: 20px;

    margin-top: 40px;
    color: #1ABC9C;
  }
}
</style>
