<template>
  <div class="footer">
    <ul>
      <li><router-link to="/index">推荐</router-link></li>
      <li><router-link to="/commend">自荐</router-link></li>
      <li><router-link to="/business">通告</router-link></li>
      <li><router-link to="/photo">摄影</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  .footer{
    height:0.7rem;
    width:100%;
    background: #fff;
    position: fixed;
    bottom:0;
    border-bottom: 0.01rem solid #ccc;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    flex:1;
    height: 0.8rem;
    text-align: center;
    line-height:0.7rem;
  }
  .footer a{
    color: #000;
  }
  .footer ul .selected{
    border-top: 0.05rem solid #766f6f;
    line-height: 0.65rem;
  }
</style>
