<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState({
      isLogin:state=>state.user.isLogin,
      userInfo:state=> state.user.userInfo
    })
  },
  mounted(){
    console.log('isLogin',this.isLogin)
    console.log('userInfo',this.userInfo)
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
