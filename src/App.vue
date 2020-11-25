<template>

  <router-view/>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    HeaderNav
  }
})
</script>
<style lang="scss">
@import "assets/style/base.css";
@import "assets/style/mixin";
@import "assets/style/theme";
@import "assets/style/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
