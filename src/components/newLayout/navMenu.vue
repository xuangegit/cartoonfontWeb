<template>
  <div>
   
    <el-menu mode="vertical" :collapse="isCollapse" unique-opened :router="true">
        <template v-for="(subMenuData,i) in menuList"> 
          <el-submenu  v-if="subMenuData.children" :key="i" :index="i+''">
            <template slot="title">
                <i :class="subMenuData.icon"></i>
                <span>{{subMenuData.name}}</span>
            </template>
            <el-menu-item v-for="menuItem in subMenuData.children" :index="menuItem.path" :key="menuItem.path">{{menuItem.name}}</el-menu-item> 
          </el-submenu>
          <el-menu-item v-else  :index="subMenuData.path"  :key="subMenuData.path">
             <i :class="subMenuData.icon"></i>
             <span slot="title">{{subMenuData.name}}</span>
          </el-menu-item>
        </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props:{
    isCollapse:{
      // default: false
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
          
        }
      ]
    }
  }
}
</script>
<style >
 .el-menu > .el-submenu__title{
    text-align: left!important
  }
</style>