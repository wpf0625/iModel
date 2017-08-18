<template>
  <div class="l_login">
    <div class="l_bg"></div>
    <div class="dialog">
      <div class="l_login_top">
        <span class="l_reg"><router-link to="/login">&lt;&lt;返回</router-link></span>
      </div>
      <div class="l_model">
        <h1>i Model</h1>
        <p>打造模特行业新生态</p>
        <div class="l_ipt">
          <img class="l_shop" src="../../assets/img/shop.png" alt=""><router-link to="/sj_reg/3"><input type="text" placeholder="商家注册" name="sj"></router-link><br/>
          <img src="../../assets/img/model.png" alt=""><router-link to="/mo_reg/1"><input type="text" placeholder="模特注册" name="password"></router-link><br/>
          <img class="l_camera" src="../../assets/img/camera.png" alt=""><router-link to="/she_reg/2"><input type="text" placeholder="摄影师注册" name="password"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/reset.css';
  .l_bg,.dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .l_bg{
    background: url('../../assets/img/wen.jpg')  no-repeat;
    background-size: cover;
  }
  .dialog{
    background: rgba(0,0,0,0.4);
    z-index: 999;
  }
 .l_login_top{
    height: 1rem;
    position: relative;
}
  .l_login_top span,.l_login_top span a{
    color: #fff;
    font-size: 0.3rem;
  }
  .l_reg {
    position: absolute;
    line-height: 1rem;
    left: 0.3rem;
  }
  .l_skip_icon img{
    width: 100%;
    height: 100%;
  }
  .l_model{
    margin-top: 0.8rem;
    text-align: center;
    color: #fff;
  }
  .l_model p{
    margin:0.3rem 0 0.8rem 0;
    font-size: 0.3rem;
  }
  .l_model input{
    font-size: 0.3rem;
    width: 4.5rem;
    height: 0.8rem;
    margin:0 0 0.4rem 0;
    background-color: rgba(0,0,0,0);
    border-radius: 0.3rem;
    border: 0.03rem solid #fff;
    outline: none;
    color:#fff;
  }
  input::-webkit-input-placeholder{
    color: #fff;
    text-align: center;
  }
  .l_ipt img{
    width: 0.6rem;
    height: 0.6rem;
    color: #fff;
    position: absolute;
    margin: 0.07rem 0 0 0.3rem;
  }
  .l_ipt .l_shop{
    width: 1rem;
    height: 1rem;
    margin:-0.05rem 0 0 0.15rem;
  }
  .l_ipt .l_camera{
    width: 0.5rem;
    height: 0.5rem;
    margin-top:0.2rem;
  }

</style>
