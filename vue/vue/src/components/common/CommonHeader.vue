<template>
  <div class="header">
    <div class="person">
      <slot>
        <img src="../../assets/img/个人.png" alt="">
        <div class="dialog">
         <div class="content">
           <div id="user-pic">
             <span class="pic"><img src="../../assets/img/user.jpg" alt=""></span>
             <h3>u-name</h3>
             <div id="mine">
               <a href="#">关注0&nbsp;&nbsp;</a>
               <span>|</span>
               <a href="#">&nbsp;&nbsp;粉丝0</a>
             </div>
           </div>
           <div class="message">
             <ul>
               <router-link to="/search"><li><img class="logo-img" src="../../assets/img/搜索.png"><span>搜索</span><img class="next-img" src="../../assets/img/大于.png"></li></router-link>
               <li><img class="logo-img" src="../../assets/img/消息.png"><span>消息</span><img class="next-img" src="../../assets/img/大于.png"></li>
               <li><img class="logo-img" src="../../assets/img/发布.png"><span>发布</span><img class="next-img" src="../../assets/img/大于.png"></li>
               <li><img class="logo-img" src="../../assets/img/书写.png"><span>报名</span><img class="next-img" src="../../assets/img/大于.png"></li>
               <li><img class="logo-img" src="../../assets/img/设置.png"><span>设置</span><img class="next-img" src="../../assets/img/大于.png"></li>
             </ul>
           </div>
         </div>
        </div>
      </slot>
    </div>

    <div class="logo"><slot name="title"><img src="../../assets/img/logo.png" alt=""></slot></div>
    <div class="edit">
      <slot name="publish">
        <img src="../../assets/img/书写.png" alt="">
        <div class="dialog-right">
          <ul class="img-box">
            <router-link to="/edit/EditZijian">
              <li class="zijian">
                <div><img src="../../assets/img/笑脸.png" alt=""></div><p>自荐</p>
              </li>
            </router-link>
            <router-link to="/edit/EditNotice">
              <li class="notice">
                <div><img src="../../assets/img/通告.png" alt=""></div><p>通告</p>
              </li>
            </router-link>
            <router-link to="/edit/EditPhoto">
              <li class="camera">
                <div><img src="../../assets/img/摄影.png" alt=""></div><p>摄影</p>
              </li>
            </router-link>
          </ul>
          <div class="close">
            <img src="../../assets/img/关闭.png" alt="">
          </div>
        </div>
      </slot>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted(){
      $('.dialog').hide();
      $('.person').on('click', function () {
        $('.dialog').show();
          $('.content').animate({
            left:'0'
          },400);
      });
      $('.dialog').on('click', function (e) {
        e.stopPropagation();
        if (e.target == $('.dialog')[0]) {
          $('.content').animate({
            left:'-4rem'
          },200);
          setTimeout(function(){
              $('.dialog').hide();
          },200)
        }
      });

      $('.edit').on('click',function(){
        $('.dialog-right').show();
      });
      $('.close img').on('click',function (e) {
        e.stopPropagation();
        $('.img-box').animate({
          bottom:'10rem'
        },function () {
          $('.dialog-right').hide();
          $('.img-box').animate({
            bottom:'0rem'
          })
        });

      });
    }
  }





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  .header{
    height:1rem;
    width:100%;
    display: flex;
    position: fixed;
    border-bottom: 0.01rem solid #ccc;
    top:0;
    z-index: 999;
    background: #ffffff;
    line-height:1rem;
  }
  .header div{
    flex: 1;
    text-align: center;
  }
  .header img{
    height:0.4rem;
    margin: 0.25rem auto;
  }
  .header .logo {
    flex: 4;
    height: 1rem;
    line-height: 1rem;
  }
  .header .logo img{
    height: 0.6rem;
    margin-top: 0.15rem;
  }
/*左侧按钮开始*/
  .dialog{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.7);
    z-index: 999;
  }
  body{
    position: relative;
  }
  .content{
    width: 4rem;
    background: #fff;
    background: #fff;
  }
  .content{
    background:#fff;
    height: 100%;
    position: absolute;
    left: -4rem;
    top: 0;
  }
  #user-pic .pic{
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    margin: 0.6rem 0 0.3rem 0;
    border-radius: 50%;
  }
  #user-pic .pic img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  /*#user-pic a{*/
    /*position: fixed;*/
    /*left: 1.6rem;*/
    /*top:2.3rem;*/
    /**/
  /*}*/
  .message{
    /*position: absolute;*/
    width: 259px;
    height:100%;
  }
  .message ul{
    width: 259px;
    top:3.5rem;
    left:0;
    right:1rem;
    bottom: 0;
    margin-left: 0.2rem;
    margin-right: 0.3rem;
  }
  .message ul li{
    width:100%;
    float: left;
  }
  .message{
    width: 259px;
    height:100%;
  }
  .message ul {
    width: 3.6rem;
    top: 3.5rem;
    left: 0;
    right: 2.5rem;
    bottom: 0;
    margin-left: 0.2rem;
    overflow: hidden;
    margin-right: 0.2rem;
  }

  .message a{
    color: #000;
  }

  .message ul li{
    width:100%;
    float: left;
  }

  .logo-img{
    float: left;
    /*position: absolute;*/
    /*left: 0.5rem;*/

  }
  .message span{
    float: left;
    padding-left: 0.5rem;
    /*padding-top: 0.2rem;*/
    font-size: 0.25rem;
  }
  .logo-img{
    float: left;
  }
  .message span{
    float: left;
    padding-left: 0.5rem;
    /*padding-top: 0.2rem;*/
    font-size: 0.25rem;
  }
  .message .next-img{
    position: relative;
    left:0.7rem;
  }
/*左侧个人信息按钮 结束*/
  /*右侧编辑按钮 开始*/
  .dialog-right{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: rgba(0,0,0,0.7);
    z-index: 999;
    display: none;
  }
  .img-box{
    position: absolute;
    bottom:0;
    display: flex;
    width:100%;
  }
  .img-box li{
    flex:1;
    text-align: center;
    color: #fff;
    position: absolute;

  }
  .img-box .zijian{
    animation:show-a 0.5s ease forwards;
  }
  @-webkit-keyframes show-a {
    0%{
      bottom:1rem;
      left:50%;
    }
    100%{
      bottom:3.3rem;
      left:0.7rem;
    }
  }
  .img-box .notice{
    animation:show-b 0.5s ease 0.1s forwards;
  }
  @-webkit-keyframes show-b {
    0%{
      bottom:1rem;
      left:50%;
    }
    100%{
      bottom:3.3rem;
      left:2.77rem;
    }
  }
  .img-box .camera{
    animation:show-c 0.5s ease 0.2s forwards;
  }
  @-webkit-keyframes show-c {
    0%{
      bottom:1rem;
      left:50%;
    }
    100%{
      bottom:3.3rem;
      left:4.85rem;
    }
  }
  .img-box li div{
    width:0.8rem;
    height:0.8rem;
    margin: 0 auto 0.2rem;
    background: #fff;
    border-radius: 50%;
  }
  .img-box li img{
    width:0.7rem;
    height:0.7rem;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-top:0.05rem;
  }
  .close{
    position: absolute;
    bottom:1rem;
    text-align: center;
    width:100%;
  }
  .close img{
    width:0.6rem;
    height:0.6rem;
  }
  /*右侧编辑按钮 结束*/
</style>
