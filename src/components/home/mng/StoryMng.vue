<template>
  <div class="story-mng-box">
    <div class="story-header">
      <input type="text" placeholder="事迹标题">
      <textarea placeholder="我有灵感了....."></textarea>
      <div class="dynamic-push">发表</div>
    </div>
    <div class="story-list">
      <div class="story-item">
        <div class="story-info">
          <h1 class="story-name">我们</h1>
          <h1 class="story-content">内容XXXXXXXXX</h1>
        </div>
        <div class="story-op">
          <h1>删除</h1>
          <h1>修改</h1>
        </div>

      </div>
      <div class="story-item">
        <div class="story-info">
          <h1 class="story-name">我们</h1>
          <h1 class="story-content">内容XXXXXXXXX</h1>
        </div>
        <div class="story-op">
          <h1>删除</h1>
          <h1>修改</h1>
        </div>

      </div>
      <div class="story-item">
        <div class="story-info">
          <h1 class="story-name">我们</h1>
          <h1 class="story-content">内容XXXXXXXXX</h1>
        </div>
        <div class="story-op">
          <h1>删除</h1>
          <h1>修改</h1>
        </div>

      </div>
      <div class="story-item">
        <div class="story-info">
          <h1 class="story-name">我们</h1>
          <h1 class="story-content">内容XXXXXXXXX</h1>
        </div>
        <div class="story-op">
          <h1>删除</h1>
          <h1>修改</h1>
        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StoryMng"
})
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin.scss";
.story-mng-box {
  /*width: 00px;*/


  margin-bottom: 30px;
  transition: all 0.3s;
  border-radius: 5px;

  .story-header {
    display: flex;
    flex-direction: column;
    @include shadow();
    input {
      margin-bottom: 10px;
      text-align: left;
      width: 200px;
      height: 50px;
      //padding: 20px;
      border: none;
      font-size: 20px;
      color: #1ABC9C;
    }

    input::placeholder {
      font-size: 20px;
      color: #42b983;
      font-weight: bold;
    }

    /*margin-left: 10px;*/
    padding: 20px;
    color: #1ABC9C;

    textarea {
      padding: 10px;
      background: none;
      color: #333333;
      font-size: 20px;
      height: 100px;
      @include textareaDef();
      margin-bottom: 20px;
    }

    .dynamic-push {
      padding: 10px;
      border: 1px solid #1ABC9C;
      color: #1ABC9C;
      width: 50px;
      height: 10px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 5px;
      transition: all 1s;

      &:hover {
        background-color: #1ABC9C;
        color: white;
      }
    }

  }
  .story-list{
    margin-top: 20px;
    height: 300px;
    overflow-y: auto;
    .story-item{

      margin-bottom: 20px;
      display: flex;
      width: 400px;
      padding: 10px;
      text-align: left;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      border-left: 5px solid #1ABC9C;
      .story-info{

        .story-content{
          width: 300px;
          word-break: break-all;
        }
      }
    }
  }
}




</style>
