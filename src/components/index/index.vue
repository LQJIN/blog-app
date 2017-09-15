<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Head></Head>
    <foot></foot>
  </div>
</template>

<script>
  import Head from "../common/Head.vue"
  import Foot from "../common/foot.vue"

  export default {
    name: 'app',
    components: {
      Head,
      Foot
    }
  }
</script>

<style scoped>

</style>
