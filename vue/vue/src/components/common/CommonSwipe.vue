<template>
  <div class="header-swipe">
    <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
     <router-link to="/sywork"><swipe-item class="item3"></swipe-item></router-link>
    </swipe>
  </div>
</template>

<script>
  import {Swipe , SwipeItem} from 'vue-swipe'
  export default {
    data () {
      return {
      }
    },
    components:{
      Swipe,
      SwipeItem
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  .my-swipe {
    height: 3rem;
    font-size: 30px;
    text-align: center;
    margin-top: 1rem;
  }
  .my-swipe .mint-swipe-item{
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .item1 {
    background: url('../../assets/img/lunbotu4.jpg');
  }

  .item3 {
    background: url('../../assets/img/lunbo2.jpg');
  }

  .item2 {
    background: url('../../assets/img/lunbotu5.jpg');
  }
</style>
