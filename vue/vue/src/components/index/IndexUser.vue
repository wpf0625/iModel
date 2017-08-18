<template>
  <div class="index-user">
    <common-header>
      <img class="return" src="../../assets/img/返回.png" alt="" @click="aa">
      <span id="l_she" slot="title">个人资料</span>
      <span slot="publish"></span>
    </common-header>
    <div id="model-list">
        <div class="message">
          <div class="user-pic">
            <img src="static/img/user.jpg" alt="">
          </div>
          <span>泡沫</span><br>
          <span>关注 0</span>&nbsp;&nbsp;<span>粉丝 2</span>
          <div class="attention">
            <mu-raised-button label="关注" @click="open"/>
            <mu-dialog :open="dialog" @close="close">
              是否要关注此人
              <mu-flat-button slot="actions" @click="close" primary label="取消"/>
              <mu-flat-button slot="actions" primary @click="close" label="确定"/>
            </mu-dialog>
          </div>
        </div>
        <div class="user-data">
          <span>身高：172cm</span><span>体重：50kg</span><br>
          <span>三围：85-64-90</span><span>城市：北京</span><br>
          <span>兴趣爱好</span>
          <span class="appraise">查看此人评价</span>
        </div>
    </div>
    <ul id="model-pic">
      <li><img src="static/img/img1.jpg" alt=""></li>
      <li><img src="static/img/img2.jpg" alt=""></li>
      <li><img src="static/img/img3.jpg" alt=""></li>
      <li><img src="static/img/img4.jpg" alt=""></li>
      <li><img src="static/img/img5.jpg" alt=""></li>
      <li class="try"></li>
    </ul>
    <ul id="user-footer">
      <router-link to="user/user-letter"><li><span><img src="../../assets/img/信息.png" alt=""></span>私信</li></router-link>
      <li><span><img src="../../assets/img/屏蔽.png" alt=""></span>屏蔽此人</li>
    </ul>
  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'

  export default {
    data () {
      return {
        dialog: false
      }
    },
    components:{
      CommonHeader
    },
    methods: {
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      },
      aa:function () {
        history.go(-1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  #model-list{
    margin-top: 1rem;
  }
  #model-list .user-pic{
    width: 1rem;
    height: 1rem;
    margin: 0 0.2rem;
    float: left;

  }
  .index-user .return{
    width:0.3rem;
    height:0.3rem;
    padding-top:0.1rem;
  }

  #model-list .user-pic img{
    display: inline-block;
    border-radius: 50%;
  }
  #l_she{
    font-size: 0.3rem;
    /*margin-left: -1rem;*/
  }
  .message{
    overflow: hidden;
    padding: 0.2rem 0;
    position: relative;
  }
  #model-list span{
    margin-right: 0.2rem;
  }
  #model-list .place img{
    width: 1.2em;
  }
  .user-data{
    margin-left: 0.3rem;
    position: relative;
  }
  #user-footer{
    height:0.7rem;
    width:100%;
    background: #fff;
    position: fixed;
    bottom:0;
    overflow: hidden;
  }
  #user-footer li{
    float: left;
    height: 0.7rem;
    width: 30%;
    text-align: center;
    margin-top: 0.1rem;
  }
  #user-footer img{
    width: 0.3rem;
    margin-right: 0.1rem;
    margin-top: 0.05rem;
  }
  .attention{
    width: 0.9rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border-radius: 0.1rem;
    position: absolute;
    right:0.8rem;
    top: 0.4rem;
  }
  .user-data span{
    display: inline-block;
    color: #fff;
    background: red;
    margin-bottom: 0.1rem;
    padding: 0 0.1rem;
    border-radius: 0.2rem;
  }
  .user-data span:nth-child(1){
    background: #a341e8;
  }
  .user-data span:nth-child(2){
    background: #ffc002;
  }
  .user-data span:nth-child(4){
    background: pink;
  }
  .user-data span:nth-child(5){
    background: #02eaff;
  }
  .user-data span:nth-child(7){
    background: #ff0255;
  }
  #model-pic li{
    float: left;
    width: 50%;
    height: 2rem;
  }

  #model-pic{
    overflow: hidden;
  }
  #model-pic img{
    width: 100%;
  }
  #model-pic .try{
    background: url("../../../static/img/img6.jpg") 0 0 no-repeat;
    background: 100%;
  }
  #model-list .appraise{
    display: inline-block;
    width: 1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border-radius: 0.1rem;
    border: 0.03rem solid #ccc;
    position: absolute;
    background: #fff;
    color: rgba(0,0,0,.87);
    right:0.2rem;
    top: 0;
    margin: 0;
    box-sizing:content-box;
  }


</style>
