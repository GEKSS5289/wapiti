<template>
    <div class="log-info-box">
      <h1>🥪操作日志</h1>
      <div class="log-list">
        <div class="log-list-item">
          <h3 class="log-content">发布了新闻</h3>
          <h3 class="log-create-time">2020-11:11</h3>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LogInfo"
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.log-info-box{
  @include generalBox();

  .log-list{
    margin-top: 30px;
    height: 130px;
    overflow-y: auto;
    .log-list-item{
      margin-bottom: 5px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      @include borderLeft(#42b983);
      //@include shadow();
      background-color: #E8F6F3;
      padding: 10px;
      .log-content{
        margin-right: 50px;

      }
      .log-create-time{

      }
    }
  }
  //flex: 1;
}
</style>
