<template>
  <div>
    <el-menu mode="vertical" :collapse="isCollapse" unique-opened :router="true">
        <template v-for="(subMenuData,i) in menuList"> 
          <el-submenu  v-if="subMenuData.children" :key="i" :index="i">
            <template slot="title">
                <i :class="subMenuData.icon"></i>
                <span>{{subMenuData.name}}</span>
            </template>
            <el-menu-item v-for="menuItem in subMenuData.children" :index="menuItem.path" :key="menuItem.path">{{menuItem.name}}</el-menu-item> 
          </el-submenu>
        </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isCollapse: false,
      menuList:[
        {
          name: 'test1',
          icon:"el-icon-setting",
          chilldren: [
            {name:"上传页面", path:'/upload'},
            {name:'测试页面',path:'/myTest'}
          ]
        },
        {
          name: 'test2',
          icon:"el-icon-tools",
          chilldren: [
            {name:"3D页面", path:'/css3D'},
            // {name:'测试页面',path:'/myTest'}
          ]
        }
      ]
    }
  }
}
</script>