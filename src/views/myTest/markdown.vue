<template>
    <div class="markdown">
        <div class="container">
            <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
            <button @click="submit">提交</button>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: "",
        props: [],
        components: {
            mavonEditor,
        },
        data() {
            return {
                content:'',
                html:'',
                configs: {}
            }
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
              console.log("file",$file)
            //   this.$refs.md.$img2Url(pos, $file.miniurl);
                let formdata = new FormData();
                formdata.append('file',$file)
                this.$http.post('user/upload', formdata).then(res => {
                    console.log(res.data);
                    this.$refs.md.$img2Url(pos,  process.env.VUE_APP_BASE_API +'/' + res.data.path);
                }).catch(err => {
                    console.log(err)
                })
            },
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                this.html = render;
            },
            // 提交
            submit(){
                console.log(this.content);
                console.log(this.html);
                this.$message.success('提交成功，已打印至控制台！');
            }
        },
        mounted() {

        }
    }
</script>
