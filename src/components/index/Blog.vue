<template>
  <div class="blog">
    <blog-head></blog-head>
    <blog-detail></blog-detail>
    <blog-comment></blog-comment>
    <blog-foot></blog-foot>
  </div>
</template>

<style scoped>

</style>

<script>
  import BlogHead from '../common/BlogHead.vue'
  import BlogDetail from '../common/BlogDetail.vue'
  import BlogFoot from '../common/BlogFoot.vue'
  import BlogComment from '../common/BlogComment.vue'

  export default {
    components:{
      BlogHead,
      BlogDetail,
      BlogComment,
      BlogFoot
    }
  }
</script>
