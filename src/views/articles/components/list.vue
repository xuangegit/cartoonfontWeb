<template>
  <div>
    <div class="itemContainer">
      <div class="item-info title">
        <span></span>
        <p class="titleDate"><i class="el-icon-info article-info"></i>{{item.createTime}}</p>
      </div>
      <div class="item-info item-detail">
        <div class="info-left">
          <span class="article-type article-info">{{item.type}}</span>
          <span class="article-date article-info">{{item.date}}</span>
          <span class="article-read article-info"><i class="el-icon-notebook-1"></i>{{item.readers}}</span>
          <span class="article-focus article-info"><i class="el-icon-message"></i>{{item.commentAccounts}}</span>
          <span class='article-stars article-info'><i class="el-icon-star-off"></i>{{item.stars}}</span>
        </div>
        <div class="info-oper">
            <div class="setVip article-btn">vip可读</div>
            <div class="look article-btn">查看</div>
            <el-dropdown @command="handleCommand" class="article-btn" trigger="click" @visible-change="visibleHandle">
              <span class="el-dropdown-link">
                {{comment}}<i class=" el-icon--right" :class="{'el-icon-arrow-down':visible,'el-icon-arrow-up':!visible}"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="评论公开">评论公开</el-dropdown-item>
                <el-dropdown-item command="审核后公开">审核后公开</el-dropdown-item>
                <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
            <div class="setTop article-btn">置顶</div>
            <div class="delete article-btn" @click="deleteHandle">删除</div>         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    item:{},
  },
  data(){
    return {
      comment: '评论公开',
      visible:false,
      list:{
        type:'',
        date:"",
        readinggAmount: 50,
      }
    }
  },
  methods: {
    handleCommand(value){
      console.log(value)
      this.comment = value
    },
    visibleHandle(value){
      console.log(value)
      this.visible = value
    },
    deleteHandle(){
      this.$confirm('确认是删除该项数据？').then(d=>{
        console.log(d)
        
      }).catch(e=>{
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
  .itemContainer{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #efe2e2;
    padding:10px 0
  }
  .item-detail{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
  }
  .info-oper{
    display: flex;
    
  }
  .item-detail{
    font-size: 12px;
  }
  .article-btn{
    color:#349edf;
    cursor: pointer;
    padding:0 10px;
  }
  .delete{
    color:#ca0c16;
  }
  .article-info{
    margin-right: 15px
  }
  .article-info i{
    margin-right: 3px
  }
  .el-icon-info{
    color:orange
  }
</style>