<template>
  <div>
    <div class="flex">
      <div><el-input class="mainTitle" placeholder="请输入标题"></el-input></div>
      <div>
        <el-button type="primary">保存草稿</el-button>
        <el-button type="primary" plain @click="publishHandle"> 发布文章</el-button>
      </div>
    </div>
    <markdown/>
    <el-dialog :visible.sync="dialogVisible" title="发布文章">
      <div class="info">请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容，<span>详见《CSDN资源共享规范》</span></div>
    </el-dialog>
  </div>
</template>
<script>
import markdown from '../../components/editor/markdown'
export default {
  components:{
    markdown
  },
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods:{
    publishHandle(){
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
  .flex{
    display: flex;
    justify-content: space-between
  }
  .mainTitle{
    min-width:800px;
  }
</style>