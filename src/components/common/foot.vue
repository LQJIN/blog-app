<template>
  <div class="foot fixed">
    <ul>
      <li><router-link to="/"><span class="glyphicon glyphicon-list-alt"></span> Blog</router-link></li>
      <li><router-link to="/"><span class="glyphicon glyphicon-user"></span> Me</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
  li a{display: inline-block; width: 100%;height: 100%; color: #0d4473;}
  .foot{position:fixed;width: 100%; bottom: 0;text-align: center;}
  .fiexd{position: fixed;}
  ul{display: flex;height: 0.8rem;line-height: 0.8rem;text-align: center;}
  ul li{flex: 1;  background-color: #dee2e3;}
  ul li:nth-child(1){background-color: #dee2e3;
    border-right: 0.25px solid darkslategray }
</style>

<!-- 可以看到foot.vue使用了<router-link>标签，该标签主要实现跳转链接功能，
属性to='/'即是跳转到path为'/'的路径（即我们在路由配置中定义的Index路由） -->
<!-- 在<style>标签上添加scoped，声明作用域，样式效果只在该页面内生效，不污染全局。 -->
