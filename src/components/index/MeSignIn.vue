<template>
  <div class="me-sign-in">
    <me-head></me-head>
      <div class="sign-in-out">
        <h4>SIGN IN</h4><button>SIGN UP</button>
      </div>
    <div class="sign-content" id="sign-content">
      <div class="input-button">
        <form action="" method="post">
            <div class="name"><span class="icon-envelope-alt"></span>
              <input type="text" name="name" placeholder="Email/Mobile"/>
            </div>
            <div class="pass"><span class="icon-lock"></span>
              <input type="password" name="pass" placeholder="Password"/>
            </div>
          <div class="keep-sign">
            <span v-on:click="toggle()" v-bind:class="{'icon-check':isCheck,'icon-check-empty':!isCheck}"></span>
            <p>Keep me signed in</p>
          </div>
         <input class="button" type="submit" value="Continue"/>
        </form>
      </div>
      <div class="forget-password">
        <a href="index.vue">Forget Password?</a>
      </div>
      <div class="other-account">
        <p>Sign in with other accounts</p>
          <div class="wechat"><img src="../../assets/img/wechat1.png" alt="wechat"><p>wechat</p></div>
          <div class="weibo"><img src="../../assets/img/weibo.png" alt="weibo"><p>weibo</p></div>
          <div class="clear-both"></div>
      </div>
    </div>
    <foot v-bind:class="{'isMe':isNowPage}"></foot>
  </div>
</template>

<style scoped>
  /*input背景提示文字颜色*/
  ::-webkit-input-placeholder { color:#ffffff; font-size: 0.25rem; }
  ::-moz-placeholder { color:#ffffff; font-size: 0.25rem;} /* firefox 19+ */
  :-ms-input-placeholder { color:#ffffff; font-size: 0.25rem;} /* ie */
  input:-moz-placeholder { color:#ffffff; font-size: 0.25rem;}

  .me-sign-in{ margin-top: 1rem;}
  .sign-in-out{ height: 1rem; text-align: center; display: flex; background: #002a76; color: #ffffff;}
  .sign-in-out h4{  flex: 1;  text-indent: 1.6rem; line-height: 1rem; font-size: 0.35rem;}
  .sign-in-out button{ width: 1.3rem; height: 0.6rem; line-height: 0.6rem; margin: 0.2rem 0.1rem 0.2rem 0;
    background: #2ac395; font-size: 0.25rem; color: #ffffff; border: none;}

  .sign-content{padding: 0 0.3rem; width:5.8rem; position: absolute; top:2rem; bottom: 0; text-align: center; background:
    -webkit-linear-gradient(#1649a9, #dadada); margin: 0 0 0.7rem 0;}
  .sign-content span{ width: 0.6rem; height:0.6rem; line-height: 0.6rem; color: #ffffff; font-size: 0.4rem;}
  .sign-content input{ width: 5rem;height: 0.6rem; font-size: 0.25rem; color: #ffffff;
    line-height: 0.6rem; border: none; background: transparent; outline: none; }
  .input-button{text-align: left;}
  .input-button div{ border-bottom: 0.01rem solid #ffffff; padding: 0.2rem 0 0.1rem 0;}
  .pass input{margin-left: 0.2rem;}
  .sign-content .button{background: #89a1d1; color: #ffffff;  width: 5.8rem;}
  .sign-content .keep-sign{border: none; color:#ffffff; font-size: 0.25rem;}
  .sign-content .keep-sign p{display: block; width: 5rem; float: right;}
  .forget-password{text-align: center; border: none; height: 1rem; line-height: 1rem; font-size: 0.25rem;}
  .forget-password a{ color: #1c4d9c; text-decoration-line: underline;}
  .other-account .wechat{ width: 2.5rem; float: left; padding-left: 0.4rem;}
  .other-account .weibo{ width: 2.5rem; float: right; padding-right: 0.4rem;}
  /*.other-account ul li:nth-child(1){float: left;}
  .other-account ul li:nth-child(2){float: right;}*/
  .other-account img{width: 1.2rem; height: 1.2rem;}
  .other-account p{color: #ffffff; font-size: 0.25rem;}
  .clear-both{clear: both;}
</style>

<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/foot.vue'

  export default {
    data(){
      return{
        isCheck: true,
        isNowPage: true
      }
    },
    components: {
      MeHead,
      Foot
    },
    methods: {
      toggle: function () {
          this.isCheck = !this.isCheck;
      }
    }
  }
</script>
