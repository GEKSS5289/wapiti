<template>
  <div class="loader">Loading...</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Loading"
})
</script>

<style lang="scss" scoped>
.loader {
  margin: 0 auto;
  font-size: 20px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: load-effect 1s infinite linear;

  margin-bottom: 50px

}
@keyframes load-effect {
  0% {
    /*

    -3em:左移3em

     2em:下移2em

     0:模糊距离0，即纯色

     .5em:外扩.5em

     #FFF:白色

    */
    box-shadow: -3em 2em 0 .5em #1ABC9C, 0 2em 0 0 #F7DC6F, 3em 2em 0 -.5em #1ABC9C;
  }
  25% {
    box-shadow: -3em 2em 0 0 #42b983, 0 2em 0 -.5em #E74C3C, 3em 2em 0 0 #42b983;
  }
  50% {
    box-shadow: -3em 2em 0 -0.5em #1ABC9C, 0 2em 0 0 #E74C3C, 3em 2em 0 .5em #1ABC9C;
  }
  75% {
    box-shadow: -3em 2em 0 0 #F7DC6F, 0 2em 0 .5em #1ABC9C, 3em 2em 0 0 #1ABC9C;
  }
  100% {
    box-shadow: -3em 2em 0 .5em #1ABC9C, 0 2em 0 0 #F7DC6F, 3em 2em 0 -.5em #1ABC9C;
  }
}

</style>
