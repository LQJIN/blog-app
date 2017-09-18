<template>
  <div class="blog-head">
    <ul>
      <li v-on:click="toIndex"><span class="glyphicon glyphicon-chevron-left"></span></li>
      <li><span class="glyphicon glyphicon-zoom-in"></span></li>
      <li><span class="glyphicon glyphicon-star-empty"></span></li>
    </ul>
  </div>
</template>

<style scoped>
  .blog-head { height: 0.9rem; color: #ffffff;
    position: fixed; top: 0; width: 100%; background: #ffffff; }
  .blog-head { border-bottom: 0.02rem solid #a2b7b8}

  .blog-head ul li { display: inline-block; width: 0.8rem; height: 0.8rem; line-height: 0.8rem;
    text-align: center; font-size: 0.5rem; color: #9d9d9d; padding-top: 0.1rem;}

  .blog-head ul li:nth-child(3){
    float: right;}
  .blog-head ul li:nth-child(2){
    float: right;}
</style>

<script>
  export default {
    methods:{
      toIndex:function(){
        history.back();
      }
    }
  }
</script>
