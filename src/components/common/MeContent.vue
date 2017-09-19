<template>
  <div class="me-content">
    <div class="img-name">
      <img src="../../assets/img/p4.png" alt="">
      <h4>UserName</h4>
    </div>
    <div class="blog-block">
      <ul>
        <li><span class="glyphicon glyphicon-download-alt"></span><i>DOWNLOAD</i></li>
        <li><span class="glyphicon glyphicon-comment"></span><i>MY COMMENTS</i></li>
        <li><span class="glyphicon glyphicon-adjust"></span><i>DARK</i></li>
        <li><span class="glyphicon glyphicon-star-empty"></span><i>SAVED</i></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .me-content{  width:6.4rem;  height:10rem; background:
    -webkit-linear-gradient(#1649a9, #dadada); margin: 1.01rem 0 0.7rem 0;}
  .img-name{ text-align: center; padding-top: 0.5rem;}
  .img-name img{width: 1.8rem; height: 1.8rem; border-radius: 50%; padding-bottom: 0.2rem;}
  .img-name h4{font-size: 0.3rem; color: #ffffff;}

  .blog-block{ margin: 0.4rem 0.5rem 0 0.5rem; }
  .blog-block ul li{ display: inline-block; width: 2.2rem; height: 2rem; line-height: 2rem;
    text-align: center; background: #ffffff; padding: 0.1rem; position: relative;}
  .blog-block ul li:nth-child(2){margin-left: 0.5rem;}
  .blog-block ul li:nth-child(3){margin-top: 0.7rem;}
  .blog-block ul li:nth-child(4){margin-left: 0.5rem; margin-top: 0.7rem;}
  .blog-block ul li span{  width: 1rem; height: 1rem;  font-size: 1rem; color: #5c9ef5;}
  .blog-block ul li i{ font-size: 0.2rem; color: #5c9ef5; display: block; left: 0.1rem;}
</style>
