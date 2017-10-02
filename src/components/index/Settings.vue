<template>
  <div class="settings">
    <div class="block">
      <ul>
        <li>Saved</li>
        <li>Download</li>
        <li>Dark</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li>Saved</li>
        <li>Download</li>
        <li>Dark</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li>Share This App</li>
        <li>Help</li>
        <li>About</li>
        <li v-on:change="change"><mt-switch class="switch" v-model="value">开关</mt-switch></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .settings{ background: #ffffff;}
  .settings .block{ background: #f7f7f7; border-bottom: 0.02rem solid #d7d7d7;
    border-top: 0.02rem solid #d7d7d7;margin: 0.4rem 0;}
  .settings .block ul li{ width: 6rem; height: 1.4rem; line-height: 1.4rem;
    color: #000000; border-bottom: 0.02rem solid #d7d7d7; margin-left: 0.4rem; font-size: 0.4rem;}
  .settings .block .switch span{font-size: 0.4rem;}
</style>

<script>

  export default{
    data(){
      return{
        value: false
      }
    },
    methods:{
      change:function () {
        console.log('sssssss');
      }
    }
  }

</script>

<!--备注：
1.mint-ui上的事件只能使用change，不能使用click。-->
