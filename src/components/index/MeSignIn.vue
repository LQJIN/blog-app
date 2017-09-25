<template>
  <div class="me-sign-in">
    <me-head></me-head>
      <div class="sign-in-out">
        <h4>SIGN IN</h4><button>SIGN UP</button>
      </div>
    <div class="sign-content">
      <div class="input-button">
        <form action="" method="post">
            <div class="name"><span class="icon-envelope-alt"></span>
              <input type="text" name="name" placeholder="Email/Mobile"/>
            </div>
            <div class="pass"><span class="icon-lock"></span>
              <input type="password" name="pass" placeholder="Password"/>
            </div>
          <div class="keep-sign">
            <span @click="changeClass(isEmpty,isCheck)" v-bind:class="{'icon-check-empty': isEmpty, 'icon-check': isCheck}"></span>
            <input type="password" name="pass" placeholder="Password"/>
          </div>
         <button type="submit">Continue</button>
        </form>
      </div>
    </div>
    <foot></foot>
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
  .sign-in-out h4{  flex: 1;  text-indent: 1.4rem; line-height: 1rem; font-size: 0.35rem;}
  .sign-in-out button{ width: 1.3rem; height: 0.6rem; line-height: 0.6rem; margin: 0.2rem 0.1rem 0.2rem 0;
    background: #2ac395; font-size: 0.25rem; color: #ffffff; border: none;}

  .sign-content{padding: 0 0.3rem; width:5.8rem;  height:9rem; text-align: center; background:
    -webkit-linear-gradient(#1649a9, #dadada); margin: 0 0 0.7rem 0;}
  .sign-content span{ width: 0.6rem; height:0.6rem; line-height: 0.6rem; color: #ffffff; font-size: 0.4rem;}
  .sign-content input{ width: 5rem;height: 0.6rem; font-size: 0.25rem; color: #ffffff;
    line-height: 0.6rem; border: none; background: transparent; outline: none; margin-left: 0.1rem;}
  .input-button{text-align: left;}
  .input-button div{ border-bottom: 0.01rem solid #ffffff; padding: 0.2rem 0;}
  .pass input{margin-left: 0.2rem;}
</style>

<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/foot.vue'

  export default {
    data(){
      var isEmpty,isCheck;
    },
    components:{
      MeHead,
      Foot
    },
    methods:{
      changeClass:function (isEmpty,isCheck) {
        if(isEmpty != 1){
          return(isEmpty == true,
          isCheck == false);
        }else{
          return(isEmpty == false,
          isCheck == true);
        }
      }
    }
  }
</script>
