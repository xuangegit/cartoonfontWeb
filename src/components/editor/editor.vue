<template>
    <div>
      <div  :ref="refName">

      </div>
    </div>
</template>
<script>
import E from 'wangeditor'
export default {
 model: {
    prop: 'value',
    event: 'input'
  },
  props:{
   value: {},
   refName:{}
  },
  data(){
    return {
      editor:null
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.editor  = new E(this.$refs[this.refName])
      this.editor.customConfig.onchange =  (html)=> {
          // html 即变化之后的内容
          console.log(html)
          console.log('this',this)
          this.$emit('input',html) 
      }
       this.editor.customConfig.menus = [          //菜单配置
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            // 'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ];
        //后端服务端和前端服务在同一个服务器下可以使用下面配置
      //   this.editor.customConfig.uploadImgServer = 'user/upload';
      //   this.editor.customConfig.uploadFileName = 'file';
      //   this.editor.customConfig.uploadImgMaxSize = 1024 * 1024;// 将图片大小限制为 1M
      //   this.editor.customConfig.uploadImgMaxLength = 1;// 限制一次最多上传 1 张图片
      //   this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000;// 设置超时时间
      //   this.editor.customConfig.uploadImgHooks = {
      //     before: function (xhr, editor, files) {
      //       console.log('before--xhr',xhr)
      //       console.log('before--editor',editor)
      //       console.log('before--files',files)
      //         // 图片上传之前触发
      //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
              
      //         // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
      //         // return {
      //         //     prevent: true,
      //         //     msg: '放弃上传'
      //         // }
      //     },
      //     success: function (xhr, editor, result) {
            
      //         // 图片上传并返回结果，图片插入成功之后触发
      //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      //         console.log('success--xhr',xhr)
      //         console.log('success--editor',editor)
      //         console.log('success--result',result)
      //     },
      //     fail: function (xhr, editor, result) {
      //         // 图片上传并返回结果，但图片插入错误时触发
      //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
      //         console.log('fail--xhr',xhr)
      //         console.log('fail--editor',editor)
      //         console.log('fail--result',result)
      //     },
      //     error: function (xhr, editor) {
      //         // 图片上传出错时触发
      //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      //         console.log('error--xhr',xhr)
      //         console.log('error--editor',editor)
      //     },
      //     timeout: function (xhr, editor) {
      //         console.log('timeout--xhr',xhr)
      //         console.log('timeOut--editor',editor)
      //         // 图片上传超时时s触发
      //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
      //     },

      //     // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
      //     // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
      //     customInsert: function (insertImg, result, editor) {
      //         // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
      //         // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

      //         // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
      //         console.log('insert',result)
      //         console.log('insert',editor)
      // 按照服务端返回的内容拼接图片地址
      //         var url = process.env.VUE_APP_BASE_API + '/' +result.path 
      //         insertImg(url)

      //         // result 必须是一个 JSON 格式字符串！！！否则报错
      //     }
      // }
      

      // 自定义图片上传
      this.editor.customConfig.customUploadImg =  (files, insert)=> {
          // files 是 input 中选中的文件列表
          // insert 是获取图片 url 后，插入到编辑器的方法

          // 上传代码返回结果之后，将图片插入到编辑器中
          // console.log('files',files)
          var file = files[0]
          // this.$http
           const data = new FormData();
          data.append('file', file);
          this.$http.post('user/upload', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then(res => {
            console.log(res);
            var path =  process.env.VUE_APP_BASE_API +'/' + res.data.path
            insert(path) //插入图片
          }).catch(err => {
            console.log(err);
          });
          // insert(files[0].name)
      }

      this.editor.create()
      this.editor.txt.html(this.value)
    },
  },
  watch:{
    value(val){
       if (val !== this.editor.txt.html()) {
          this.editor.txt.html(this.value)
        }
    }
  }
  
}
</script>