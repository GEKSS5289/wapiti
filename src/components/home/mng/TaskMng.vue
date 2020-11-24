<template>
  <div class="task-mng-box">
    <div class="release-task-list">
      <div class="release-task-item">
        <h1 class="task-name">做饭</h1>
        <h2 class="task-remark">给我女朋fdsafsaffdsafsafsafsfsafsfsaf友做饭</h2>
        <div class="task-info">
          <h2 class="task-abolish">废除</h2>
          <h2 class="task-status">已完成</h2>
          <h2 class="task-performer">执行人:舒顺</h2>
        </div>
      </div>
      <div class="release-task-item">
        <h1 class="task-name">做饭</h1>
        <h2 class="task-remark">给我女朋fdsafsaffdsafsafsafsfsafsfsaf友做饭</h2>
        <div class="task-info">
          <h2 class="task-abolish">废除</h2>
          <h2 class="task-status">已完成</h2>
          <h2 class="task-performer">执行人:舒顺</h2>
        </div>
      </div>
      <div class="release-task-item">
        <h1 class="task-name">做饭</h1>
        <h2 class="task-remark">给我女朋fdsafsaffdsafsafsafsfsafsfsaf友做饭</h2>
        <div class="task-info">
          <h2 class="task-abolish">废除</h2>
          <h2 class="task-status">已完成</h2>
          <h2 class="task-performer">执行人:舒顺</h2>
        </div>
      </div>
    </div>
    <div class="release-task-center">
      <h1 style="text-align: left;margin-bottom: 20px">发布任务</h1>
      <div class="task-write-info">
        <input class="write-task-name" type="text" placeholder="任务名">
        <textarea class="write-task-content" placeholder="任务描述"></textarea>
        <div class="task-select-level">
          <h1 class="level-low">低优先</h1>
          <h1 class="level-middle">中优先</h1>
          <h1 class="level-hight">高优先</h1>
        </div>
        <div class="push">
          <div class="select-performer">选择执行人</div>
          <div class="push-task-btn">发布任务</div>
        </div>
      </div>
      <div class="performer-list">
        <div class="performer-item">
          <h1 class="admin-emoji">😝</h1>
          <h1 class="admin-name">舒顺</h1>
        </div>
        <div class="performer-item">
          <h1 class="admin-emoji">😝</h1>
          <h1 class="admin-name">舒顺</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
export default defineComponent({
name: "TaskMng"
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
      width: 300px;

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
        h2{
          margin-right: 10px;
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
        .task-performer{
          background-color: #E8F6F3;
          border-radius: 5px;
          color: #76D7C4;
          text-align: center;
        }

      }
    }
  }

  .release-task-center{
    margin-top: 50px;
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
          width: 100px;
          height: 25px;
          border-radius: 10px;
          background-color: #2c3e50;
          color: white;
          line-height: 25px;
          cursor: pointer;
        }
        .push-task-btn{
          width: 100px;
          height: 25px;
          line-height: 25px;
          border-radius: 10px;
          margin-left: 20px;
          background-color: #42b983;
          color: white;
          font-weight: bold;
          cursor: pointer;
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
