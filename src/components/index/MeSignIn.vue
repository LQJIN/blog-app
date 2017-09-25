<template>
  <div class="me-sign-in">
    <me-head></me-head>
    <div class="sign-content">
      <div class="sign-in-out">
        <h4>SIGN IN</h4><button>SIGN UP</button>
      </div>
      <div class="input-button">
        <form action="">

          <span class="icon-camera-retro"></span>
          <input type="text" name="username"/>
          <span class="icon-camera-retro"></span>
          <input type="text" name="username"/>
          <span class="icon-camera-retro"></span>
          <input type="text" name="username"/>
          <button type="submit" >submit</button>

        </form>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<style scoped>
  .me-sign-in{ margin-top: 1rem;}
  .sign-in-out{ height: 1rem; text-align: center; display: flex; background: #002a76; color: #ffffff;}
  .sign-in-out h4{  flex: 1;  text-indent: 1.4rem; line-height: 1rem; font-size: 0.35rem;}
  .sign-in-out button{ width: 1.3rem; height: 0.6rem; line-height: 0.6rem; margin: 0.2rem 0.1rem 0.2rem 0;
    background: #2ac395; font-size: 0.25rem; color: #ffffff; border: none;}
</style>

<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/foot.vue'

  export default {

    components:{
      MeHead,
      Foot
    }
  }
</script>
