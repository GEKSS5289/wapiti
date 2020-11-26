<template>
  <header-nav></header-nav>
  <div class="page-home">
    <div class="page-home-header">
      <cms-mng :class="{'cmsMng-transition-begin':cmsMngstatus,'cmsMng-transition-end':!cmsMngstatus}"></cms-mng>
      <log-info :class="{'loginfo-transition-begin':loginfoStatus,'loginfo-transition-end':!loginfoStatus}"></log-info>
      <CheckPending :class="{'check-mng-transition-begin':checkMngStatus,'check-mng-transition-end':!checkMngStatus}"></CheckPending>
    </div>
    <div class="page-home-middle">
      <task-container :class="{'task-container-transition-begin':taskContainerStatus,'task-container-transition-end':!taskContainerStatus}"></task-container>
      <mng-center :class="{'mng-center-transition-begin':mngCenterStatus,'mng-center-transition-end':!mngCenterStatus}"></mng-center>
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
import HeaderNav from "@/components/common/HeaderNav.vue";
import {cmsMngInit} from "@/script/transitionInit";
export default defineComponent({
  name: 'Home',
  components: {
    CmsMng,
    LogInfo,
    CheckPending,
    TaskContainer,
    MngCenter,
    Preview,
    HeaderNav
  },
  setup(){
    return{
      ...cmsMngInit()
    }
  }
})
</script>


<style lang="scss">

.page-home{
  position: relative;
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
