<template>
  <div class="settings">
    <div class="content-head">
      <span v-on:click="toBlog" class="icon-arrow-left"></span>
      <h4>SETTINGS</h4>
    </div>
    <div class="block">
      <div class="block1">
        <ul>
          <li>Saved</li>
          <li>Download</li>
          <li>Dark</li>
        </ul>
      </div>
      <div class="block1">
        <ul>
          <li>Saved</li>
          <li>Download</li>
          <li>Dark</li>
        </ul>
      </div>
      <div class="block1">
        <ul>
          <li>Share This App</li>
          <li>Help</li>
          <li>About</li>
          <li v-on:change="change"><mt-switch class="switch" v-model="value">开关</mt-switch></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .settings{ background: #ffffff;}

  .content-head { display: flex; height: 0.9rem; background: #ffffff; position: fixed; top: 0; width: 100%; border-bottom: 0.01rem solid #d7d7d7;  z-index: 1;}
  .content-head span{ width: 0.9rem; height: 0.86rem; line-height: 0.86rem; text-align:center; font-size: 0.5rem; color: #0d4473; padding-top: 0.04rem;}
  .content-head h4 { flex: 1; height: 0.86rem; line-height: 0.86rem; text-align: center; text-indent: -0.6rem; font-size: 0.36rem;  color: #0d4473; padding-top: 0.04rem;}

  .settings .block{margin-top: 1.3rem;}
  .settings .block1{ background: #f7f7f7; border-bottom: 0.02rem solid #d7d7d7;
    border-top: 0.02rem solid #d7d7d7; margin:  0 0 0.4rem 0;}
  .settings .block1 ul li{ width: 6rem; height: 1rem; line-height: 1rem;
    color: #000000; border-bottom: 0.02rem solid #d7d7d7; margin-left: 0.4rem; font-size: 0.25rem;}
  .settings .block1 ul li:last-child{border: none;}
  .settings .block1 .switch span{font-size: 0.3rem;}
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
      },
      toBlog:function () {
        history.back();
      }
    }
  }

</script>

<!--备注：
1.mint-ui上的事件只能使用change，不能使用click。-->
