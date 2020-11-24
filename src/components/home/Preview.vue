<template>
  <div class="preview-box">
    <div class="preview-nav">
      <router-link to="storypreview" tag="a">事迹</router-link>
      <router-link to="s" tag="a">视频</router-link>
    </div>
    <div class="main-preview">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Preview"
})
</script>

<style lang="scss" scoped>
.preview-box{
  .preview-nav{
    text-align: left;
  }
}
</style>
