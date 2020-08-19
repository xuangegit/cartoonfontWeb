<template>
    <div class="page">
       <!-- <div class="searchWrap">
           <div class="searchBox">
               <el-input class="searchInput" placeholder="输入动漫名称" v-model="cartoonName"></el-input>
               <el-button>搜索</el-button>
           </div>
       </div> -->
       <div class="activeWrap">
            <el-carousel :interval="4000" height="260px">
                <el-carousel-item v-for="item in 6" :key="item" :style="{background: color[item-1]}">
                    <img :src="imageSrc[item-1]" alt="" width="100%">
                </el-carousel-item>
            </el-carousel>
       </div>
       <div>
           <el-button @click="getCartoonList">查询</el-button>
       </div>
       <div class="content">
           <div>
               <condition></condition>
           </div>
           <div class="list">
               <div class="listItem" v-for="(cartoon,index) in cartoonList" :key="index" >

               </div>
           </div>
       </div>
    </div>
</template>
<script>
import condition from './condition.vue'
import http from '../../utils/http'
export default {
    components:{
        condition
    },
    data(){
        return {
            // cartoonName: '',
            color:['red','blue','yellow','green','gray','blue'],
            imageSrc:[],
            cartoonList: [],
        }
    },
    mounted(){
        this.getImage()
    },
    methods:{
        getCartoonList() {
            http.get('user/getList').then(d=>{
                console.log('列表list',d)
            })  
        },
        getImage(){
            for(var i=1;i<=6;i++){
                this.imageSrc.push(require('../../assets/image/lunbo'+i+'.jpg'))
            }
        }
    }
}
</script>
<style  scoped>
    .page{
         background: #13192F;
    }
    .searchWrap{
        
        background: #17213B;
        padding: 0px 260px;
        height:100px;
    }
    /* .searchBox{
        height:100px;
        display: flex;
        justify-content: center;
        align-items: center;
    } */
    .searchInput{
        min-width: 100px;
        width:50%;
        
    }
    .activeWrap{
        background: #17213B;
        padding: 10px 260px;
        /* border: 1px solid red; */
    }
    .content{
        min-height: 1000px;
        padding:10px 260px;
    }
</style>
