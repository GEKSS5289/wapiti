<template>
  <div class="page-home">
    <div class="page-home-header">
      <cms-mng></cms-mng>
      <log-info></log-info>
      <CheckPending></CheckPending>
    </div>
    <div class="page-home-middle">
      <task-container></task-container>
      <mng-center></mng-center>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CmsMng from "@/components/home/CmsMng.vue";
import LogInfo from "@/components/home/LogInfo.vue";
import CheckPending from "@/components/home/CheckPending.vue";
import TaskContainer from "@/components/home/TaskContainer.vue";
import MngCenter from "@/components/home/MngCenter.vue";
import Preview from "@/components/home/Preview.vue";

export default defineComponent({
  name: 'Home',
  components: {
    CmsMng,
    LogInfo,
    CheckPending,
    TaskContainer,
    MngCenter,
    Preview,

  }
})
</script>


<style lang="scss">

.page-home{
  width: 1226px;
  margin: 0 auto;
  .page-home-header{
    margin-top: 20px;
    display: flex;
  }
  .page-home-middle{
    margin-top: 30px;
    display: flex;
    margin-bottom: 120px;
  }
  .page-home-preview{
    margin-top: 30px;
  }
}
</style>
