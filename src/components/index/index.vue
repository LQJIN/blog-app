<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Headd></Headd>
    <foot></foot>
  </div>
</template>

<script>
  import Headd from "../common/Head.vue"
  import Foot from "../common/foot.vue"

  export default {
    name: 'app',
    components: {
      Headd,
      Foot
    }
  }
</script>

<style scoped>

</style>
