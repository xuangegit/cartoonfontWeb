<template>
  <div>
   
    <el-menu mode="vertical" :collapse="Boolean(isCollapse)" unique-opened :router="true"  
      :background-color="navBar.backgroundColor"
      :text-color="navBar.textColor"
      :active-text-color="navBar.activeTextColor">
        <template v-for="(subMenuData,i) in menuList"> 
          <el-submenu  v-if="subMenuData.children" :key="i" :index="i+''" >
            <template slot="title">
                <i :class="subMenuData.icon"></i>
                <span>{{subMenuData.name}}</span>
            </template>
            <el-menu-item v-for="menuItem in subMenuData.children" :index="menuItem.path" :key="menuItem.path">{{menuItem.name}}</el-menu-item> 
          </el-submenu>
          <el-menu-item v-else  :index="subMenuData.path"  :key="subMenuData.path">
             <i :class="subMenuData.icon"></i>
             <span slot="title">{{subMenuData.name}}</span>
             <!-- <template slot="title">
                <i :class="subMenuData.icon"></i>
                <span>{{subMenuData.name}}</span>
             </template> -->
          </el-menu-item>
          
        </template>
    </el-menu>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props:{
    isCollapse:{
      // default: false
      // type:Boolean
    }
  },
  data(){
    return{
      // isCollapse: false,
      
      menuList:[
        {
          name: '我的测试1模块',
          icon:"el-icon-setting",
          children: [
            {name:"上传页面", path:'/upload'},
            {name:'测试页面',path:'/myTest'}
          ]
        },
        {
          name: '我的测试2模块',
          icon:"el-icon-s-finance",
          children: [
            {name:"3D页面", path:'/css3D'},
            // {name:'测试页面',path:'/myTest'}
          ]
        },
        {
          name:'我的测试3模块',
          icon: 'el-icon-setting',
          path:'upload'
        },
        {
          name:'我的工作模块',
          icon: 'el-icon-setting',
          path:'works'
        },
         {
          name:'文章管理',
          icon: 'el-icon-document',
          path:'articles'
        },
        {
          name:'webRtc',
          icon: 'el-icon-document',
          path: '/rtc',
        }
      ]
    }
  },
  computed:{
    ...mapState('app',{navBar:'navBar'}),
  },
  mounted(){
    console.log('isCollapse',typeof this.isCollapse)
    console.log('isCollapse',Boolean(this.isCollapse))
    
  },
  watch:{
    'navBar.textColor':function(value){
      console.log('textColor--change',value)
    },
    "$store.state.app.navBar.textColor":function(value){
      console.log('textColor--watch',value)
    }
    
  }
}
</script>
<style >

  .el-menu{
    text-align: left
  }
 .el-menu > .el-submenu__title{
    text-align: left!important
  }
</style>