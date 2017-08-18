<template>
  <div class="index">
    <common-header></common-header>
    <common-swipe></common-swipe>
    <ul id="model-list">
        <li>
          <div class="message">
            <div class="user-pic">
              <img src="static/img/user.jpg" alt="">
            </div>
            <span>泡沫</span><span class="place"><img src="../../assets/img/地址.png" alt=""></span><span>北京</span>
            <router-link to="/index/index-user"><span class="user-mine"><img src="../../assets/img/大于.png" alt=""></span></router-link><br>
            <span>172cm</span><span>85-64-90</span>
          </div>
          <div class="user-img">
            <img src="static/img/user-img.jpg" alt="">
          </div>
        </li>
    </ul>
    <common-footer></common-footer>
    <a class="top" href="javascript:scroll(0,0)"></a>
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
  @import "../../assets/css/vue-swipe.css";
  #model-list .user-pic{
    width: 1rem;
    height: 1rem;
    margin: 0 0.2rem;
    float: left;
  }
  .message{
    overflow: hidden;
    padding: 0.2rem 0;
  }
  #model-list .user-mine{
    display: inline-block;
    float: right;;
    width: 0.4rem;
    margin-top: 0.3rem;
  }
  #model-list span{
    margin-right: 0.2rem;
  }
  #model-list .place img{
    width: 1.2em;
  }
  #model-list .user-img{
    width: 100%;
  }
  #model-list{
    margin-bottom: 0.7rem;
  }
  .top{
    width: 0.9rem;
    height: 0.9rem;
    position: fixed;
    right:0.3rem;
    bottom: 1rem;
    outline: none;
    background: url('../../assets/img/top.png') no-repeat;
  }



</style>
