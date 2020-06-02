<template>
    <div  class="page">
        <!-- <div class="pageTitle">
            动漫上传
        </div>
         -->
        <div class="pageContent">
             <el-page-header class="uploadHeader" @back="goBack" content="上传动漫">
            </el-page-header>

            <div class="content">
                <el-form :model="uploadForm" label-width="100px" :rules="rules" class="uploadForm" ref="uploadForm">
                    <el-form-item label="动漫名称" prop="name">
                        <el-input v-model="uploadForm.name"></el-input>
                    </el-form-item> 
                    <el-form-item label="封面" prop="coverImage">
                        <el-upload
                            class="upload-demo"
                            drag
                            :action="action"
                            :on-progress="processHandle"
                            :show-file-list='false'
                            :on-success="uploadSuccess"
                            >
                            <div v-if="!isUpload">
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            </div>
                            <img :src="uploadForm.coverImage" class="coverImage" width="100%" v-else>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="描述" prop="description">
                        <el-input type="textarea" v-model="uploadForm.description" placeholder="最多输入100字符"></el-input>

                    </el-form-item>  
                </el-form>
                <div class="btns">
                    <el-button @click="submit">提交</el-button>
                    <el-button @click="cancel">取消</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../utils/http'
export default {
    data(){
        return {
            isUpload:false,
            action:`${process.env.VUE_APP_BASE_API}/user/upload`,
            uploadForm:{
                name: '',
                coverImage: '',
                description: ''
            },
            rules:{
                name: [
                    { required: true, message:'必填', trigger: 'blur'}
                ],
                coverImage: [
                    { required: true, message:'必填', trigger: 'blur'}
                ]
            }
        }
    },
    mounted(){
        document.title="动漫上传";
        console.log('env',process.env)
        http.get('user/getList').then(d=>{
            console.log('列表list',d)
        })
    },
    methods:{
        processHandle(event,file,list){
            console.log('event',event)
            console.log('file',file)
            console.log('filelist',list)
        },
        uploadSuccess(res,file){
            this.isUpload = true
            this.uploadForm.coverImage = process.env.VUE_APP_BASE_API +'/' + res.data.path
            console.log('cuccess',res)
            console.log('successfile',file)
        },
        goBack(){
            this.$router.push('/')
        },
        submit() {
            this.$refs.uploadForm.validate(valid=>{
                if(valid) {
                    http.post('user/addList',this.uploadForm).then(d=>{
                        console.log('添加cartoon数据',d)
                        this.$message.success(d.msg)
                    }).catch(e=>{
                        this.$message.error(e.msg)
                    })
                }
            })
           
        },
        cancel() {
            this.$refs.uploadForm.resetFields()
        }
    }
}
</script>
<style  scoped>
    .page{
        height: 100%;
        padding: 0 300px;
        background: #13192F;
    }
    .pageTitle{
        line-height: 50px;
        font-weight: bolder;
    }
    .el-page-header{
        line-height: 50px;
        color:#fff;
    }
     .el-page-header__content {
        /* font-size: 18px; */
        color: #fff!important;
    }
    
</style>
<style>
    .uploadForm{
        max-width:700px;
    }
    .uploadForm .el-form-item__label{
        color:#fff!important
    }
    .uploadHeader>.el-page-header__content{
        color: #fff!important;
    }
</style>