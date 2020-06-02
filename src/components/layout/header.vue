<template>
    <div class="header_wrap">
        <div class="header_content">
            <div class="title">
                <i class="iconfont icondongman"></i>
                 动漫网站   
            </div>
            <div class="searchBox">
               <el-input class="searchInput" placeholder="输入动漫名称" v-model="cartoonName"></el-input>
               <el-button>搜索</el-button>
           </div>
            <div class="info">
               
                <div class="message home_message">
                    <el-badge :value="messageLength" :is-dot="messageLength==0"><i class="iconfont iconmessage"></i></el-badge>
                </div>
                <div v-if="userData.isLogin">
                    <!-- <i class="iconfont iconicontouxiang"></i>{{userData.userInfo.userName}} -->
                    <el-dropdown size="medium" @command="handleCommand">
                        <span class="el-dropdown-link">
                            <i class="iconfont iconicontouxiang"></i>{{userData.userInfo.userName}} 
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus" command="upload">动漫上传</el-dropdown-item>
                            <!-- <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item> -->
                            <el-dropdown-item disabled icon="el-icon-info" command="mine">我的信息</el-dropdown-item>
                          
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-if="!userData.isLogin" @click="gotoLogin('first')">登录</div>
                <div v-if="!userData.isLogin" @click="gotoLogin('second')">注册</div>
                <!-- <div><i class="el-icon-loginOut"></i></div> -->
            </div>
        </div>

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            cartoonName:'',
            // userInfo:{
            //     userName: '18322777'
            // },
            // islogin: false,
            messageLength:0,
        }
    },
    computed:{
        ...mapGetters('user',{
            userData:'userData'
        })
    },
    methods: {
        gotoLogin(value) {
            this.$router.push({name: 'login',params:{activeName: value}})
        },
        handleCommand(command){
            console.log(command)
            if(command=="upload")
                this.$router.push('/upload')
            // alert(222)
        }
    },
    mounted(){
        console.log('userData',this.userData)
    }
}
</script>
<style >
    .home_message .el-badge__content.is-fixed{
        top:10px!important
    }
</style>
<style scoped>
    .el-dropdown-link:hover{
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .iconfont{
        font-size:20px;
    }
    .icondongman{
        color:red
    }
    .header_wrap{
        padding: 0 260px;
        line-height: 56px;
        height: 56px;
        background: #13192F;
        color: white;
        font-size: 16px;
       
    }
    .header_content{
        display: flex;
    }
    .header_content .title{
        text-align: left;
        flex:1;
    }
    .searchBox{
        flex:2;
        /* height:100px; */
        /* margin-top: 30px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header_content .info{
        cursor: pointer;
        flex: 2;
        display: flex;
        justify-content: flex-end;
    }
    .info div{
        margin: 0 10px;
    }
</style>