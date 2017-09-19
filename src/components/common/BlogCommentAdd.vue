<template>
  <div class="blog-comment-add">
              <div class="comment-content">
                <div class="content-head">
                  <span v-on:click="toBlog" class="glyphicon glyphicon-remove"></span>
                  <h4>COMMENTS</h4>
                </div>
                <div class="comment-li">
                  <ul>
                    <li>
                      <img src="../../assets/img/p6.png" alt="">
                      <div class="comments">
                        <div class="name-date">
                          <div class="name">user的名子</div>
                          <div class="date">2017-09-18 15:58</div>
                        </div>
                        <div class="comment-words">
                          <p>The business magnate also shared with people how Alibaba has grown into what it is today.
                            The business magnate also shared with people how Alibaba has grown into what it is today.
                            The business magnate also shared with people how Alibaba has grown into what it is today.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src="../../assets/img/p4.png" alt="">
                      <div class="comments">
                        <div class="name-date">
                          <div class="name">user的名子</div>
                          <div class="date">2017-09-18 14:58</div>
                        </div>
                        <div class="comment-words">
                          <p>relationship need to look at today's .</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <img src="../../assets/img/p7.png" alt="">
                      <div class="comments">
                        <div class="name-date">
                          <div class="name">user的名子</div>
                          <div class="date">2017-09-18 14:58</div>
                        </div>
                        <div class="comment-words">
                          <p>relationship need to look at today's .</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="comment-sent">
                  <input type="text" />
                  <button type="submit">Send</button>
                </div>
              </div>
    <div class="content-bg"></div>
  </div>
</template>

<style scoped>
  .comment-li{ margin-top: 0.9rem;}
  .comment-li ul li{ position: relative; padding: 0.2rem 0 0 0; display: inline-block; font-size: 0.2rem;}
  .comment-li img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.2rem 0.2rem 0 0;
    text-align: center; border-radius: 50%;}

  .comment-content{width: 6rem;}
  .content-head { display: flex; height: 0.9rem; color: #fff; position: fixed; top: 0; width: 100%; border-bottom: 0.02rem solid #a2b7b8}
  .content-head span{ width: 1rem; height: 1rem; line-height: 1rem; text-align:center; font-size: 0.5rem; color: #0d4473;}
  .content-head h4 { flex: 1; text-align: center; text-indent: -1rem; line-height: 1rem; font-size: 0.5rem; color: #0d4473;}
  .comment-li ul li{ position: relative; padding: 0.2rem 0 0 0; display: inline-block; font-size: 0.2rem;}
  .comment-li img{ left: 0; top: 0; width: 1rem; height: 1rem; float: left; margin: 0.1rem 0.2rem 0 0;
    text-align: center; border-radius: 50%;}

  .comments {width:4.8rem; float: right; border-bottom: 0.02rem solid #5876a0; }
  .comment-words{ clear: both; margin-bottom: 0.4rem;}
  .name-date{ color: #ababab; margin: 0 0 0.3rem 0;}
  .comments .name{ float: left;}
  .comments .date{ float: right;}
  /*.blog-comment-add{position: fixed; top: 0;left: 0;width: 100%;height: 100%;}
  .comment-content{position: absolute;z-index: 200;width: 6rem; height: 5rem; box-sizing: border-box;left: 50%;top: 50%;margin-left: -3rem;margin-top: -2rem; padding: 0.1rem 0.1rem; background: #fff; box-shadow: 0 10px 15px rgba(0,0,0,0.2); text-align: center;}
  #pop-content h1{color: #555; padding-bottom: 0.2rem; border-bottom: 1px solid #DDD;}
  #pop-content p{color: #888; font-size: 21px;}
  #pop-content button{color: #FFF; background: #E74C3C; border-radius: 4px;border: none;font-size: 21px; padding: 10px 50px;}
  #pop-content button:hover{background: #C0392B;}
  #popup-bg{position: 100; z-index: 100; width: 100%; height: 100%; background: rgba(0,0,0,.3);}*/
</style>

<script>
  export default {
    methods:{
      toBlog:function () {
        history.back();
      }
    }
  }
</script>
