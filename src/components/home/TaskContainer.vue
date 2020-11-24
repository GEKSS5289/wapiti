<template>
  <div class="task-list-box">

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TaskList"
})
</script>

<style lang="scss" scoped>
.task-list-box{
  @include generalBox();
}
</style>
