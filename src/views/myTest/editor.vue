<template>
    <div>
      <div id="editor">

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
   value: {}
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
      this.editor  = new E('#editor')
      this.editor.customConfig.onchange =  (html)=> {
          // html 即变化之后的内容
          console.log(html)
          console.log('this',this)
          this.$emit('input',html) 
      }
      this.editor.create()
      this.editor.txt.html(this.value)
    },
  },
  watch:{
    value(val){
      this.editor.txt.html(val)
      // this.$emit('input',val) 
    }
  }
  
}
</script>