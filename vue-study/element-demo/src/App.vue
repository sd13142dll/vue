<template>
  <div id="app">
    {{ msg }}
    <br>
    <br>

    <el-button type="primary">我的按钮</el-button>
    <el-button type="danger">我的按钮</el-button>
    <el-button type="info">我的按钮</el-button>
    <el-button type="warning">我的按钮</el-button>
    <el-button type="success">我的按钮</el-button>
    <br>
    <br>

    <el-button type="success" icon="el-icon-edit">编辑</el-button>
    <el-button type="success" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <br>
    <br>
  
    <!-- 图标 Start -->
    <i class="el-icon-close"></i>
    <i class="el-icon-delete"></i>
    <i class="el-icon-loading"></i>
    <!-- 图标 End -->

    <br>
    <br>

    <!-- 布局 Start -->
    <el-row>
      <el-col :span="6" class="grid">1</el-col>
      <el-col :span="6" class="grid">2</el-col>
      <el-col :span="6" class="grid">3</el-col>
      <el-col :span="6" class="grid">4</el-col>
    </el-row>

    <br>
    <br>

    <el-row>
      <el-col :span="12" class="grid">1</el-col>
      <el-col :span="12" class="grid">2</el-col>
    </el-row>
    <!-- 布局 End -->

    <br>
    <br>

    <!-- 日期选择器 Start -->
    <DatePicker></DatePicker>
    <!-- 日期选择器 End -->

    <br>
    <br>

    <!-- 上传 Start -->
    <Upload></Upload>
    <!-- 上传 End -->
  </div>
</template>


<script>
import DatePicker from './components/DatePicker.vue'
import Upload from './components/Upload.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    DatePicker,
    Upload
  }
}
</script>


<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .grid {
    border: 1px solid #ccc;
    font-size: 20px;
    color: @red;
  }

  @red: red;
</style>
