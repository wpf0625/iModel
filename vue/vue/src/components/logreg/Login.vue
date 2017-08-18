<template>
  <div class="l_login">
    <div class="l_bg"></div>
    <div class="dialog">
      <div class="l_login_top">
        <span class="l_reg"><router-link to="/reg">注册</router-link></span>
        <span class="l_skip"><router-link to="/index">跳过</router-link></span>
        <span class="l_skip_icon">
          &gt;&gt;
        </span>
      </div>
      <div class="l_model">
        <h1>i Model</h1>
        <p>打造模特行业新生态</p>
        <div class="l_ipt">
          <img src="../../assets/img/email.png" alt=""><input id="account" type="text" placeholder="邮箱" v-model="eml" ><br/>
          <img class="l_lock" src="../../assets/img/lock.png" id="password" alt=""><input type="text" placeholder="密码"  v-model="pwd"><br/>
          <button class="login" @click="login">登录</button>
          <p class="l_p">登录即表示同意并接受用户协议</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
export default {
  name: 'hello',
  data () {
    return {
      eml:'',
      pwd:''

    }
  },
  methods:{
    login(){
      var $account=this.eml;
      var $password=this.pwd;
      var _this = this;
      console.log($account);
      console.log($password);
      Axios.get('http://localhost:3000/users/login',{
          params:{
            account:$account,
            password:$password
          }
      }).then((res)=>{
          console.log(res.data);
          if(res.data!=0){
            console.log(res.data);
            localStorage.u_account=$account;
            localStorage.u_password=$password;
            _this.$router.push('/index');
          }else{
//        locatin="/index";
            alert('账号或密码错误');
        }
      })
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
    background: url('../../assets/img/liuwen.jpeg')  no-repeat;
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
  .l_reg{
    position: absolute;
    line-height: 1rem;
    left:0.3rem;
  }
  .l_skip{
    position: absolute;
    line-height: 1rem;
    right:0.8rem;
  }
  .l_skip_icon{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top:0.23rem;
    right:0.3rem;
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
    margin:0.1rem 0 0.8rem 0;
    font-size: 0.3rem;
  }
  .l_model input,.l_model button{
    width: 4.5rem;
    height: 0.7rem;
    margin:0 0 0.4rem 0;
    background-color: rgba(0,0,0,0);
    border-radius: 0.1rem;
    border: 0.03rem solid #fff;
    outline: none;
    text-indent: 0.8rem;
    color:#fff;
  }
  .l_model .login{
    text-indent: 0;
  }
  .l_ipt .l_p{
    position: absolute;
    left:0.9rem;
    font-size: 0.28rem;
  }
  .l_ipt img{
    width: 0.5rem;
    height: 0.5rem;
    color: #fff;
    position: absolute;
    margin: 0.1rem 0 0 0.15rem;
  }
  .l_ipt .l_lock{
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.2rem 0 0 0.3rem;
  }
  .l_ipt .l_last{
    text-indent: 2rem;
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }

</style>
