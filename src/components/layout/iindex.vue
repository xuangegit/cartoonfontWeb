<template>
  <el-container>
    <el-aside>aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style lang="less" scoped>
  .el-main{
    background-color: red;
  }
  .el-aside{
    background-color:greenyellow;
  }
</style>