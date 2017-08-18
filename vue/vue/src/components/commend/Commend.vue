<template>
  <div class="commend">
    <common-header></common-header>
    <common-swipe></common-swipe>
    <common-footer></common-footer>
    <ul id="commend-list">
      <li>
        <div class="message">
          <div class="user-pic">
            <img src="static/img/user.jpg" alt="">
          </div>
          <span>泡沫</span>
          <span class="user-mine"><img src="../../assets/img/下拉.png" alt=""></span><br>
          <span>45分钟前</span>
        </div>
        <div class="user-text">杭州单可接<br>最好靠近余杭 </div>
        <ul class="user-img">
          <li><img src="static/img/img1.jpg" alt=""></li>
          <li><img src="static/img/img2.jpg" alt=""></li>
          <li><img src="static/img/img3.jpg" alt=""></li>
          <li><img src="static/img/img4.jpg" alt=""></li>
          <li><img src="static/img/img5.jpg" alt=""></li>
          <li><img src="static/img/img6.jpg" alt=""></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import CommonSwipe from '../common/CommonSwipe'

  export default {
    data () {
      return {
      }
    },
    components:{
      CommonHeader,
      CommonFooter,
      CommonSwipe
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  #commend-list .user-pic{
    width: 1rem;
    height: 1rem;
    margin: 0 0.2rem;
    float: left;
  }
  .message{
    overflow: hidden;
    padding: 0.2rem 0;
  }
  #commend-list .user-mine{
    display: inline-block;
    float: right;;
    width: 0.3rem;
    margin-top: 0.3rem;
  }
  #commend-list span{
    margin-right: 0.2rem;
  }
  #commend-list .place img{
    width: 1.2em;
  }
  #commend-list .user-img{
    width: 100%;
  }
  #commend-list{
    margin-bottom: 0.7rem;
  }
  .user-text{
    margin-left: 1.2rem;
  }
  .user-img{
    margin-left: 1.2rem;
    overflow: hidden;
  }
  .user-img li{
    float: left;
  }
  .user-img li img{
    width: 25%;
  }




</style>
