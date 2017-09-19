<template>
  <div class="blog-foot">
    <ul>
      <li>
        <router-link to="/">
          <div>
            <h5>73</h5>
            <span class="glyphicon glyphicon-thumbs-up"></span>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/comment">
          <h5>5</h5>
          <span class="glyphicon glyphicon-comment"></span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <span class="glyphicon glyphicon-share"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .blog-foot{position:fixed; width: 100%; bottom: 0; }

  ul {display: flex; height: 0.7rem;line-height: 0.7rem;}
  ul li {flex: 1;  background-color: #ffffff; text-align: center; font-size: 0.3rem;}

  .blog-foot a{display: inline-block; width: 100%;height: 100%; color: #1c4d9c; text-align:center;}

  .blog-foot span{width: 0.45rem; height: 0.7rem; line-height: 0.7rem;  font-size: 0.36rem;}
  .blog-foot h5{ display: inline-block; text-align: center; position: relative;
    bottom: 0.09rem; font-size: 0.2rem;}
</style>
<!--解决了foot.vue和BlogFoot.vue中图标和文字不能对齐的问题。
文字在<h5>标签中，给h5设置为inline-block行块，然后通过定位控制了文字与图标的位置。-->
