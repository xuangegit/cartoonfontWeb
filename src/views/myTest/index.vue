<template>
   <div>
     <editor v-model="contents" refName="ref1" />
     <editor v-model="content2" refName="ref2"/>
      <markdown-editor/>
     <div>
        <el-button type="primary" @click="clickHandle">test</el-button>
        <el-button type="primary" @click="clickHandle2">change</el-button>
      </div>
      <div>
        <download-excel/> 
      </div>
   </div>
   
</template>
<script>
import  editor from './editor'
// import myWangeditor from './myEditor'
import downloadExcel from './downloadExcel'
import markdownEditor from './markdown'
export default {
  components: {
    // myWangeditor,
    editor,
    downloadExcel,
    markdownEditor
  },
  data(){
    return{ 
      contents: '',
      content2:'123213',
    }
  },
  methods:{
    clickHandle(){
      console.log('contents',this.contents)
      console.log('content2',this.content2)
    },
    clickHandle2(){
      this.contents ='666'
      this.content2 ='666'
      console.log('contents',this.contents)
      console.log('content2',this.content2)
    },
  },
  
}
</script>