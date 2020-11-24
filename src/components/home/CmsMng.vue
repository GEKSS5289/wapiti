<template>
  <div class="cms-me-box">
    <h1 class="cms-me-icon">🙃</h1>
    <h4 class="cms-me-admin-name">舒顺</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
name: "CmsMng"
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
    font-size: 120px;
  }
  .cms-me-admin-name{
    font-size: 20px;
    margin-top: 30px;
  }
}
</style>
