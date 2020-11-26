<template>
  <div class="cms-me-box" >
    <h1 class="cms-me-icon">{{face}}</h1>
    <h4 class="cms-me-admin-name">{{name}}</h4>
    <h1 @click="logout">退出</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from "@/router";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: "CmsMng",
  setup(){
    function logout(){
      sessionStorage.clear()
      router.push('/')
    }

    return{
      face:sessionStorage.getItem("face"),
      name:sessionStorage.getItem("name"),
      logout,

    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.cms-me-box{
  @include shadow();
  width:200px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
  height: 200px;
  .cms-me-icon{
    font-size: 80px;
  }
  .cms-me-admin-name{
    font-size: 20px;
    margin-top: 10px;
  }
}
</style>
