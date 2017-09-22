<template>
  <div class="index">
    <!--<img src="./assets/logo.png">-->
    <Headd ></Headd>
    <index-blog></index-blog>
    <foot></foot>
  </div>
</template>

<style scoped>
  .index{  margin-top: 1rem; margin-bottom: 0.7rem;}
</style>

<script>
  import Headd from "../common/Head.vue"
  import Foot from "../common/foot.vue"
  import IndexBlog from "./IndexBlog.vue"


  export default {

    components: {
      Headd,
      Foot,
      IndexBlog
    }
  }
</script>
