<template>
    <el-container>
      <el-aside :style="{width:(isCollapse?'auto':'200px')}">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-main>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </el-main>
    </el-container>
</template>
<script>
import navMenu from './navMenu'
export default {
  components:{
    navMenu
  },
  data(){
    return {
      isCollapse: false
    }
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