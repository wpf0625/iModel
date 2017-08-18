<template>
  <div class="l_sy">
    <common-header>
      <img src="../../assets/img/返回.png" alt="" @click="aa">
      <span id="l_she" slot="title">摄影</span>
      <span slot="publish"></span>
    </common-header>
    <div class="l_img_box">
      <h4>作品展示</h4>
      <p>摄影作品各种风格各有涉猎.</p>
      <swipe class="my-swipe">
        <swipe-item class="item1"></swipe-item>
        <swipe-item class="item2"></swipe-item>
        <swipe-item class="item3"></swipe-item>
        <swipe-item class="item4"></swipe-item>
        <swipe-item class="item5"></swipe-item>
      </swipe>

    </div>
  </div>
</template>

<script>
  import {Swipe , SwipeItem} from 'vue-swipe'
  import CommonHeader from '../common/CommonHeader'


  export default {
    name: 'hello',
    data () {
      return {

      }
    },
    components:{
      CommonHeader,
      Swipe,
      SwipeItem
    },
    methods:{
      aa:function () {
        history.go(-1);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/reset.css';
  .l_sy{
    height:1rem;
    width:100%;
    display: flex;
    position: fixed;
    border-bottom: 0.01rem solid #ccc;
    top:0;
    z-index: 999;
    background: #fff;
  }
  .l_sy a,l_sy span{
    text-align: center;
    line-height: 1rem;
    width: 1rem;
    height: 1rem;
    font-size: 0.5rem;
  }
  .l_sy img{
    width:0.3rem;
    height:0.3rem;
    padding-top:0.1rem;
  }
  #l_she{
    /*margin-left: -0.5rem;*/
    font-size:0.3rem ;
  }
  .l_img_box{
    width: 5.6rem;
    margin:1.5rem auto;
  }
  .l_img_box p{
    margin: 0.3rem 0 0.5rem;
    font-size: 0.28rem;
  }
  .my-swipe{
    height: 5rem;
    margin-top: 0.8rem;
  }
  .my-swipe .mint-swipe-item{
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .item1 {
    background: url('../../assets/img/syimg/1.jpg');
  }

  .item3 {
    background: url('../../assets/img/syimg/2.jpg');
  }

  .item2 {
    background: url('../../assets/img/syimg/3.jpg');
  }
  .item4 {
    background: url('../../assets/img/syimg/4.jpg');
  }

  .item5 {
    background: url('../../assets/img/syimg/5.jpg');
  }



</style>
