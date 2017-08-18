<template>
  <div class="photo">
    <common-header></common-header>
    <common-swipe></common-swipe>
    <common-footer></common-footer>
    <ul id="commend-list">
      <li v-for="cam in camList">
        <div class="message">
          <div class="user-pic">
            <img src="static/img/user.jpg" alt="">
          </div>
          <span>泡沫</span>
          <span class="user-mine"><img src="../../assets/img/下拉.png" alt=""></span><br>
          <span>{{cam.cd_time}}</span>
        </div>
        <div class="user-text">{{cam.cd_text}}</div>
        <ul class="user-img">
          <li v-for="aa in cam.imgs">
            <img :src="'static/img/' + aa.t_campic"  alt="">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import CommonSwipe from '../common/CommonSwipe'
  import Axios from 'axios'

  export default {
    data () {
      return {
        camList:[]
      }
    },
    components:{
      CommonHeader,
      CommonFooter,
      CommonSwipe
    },
    mounted(){
        Axios.get ('http://localhost:3000/search_photo').then((res)=>{
//            console.log(res.data);
            console.log(111);
            this.camList=JSON.parse(res.data);
            console.log(this.camList);
        })
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
