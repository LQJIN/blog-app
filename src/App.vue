<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Foot from './components/common/foot.vue'
  export default {
    name: 'app',
    components: {
      Foot
    }
}
</script>

<style scoped>
  /* 有公共样式reset.css,并在App.vue中引入，作用域设为全局 */
  @import "./assets/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
