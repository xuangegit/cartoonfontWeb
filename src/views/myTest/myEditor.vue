<template>
  <div>
    <div id="wangeditor"><div ref="editorElem" :value="value" style="text-align:left"></div></div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
    props: ['value'],
    data() {
        return {
            flag: true,
            editor: null,
        }
    },
    watch: {
        value(val) {
            if(this.flag){
                //这里初始化的时候赋值
                this.editor.txt.html(val);
            }
            this.flag = true;
        }
    },
    mounted: function () {
        const self = this;
        // let E = window.wangEditor;
        self.editor = new E(this.$refs.editorElem);        //创建富文本实例
        
        self.editor.customConfig.onchange = (html) => {
            this.flag = false;//这里改变绝对不能触发初始化赋值 否者会出现问题
            self.$emit('input', html);
        };
        self.editor.customConfig.uploadImgServer = '图片上传地址';
        self.editor.customConfig.uploadFileName = 'file';
        self.editor.customConfig.uploadImgMaxSize = 1024 * 1024;// 将图片大小限制为 1M
        self.editor.customConfig.uploadImgMaxLength = 1;// 限制一次最多上传 1 张图片
        self.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000;// 设置超时时间
        // editor.customConfig.uploadImgHeaders = {
        //     'Accept': '*/*',
        //     'Authorization':'Bearer ' + token    //头部token
        // };
        self.editor.customConfig.menus = [          //菜单配置
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
        //下面是最重要的的方法
        // self.editor.customConfig.uploadImgHooks = {
        //     before: function (xhr, editor, files) {
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
        //         self.imgUrl = Object.values(result.data).toString()
        //     },
        //     fail: function (xhr, editor, result) {
        //         // 图片上传并返回结果，但图片插入错误时触发
        //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        //     },
        //     error: function (xhr, editor) {
        //         // 图片上传出错时触发
        //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        //     },
        //     timeout: function (xhr, editor) {
        //         // 图片上传超时时触发
        //         // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        //     },

        //     // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        //     // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        //     customInsert: function (insertImg, result, editor) {
        //         // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        //         // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        //         // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        //         // let url = Object.values(result.data);      //result.data就是服务器返回的图片名字和链接
        //         // JSON.stringify(url);    //在这里转成JSON格式
        //         insertImg(result.data.location);
        //         // result 必须是一个 JSON 格式字符串！！！否则报错
        //     }
        // };
        self.editor.create();
        if(this.value) this.editor.txt.html(this.value)
    },
}
</script>