<template>
  <div class="task-container-box">
    <h1 style="text-align: left;margin-bottom: 10px">任务列表</h1>
    <div class="task-list">
      <div class="task-item">
        <h1 class="task-content">做饭</h1>
        <h2 class="task-remark">给心爱的人好好烹饪一顿美食</h2>
        <div class="task-info">
          <h2 class="task-end-time">2020-5.5</h2>
          <h2 class="task-status">FINISH</h2>
          <h2 class="task-performer">Sue</h2>
        </div>
      </div>
      <div class="task-item">
        <h1 class="task-content">做饭</h1>
        <h2 class="task-remark">给心爱的人好好烹饪一顿美食</h2>
        <div class="task-info">
          <h2 class="task-end-time">2020-5.5</h2>
          <h2 class="task-status">FINISH</h2>
          <h2 class="task-performer">Sue</h2>
        </div>
      </div>
      <div class="task-item">
        <h1 class="task-content">做饭</h1>
        <h2 class="task-remark">给心爱的人好好烹饪一顿美食</h2>
        <div class="task-info">
          <h2 class="task-end-time">2020-5.5</h2>
          <h2 class="task-status">FINISH</h2>
          <h2 class="task-performer">Sue</h2>
        </div>
      </div>
      <div class="task-item">
        <h1 class="task-content">做饭</h1>
        <h2 class="task-remark">给心爱的人好好烹饪一顿美食</h2>
        <div class="task-info">
          <h2 class="task-end-time">2020-5.5</h2>
          <h2 class="task-status">FINISH</h2>
          <h2 class="task-performer">Sue</h2>
        </div>
      </div>
      <div class="task-item">
        <h1 class="task-content">做饭</h1>
        <h2 class="task-remark">给心爱的人好好烹饪一顿美食</h2>
        <div class="task-info">
          <h2 class="task-end-time">2020-5.5</h2>
          <h2 class="task-status">FINISH</h2>
          <h2 class="task-performer">Sue</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TaskList"
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
}
</style>
