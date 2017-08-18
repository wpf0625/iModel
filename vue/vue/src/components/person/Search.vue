<template>
  <div class="search">
    <div class="search-box">

      <input type="text" placeholder="搜索（用户名，城市，需求描述等）">
      <img class="search-left" src="../../assets/img/搜索.png" alt="">
      <!--<input type="text" value="搜索（用户名，城市，需求描述等）">-->
      <img class="search-right" src="../../assets/img/摄影.png" alt="">
    </div>
    <span><router-link to="/index">取消</router-link></span>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";
  @import "../../assets/css/vue-swipe.css";
  .search a{
    color: #000;
  }
  .search-box{
    height:1.3rem;
    background-color: #f9fbe7;
  }
  .search-box input{
    position: relative;
    top:0.3rem;
    left:0.1rem;
    width: 5.5rem;
    height:0.6rem;
    padding-left: 0.5rem;
    outline: none;

    border-radius: 0.1rem;
  }
  .search .search-box .search-left{
    position: absolute;
    top:0.4rem;
    left:0.2rem;
    width:0.35rem;
    height: 0.35rem;

  }
  .search .search-box .search-right{
    position: absolute;
    top:0.4rem;
    left:5rem;
    width:0.35rem;
    height: 0.35rem;
  }
  .search span{
    position: fixed;
    top:0.4rem;
    left:5.8rem;
    cloor: #000;
  }



</style>
