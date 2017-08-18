<template>
  <div class="user-letter">
    <common-header>
      <router-link to="/index"><img class="skip" src="../../assets/img/返回.png" alt=""></router-link>
      <span id="l_she" slot="title">个人资料</span>
      <span slot="publish"></span>
    </common-header>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/reset.css";



</style>
