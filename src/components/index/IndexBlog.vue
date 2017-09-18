<template>
  <div class="index-blog">
    <router-link to="/blog">
      <div class="text">
        <h5>Alibaba's Jack Ma shares insight into innovation,entrepreneurship</h5>
        <ul>
          <li class="tag">BUSINESS</li>
          <li class="date">September 18,2017</li>
          <li class="comment"><span class="glyphicon glyphicon-comment"></span> 5</li>
        </ul>
      </div>
      <div class="img">
        <img src="../../assets/img/p1.png" alt="" />
      </div>
    </router-link>
  </div>
</template>
<style scoped>
  .index-blog{ padding: 0.2rem 0.2rem 0.2rem 0.2rem; height: 1.2rem;}
  .text{ float: left; text-align: left; font-size: 0.2rem; width: 4.6rem; height: 1.2rem;}
  .text h5{ font-size: 0.2rem; font-weight:bold; color: #000000; margin-bottom: 0.1rem;}
  .text ul li{ display: inline-block; margin-right: 0.05rem;}
  .text ul li span{ z-index: -1;}
  .img{ float: right; width: 1.4rem; height: 1.2rem; text-align: center;}
  .tag{ color: #023b6b;}
  .date{ color: #b9b9b9;}
  .comment{ color: #104775;}
</style>
