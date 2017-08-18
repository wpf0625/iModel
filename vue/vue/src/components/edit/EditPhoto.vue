<template>
  <div class="zijian">
    <common-header>

      <div class="return" @click="aa">
        <img src="../../assets/img/返回.png" alt="">
      </div>
      <span slot="title">新建摄影</span>
      <div class="publish" slot="publish">
        <span>发布</span>
      </div>
    </common-header>
    <div id="back"></div>
    <textarea id="content" cols="30" rows="10" placeholder="请输入内容详情，包括但不限于时间、地点、模特要求、预算等。外籍模特通告请用英文发布。"></textarea>
    <span class="font">参考图片(选填)</span>

  </div>

</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  export default {
    data () {
      return {
      }
    },
    components:{
      CommonHeader
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
  @import "../../assets/css/reset.css";
  html,body{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #back{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.1);
    z-index: -1;
  }
  .header .return img{
    width:0.3rem;
    height:0.3rem;
    padding-top:0.1rem;
  }
  #content{
    width:100%;
    border:0;
    margin-top:1.2rem;
    font-size:0.22rem;
    resize: none;
    padding: 0.2rem;
    box-sizing: border-box;
  }
  .font{
    margin-left:0.2rem;
  }
</style>
