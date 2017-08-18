<template>
  <div class="l_login">
    <div class="l_bg"></div>
    <div class="dialog">
      <div class="l_login_top">
        <span class="l_skip"><router-link to="/reg">&lt;&lt;返回</router-link></span>
      </div>
      <div class="l_model">
        <h3>模特注册:</h3>
        <div class="l_ipt">
          <img class="l_email" src="../../assets/img/email.png" alt=""><input type="text" @blur="check_email" v-model="email" placeholder="邮箱" pattern="^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$"><span class="email_down"></span><br/>
          <img  src="../../assets/img/lock.png" alt=""><input type="password" v-model="pass" placeholder="密码"><br/>
          <img  src="../../assets/img/lock.png" alt=""><input type="password" v-model="repass" placeholder="重复密码"><br/>
          <img  src="../../assets/img/phone.png" alt=""><input type="text" v-model="username" placeholder="用户名"><br/>
          <button @click="check" class="l_last">进入主页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";
  export default {
    name: 'hello',
    data () {
      return {
        email:"",
        pass:"",
        username:"",
        repass:"",
        before_email:"",
        catlog: this.$route.params.id
      }
    },
    methods:{
      check:function () {
        var email = this.email;
        var pass = this.pass;
        var username = this.username;
        var repass = this.repass;
        var catlog = this.catlog;
        if(repass == pass && pass != "" && repass != ""){
          this.insert_user();
          this.$router.push("/index");
        }

      },
      insert_user:function(){
        var email = this.email;
        var pass = this.pass;
        var username = this.username;
        var catlog = this.catlog;
        Axios.get('http://localhost:3000/insert_user',{
          params:{
            email:email,
            pass:pass,
            username:username,
            catlog:catlog
          }
        }).then(function(res){
          console.log(res.data);
        })
      },
      check_email:function(){
        var oInput = document.getElementsByTagName('input')[0];
        if(oInput.value == ""){
          oInput.nextElementSibling.innerHTML = "邮箱不能为空";
          oInput.nextElementSibling.style.color = "rgba(255, 0, 0, 0.8)";
        }else if(oInput.validity.patternMismatch){
          oInput.nextElementSibling.innerHTML = "邮箱输入格式有误";
          oInput.nextElementSibling.style.color = "red";
        }else if(oInput.validity.valid){
          oInput.nextElementSibling.innerHTML = "邮箱输入正确";
          oInput.nextElementSibling.style.color = "green";
        }
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
    background: url('../../assets/img/timg.jpg')  no-repeat;
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
  .l_skip {
    position: absolute;
    line-height: 1rem;
    left: 0.3rem;
  }
  .l_model{
    margin-top: 1rem;
    text-align: center;
    color: #fff;
    margin-top: 2.5rem;
  }
  .l_model h3{
    position: absolute;
    top:1.5rem;
    left:0.5rem;
  }
  .l_model input{
    width: 3rem;
    height: 0.6rem;
    margin:0 0 0.5rem 0.2rem;
    background-color: rgba(0,0,0,0);
    border-radius: 0.2rem;
    border: 0.03rem solid #fff;
    outline: none;
    text-indent: 1rem;
    color:#fff;
  }
  .l_ipt input {
    width: 3.9rem;
  }
  .l_ipt .l_email{
    width: 0.55rem;
    height: 0.55rem;
    margin:0.05rem 0 0 0.35rem;
  }
  .l_ipt img{
    width: 0.35rem;
    height: 0.35rem;
    color: #fff;
    position: absolute;
    margin: 0.15rem 0 0 0.5rem;
  }
  input::-webkit-input-placeholder{
    color: #fff;
    font-size: 0.3rem;
  }
  .l_last{
    background: rgba(0,0,0,0);
    text-indent: 0;
    text-align: center;
    border: 0.03rem solid #fff;
    color: #cccccc;
    width: 3rem;
    border-radius: 0.3rem;
    margin-top: 0.5rem;
    outline: none;
  }
  .l_ipt{
    position: relative;
  }
  .email_down{
    position: absolute;
    top: 0.6rem;
    left: 1.6rem;
    font-weight: 800;
  }
</style>
