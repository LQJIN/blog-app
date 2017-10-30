<template>
  <div class="index-blog">
    <ul class="index-blog-ul">
      <li class="index-blog-ulli" v-for="news in newsList">
        <router-link to="/blog">
          <div class="text">
            <h5>{{news.title}}</h5>
            <ul>
              <li class="tag">{{news.tag}}</li>
              <li class="date">{{news.date}}</li>
              <li class="comment"><span class="glyphicon glyphicon-comment"></span> 5</li>
            </ul>
          </div>
          <div class="img">
            <img :src="news.images.small" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

  import Axios from 'axios';
  import $ from 'jquery'

  export default {
    data(){
      return {
        newsList:[],
        show:false
      }
    },
    mounted:function () {

    },
    methods:{
      loadData(){
        var lenght = this.newsList.length;
        Axios.get().then((res)=>{
          this.newsList = this.newsList.concat(res.data.subjects);
          //concat()函数作用是连接数组。
          this.show = false;
        })
      }
    }
  }
</script>

<style scoped>
  .index-blog{ padding: 0 0.2rem;}
  .index-blog-ulli{ display: inline-block; padding: 0.2rem 0; border-bottom: 0.02rem solid #f8f8f8;}
  .text{ float: left; text-align: left; font-size: 0.2rem; width: 4.6rem; height: 1.2rem;}
  .text h5{ font-size: 0.2rem; font-weight:bold; color: #000000; margin-bottom: 0.1rem;}
  .text ul li{ display: inline-block; margin-right: 0.05rem;}
  .text ul li span{ z-index: -1;}
  .img{ float: right; width: 1.4rem; height: 1.2rem; line-height: 1.4rem; text-align: center;}
  .tag{ color: #023b6b;}
  .date{ color: #b9b9b9;}
  .comment{ color: #104775;}
</style>
