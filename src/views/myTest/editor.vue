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