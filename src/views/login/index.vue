<template>
    <div class="loginRoot">
        <div class="loginWrap">
            
            <el-tabs v-model="activeName" class="login_tab">  
                <div class="login_title">动漫管理系统</div>
                <el-tab-pane label="登录" name="first" v-if="!userData.isLogin">
                    <div class="loginBox">
                       
                            <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
                                <div class="block">
                                    <el-date-picker
                                    v-model="value2"
                                    type="month"
                                    value-format="yyyy-MM"
                                    placeholder="选择月">
                                    </el-date-picker>
                                </div>
                                <el-form-item prop="phone"> 
                                    <el-input placeholder="请输入手机号" v-model="loginForm.phone" prefix-icon="el-icon-user"></el-input>
                                </el-form-item>
                                <el-form-item prop="password"> 
                                    <el-input placeholder="密码" v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" autocomplete="new-password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" class="loginbtn" @click="login">登录</el-button>
                                </el-form-item>
                            </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                     <div class="loginBox">
                            <el-form :model="registForm" ref="registForm" :rules="registRules">
                                <el-form-item prop="userName"> 
                                    <el-input placeholder="用户名" v-model="registForm.userName" prefix-icon="el-icon-user"></el-input>
                                </el-form-item>
                                <el-form-item prop="phone"> 
                                    <el-input placeholder="手机号" v-model="registForm.phone" prefix-icon="el-icon-user"></el-input>
                                </el-form-item>
                                <el-form-item prop="password"> 
                                    <el-input placeholder="密码" v-model="registForm.password" prefix-icon="el-icon-lock" type="password" autocomplete="new-password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" class="loginbtn" @click="regist">注册</el-button>
                                </el-form-item>
                            </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
    
<script>
import http from '../../utils/http'
// import {throttle} from '../../utils/common'
import moment from 'moment'
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            activeName: 'first',
            value2: moment((new Date().getTime()-24*3600*1000)).format('YYYY-MM'),
            // defaultValue: ,
            loginForm: {
                phone: '',
                password: ''
            },
            registForm:{
                phone: '',
                password: '',
                userName: ''
            },
            loginRules:{
                phone:[
                    {
                        required: true, trigger:'blur', validator:(rule,value,callback)=>{
                            if(value==''){
                               callback(new Error('手机号不能为空'))
                            } else {
                                 if(!(/^1[3456789]\d{9}$/.test(value))){
                                     callback(new Error('手机号不正确'))
                                 }
                                callback()
                            }
                        }
                    }
                ],
                password: [
                    {
                        required: true, trigger:'blur', validator:(rule,value,callback)=>{
                            if(value=="") {
                                callback(new Error('密码不能为空'))
                            } else {
                                if(!(/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,16}$/.test(value))){
                                    callback(new Error('请输入6-16位的数字和字母组成的字符'))
                                }
                                callback()
                            }
                        }
                    }
                ]
            },
            registRules:{
                userName: [
                    {
                        required: true, message: '请输入用户名',trigger: 'blur'
                    }
                ],
                phone:[
                    {
                        required: true, trigger:'blur', validator:(rule,value,callback)=>{
                            if(value==''){
                               callback(new Error('手机号不能为空'))
                            } else {
                                 if(!(/^1[3456789]\d{9}$/.test(value))){
                                     callback(new Error('手机号不正确'))
                                 }
                                callback()
                            }
                        }
                    }
                ],
                password: [
                    {
                        required: true, trigger:'blur', validator:(rule,value,callback)=>{
                            if(value=="") {
                                callback(new Error('密码不能为空'))
                            } else {
                                if(!(/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,16}$/.test(value))){
                                    callback(new Error('请输入6-16位的数字和字母组成的字符'))
                                }
                                callback()
                            }
                        }
                    }
                ]
            }  
        }
    },
    computed:{
        ...mapGetters('user',{
            userData:'userData'
        })
    },  
    mounted(){
        var time = new Date().getTime()-30*24*3600*1000
        var values =  moment(time).format('YYYY-MM');
        console.log('values',values)
    //    window.addEventListener('mouseover',throttle(function(){
    //     //    console.log('mouserOver')
    //    },500))
       if(this.$route.params && this.$route.params.activeName) {
           this.activeName = this.$route.params.activeName
       }
    },
    methods: {
        ...mapActions('user',{userLogin:'userLogin'}),
        login() {
            console.log('value2',this.value2)
            // this.$router.push({path:'/'})
            this.$refs.loginForm.validate(valid=>{
                if(valid){
                    http.get('user/login',{params:this.loginForm}).then(d=>{
                        console.log('d',d)
                        console.log(moment(d.create_time).format('YYYY-MM-DD HH:mm'))
                        // localStorage.setItem('isLogin',true)
                        // localStorage.setItem('userInfo',JSON.stringify(d.data))
                        this.userLogin(d.data)
                        console.log('userData',this.userData)
                        this.$router.push({path:'/'})
                    
                    })
                }
            })
        },
        regist() {
            this.$refs.registForm.validate(valid=>{
                if(valid){
                    http.get('user/regist',{params:this.registForm}).then(d=>{
                        console.log('登录返回',d)
                        // this.$message.confirm('去登陆').then(()=>{

                        // })  
                    })
                }
            })
          
        }
    }
}
</script>
<style >
    .login_tab {
        text-align: center;
    }
    .login_tab .el-tabs__nav-wrap::after{
        /* height:0; */
    }
</style>
<style scoped>
    .loginRoot{
        height: 100%;
        background: url('../../assets/image/loginbg.jpg') no-repeat ;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loginWrap{
        min-width:350px;
        min-height:400px;
        padding:15px 30px;
        background:white;
        border-radius: 5px;
    }
    .login_title{
        line-height: 50px;
    }
    .loginbtn{
        width:100%;
    }
  
</style>>

