<template>
  <div class="cms-me-box">
    <h1 class="cms-me-icon">{{face}}</h1>
    <h4 class="cms-me-admin-name">{{name}}</h4>
    <h1 @click="logout">退出</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from "@/router";
export default defineComponent({
  name: "CmsMng",
  setup(){
    function logout(){
      localStorage.setItem("admin","")
      localStorage.setItem("isRoot","")
      localStorage.setItem("face","")
      localStorage.setItem("name","")
      router.push('/')
    }

    return{
      face:localStorage.getItem("face"),
      name:localStorage.getItem("name"),
      logout
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
