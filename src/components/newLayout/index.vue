<template>
    <el-container>
      <el-aside :style="{width:(isCollapse?'auto':'201px'),backgroundColor:navBar.backgroundColor}">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-main>
        <div class="header">
          <humbger class="humbger-box"></humbger>
        </div>
        <div class="mainContent">
           <router-view></router-view>
        </div>
      </el-main>
    </el-container>
</template>
<script>
import navMenu from './navMenu'
import humbger from './humbger'
import {mapGetters } from 'vuex'
export default {
  components:{
    navMenu,
    humbger
  },
  data(){
    return {
      // isCollapse: false
    }
  },
  computed:{
      ...mapGetters('app',{
           isCollapse: 'isCollapse',
           navBar: 'navBar'
        }),

  },
  methods:{
    
  },
}
</script>
<style  scoped>
  .body,html{
    height:100%;
  }
  .el-container{
    height:100%;
    /*min-width:1300px;*/
    overflow: hidden;
  }
  .el-aside{
    border-right:1px solid #dddddd
  }
  .el-main{
    padding: 0px;
    /* background-color: red; */
    text-align: left;
    

    
  }
  .header{
    /* margin:0 10px; */
    min-height:40px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08)
    /* border-bottom:1px solid #ddd */
  }
  .humbger-box{
    float:left;
    cursor: pointer;
    margin: 10px 0  0 10px; 
  }
  .el-aside{
    /* background-color:greenyellow; */
  }
  .mainContent{
    padding:10px;
    min-width: 800px;
    overflow: auto;
  }
</style>