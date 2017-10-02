<template>
  <div class="blog-foot">
    <ul>
      <li>
        <a v-on:click="msgAdd()">
          <div>
            <h5>{{msg}}</h5>
            <span class="icon-thumbs-up"></span>
          </div>
        </a>
      </li>
      <li>
        <router-link to="/comment">
          <h5>5</h5>
          <span class=" icon-comments"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <span class=" icon-share"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .blog-foot{position:fixed; width: 100%; bottom: 0; }

  ul {display: flex; height: 0.7rem;line-height: 0.7rem;}
  ul li {flex: 1;  background-color: #ffffff; text-align: center; font-size: 0.3rem;}
  ul li:nth-child(3){padding-top: 0.03rem;}
  .blog-foot a{display: inline-block; width: 100%;height: 100%; color: #1c4d9c; text-align:center;}

  .blog-foot span{width: 0.45rem; height: 0.7rem; line-height: 0.7rem;  font-size: 0.4rem;}
  .blog-foot h5{ display: inline-block; text-align: center; position: relative; font-size: 0.25rem;}
  /*解决了foot.vue和BlogFoot.vue中图标和文字不能对齐的问题。
      文字在<h5>标签中，给h5设置为inline-block行块，然后通过定位控制了文字与图标的位置。*/
</style>

<script>
  export default {
    data(){
      let msg = 0;
      return {
        msg
      }
    },
    methods:{
      msgAdd(){
        this.msg++;
      }
    }
  }
</script>
