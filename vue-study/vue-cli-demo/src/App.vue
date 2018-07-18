<template>
  <div id="app">
    {{ msg }}

    <h3>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h3>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <button @click="send">发送AJAX请求</button>
    <my-button @click.native="send"></my-button>
  </div>
</template>

<script>
// import axios from 'axios'
import myButton from './components/myButton.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to itany'
    }
  },

  mounted(){
    console.log( this.$route );
  },

  watch: {
    $route: function(newVal, oldVal) {
      console.log( '路由发生变化，跳转到：' + newVal.path );
    }
  },

  methods: {
    send(){
      this.$http.get('https://api.github.com/users/sd13142dll')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  },

  components: {
    'my-button': myButton
  }
}
</script>

<style>
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
</style>
