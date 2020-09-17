<template>
  <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <total></total>
        </el-tab-pane>
        <el-tab-pane label="公开" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="私密" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="草稿箱" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="回收箱" name="fiveth">回收箱</el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
import total from './total'
export default {
  components:{
    total
  },
  data(){
      return {
        activeName: 'first'
      }
  },
  methods:{ 
      handleClick(tab, event) {
        console.log(tab, event);
     }

  }
}
</script>
<style scoped>

</style>