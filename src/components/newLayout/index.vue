<template>
    <el-container>
      <el-aside :style="{width:(isCollapse?'auto':'200px')}">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-main>
        <div class="header">
          <humbger class="humbger-box" @trigger="triggerFn"></humbger>
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
import {mapGetters,mapActions } from 'vuex'
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
           isCollapse: 'isCollapse'
        })
  },
  methods:{
    triggerFn(value){
      console.log('trigger',value);
      this.triggerState(value)
    },
    ...mapActions('app',{triggerState: 'triggerState'})
  },
}
</script>
<style  scoped>
  .body,html{
    height:100%;
  }
  .el-container{
    height:100%;
  }
  .el-aside{
    border-right:1px solid #dddddd
  }
  .el-main{
    padding: 0px;
    /* background-color: red; */
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
  }
</style>