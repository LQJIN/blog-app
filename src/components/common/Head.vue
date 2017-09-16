<template>
  <div class="head">
      <slot>
        <span v-on="sideBar" class="glyphicon glyphicon-menu-hamburger"></span>
      </slot>

      <h2>BLOG</h2>
  </div>
</template>

<style scoped>
  .head { display: flex;  height: 1rem;  color: #fff;
          position: fixed;  top: 0;  width: 100%; background: #0d4473}
  .head span{ width: 1rem;  height: 1rem; line-height: 1rem;
    text-align:center; font-size: 20px; color: #9d9d9d; }
  .head h2 { flex: 1;  text-align: center;
             text-indent: -1rem; line-height: 1rem;}
</style>
<script>
  export default {
    methods: {
      sideBar: function () {
        history.go(-1);
      }
    }
  }
</script>
