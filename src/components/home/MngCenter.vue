<template>
  <div class="mng-center-box">
    <div class="mng-center-nav">
      <router-link to="/story" tag="a">事迹管理</router-link>
      <router-link to="/video" tag="a">视频管理</router-link>
      <router-link to="s" tag="a">任务管理</router-link>
      <router-link to="s" tag="a">用户管理</router-link>
    </div>
    <div class="main-mng">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MngCenter"
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.mng-center-box{
  @include generalBox();
  height: 650px;
  flex: 2;
  .mng-center-nav{
    //background-color: red;
    text-align: left;
    a{
      margin-right: 30px;
    }
  }
  .main-mng{
    margin-top: 20px;
  }
}
</style>
