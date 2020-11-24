<template>
  <div class="header-nav-box">
      <h1>WAPITI🌲CMS</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
name: "HeaderNav"
})
</script>

<style lang="scss" scoped>
.header-nav-box{

  background-color: white;
  padding: 20px;
  display: flex;
  h1{
    margin: 0 auto;
    //background-color: red;
    width: 1226px;
    text-align: left;
    //background-color:#F0F3F4;
    padding: 50px;
    font-size: 50px;
  }

}
</style>
