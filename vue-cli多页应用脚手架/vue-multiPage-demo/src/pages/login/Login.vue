<template>
  <div id="login">
    <h1>登录页</h1>
    <br>
    <h3>登录页图片：</h3>
    <img src="./img/login.jpg" height="200" width="200">
    <br>
    <br>
    <h3>登录页背景图：</h3>
    <div class="loginBg"></div>
    <br>
    <br>
    <hr>
    <br>
    <h4>公共图片：</h4>
    <img src="@/common/img/common.jpg" height="200" width="200">
    <br>
    <br>
    <h4>公共背景图：</h4>
    <div class="commonBg"></div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .loginBg {
    width: 200px;
    height: 200px;
    background: url(./img/loginBg.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .commonBg {
    width: 200px;
    height: 200px;
    background: url(../../common/img/common_bg.jpg) no-repeat;
    background-size: 100% 100%;
  }
</style>
