<template>
   <div>
     <editor v-model="contents" refName="ref1" />
     <editor v-model="content2" refName="ref2"/>
     <div>
        <el-button type="primary" @click="clickHandle">test</el-button>
        <el-button type="primary" @click="clickHandle2">change</el-button>
      </div>
   </div>
   
</template>
<script>
import  editor from './editor'
// import myWangeditor from './myEditor'
export default {
  components: {
    // myWangeditor,
    editor
  },
  data(){
    return{ 
      contents: '1231',
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