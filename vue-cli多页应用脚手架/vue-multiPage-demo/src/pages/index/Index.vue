<template>
  <div id="index">
    <h1>首页</h1>
    <br>
    <h3>首页图片：</h3>
    <img src="./img/index.jpg" height="200" width="200">
    <br>
    <br>
    <h3>首页背景图：</h3>
    <div class="indexBg"></div>
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
    name: 'Index'
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .indexBg {
    width: 200px;
    height: 200px;
    background: url(./img/indexBg.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .commonBg {
    width: 200px;
    height: 200px;
    background: url(../../common/img/common_bg.jpg) no-repeat;
    background-size: 100% 100%;
  }
</style>
