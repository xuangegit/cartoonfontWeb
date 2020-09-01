<template>
  <div>
    <div class="settingBox">
          <div class="container" @mouseleave="leaveHandle" @mouseover="isHover= true;isleave =false">
            <i class="el-icon-setting" :class="{isleave:isleave,isHover:isHover}" > </i>
          </div>
          <div class="contentContainer">
            <h3 class="title">navBar设置</h3>
            <el-form  label-width="120px">
              <el-form-item label="背景颜色">
                <el-color-picker v-model="backgroundColor" @change="$store.dispatch('app/setNavBar',{type:'backgroundColor',color:backgroundColor})"></el-color-picker>
              </el-form-item>
              <el-form-item label="文本颜色">
                <el-color-picker v-model="textColor" @change="$store.dispatch('app/setNavBar',{type:'textColor',color:textColor})"></el-color-picker>
              </el-form-item>
              <el-form-item label="活动文本颜色">
                <el-color-picker v-model="activeTextColor"  @change="$store.dispatch('app/setNavBar',{type:'activeTextColor',color:activeTextColor})"></el-color-picker>
              </el-form-item>
            </el-form>
          </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      isleave:false,
      isHover:false,
      backgroundColor: '',
      textColor:"",
      activeTextColor: ''
    }
  },
  computed:{
    ...mapGetters('app',['navBar'])
  },
  mounted(){
    // console.log('navBar',this.navBar)
    this.backgroundColor = this.navBar.backgroundColor;
    this.textColor = this.navBar.textColor
    this.activeTextColor = this.navBar.activeTextColor
  },
  methods:{
  
    leaveHandle(){
      // alert(1)
      this.isleave = true;
      this.isHover = false
    },
   
  }
}
</script>
<style  scoped>
 .el-icon-setting{
   display: flex;
   justify-content: center;
   align-self: center
 }
  .container{
    display: inline-block;
    padding:15px;
    background:#1188f6;
    cursor: pointer;
  }
  .el-icon-setting{
    font-size:24px;
    color:white
  }
   .el-icon-setting.isHover{
     /* color:red; */
     transform: rotate(540deg);
     transition: all 1s
   }
  .isleave{
     transform:rotate(-540deg);
     transition: all 1s
   }
  
   .title{
     line-height: 50px
   }
</style>