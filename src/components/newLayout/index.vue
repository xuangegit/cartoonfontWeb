<template>
    <el-container>
      <el-aside>
        <nav-menu></nav-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
</template>
<script>
import navMenu from './navMenu'
export default {
  components:{
    navMenu
  },
  data(){
    return {}
  }
}
</script>
<style  scoped>
  .body,html{
    height:100%;
  }
  .el-container{
    height:100%;
  }
  .el-main{
    background-color: red;
  }
  .el-aside{
    /* background-color:greenyellow; */
  }
</style>