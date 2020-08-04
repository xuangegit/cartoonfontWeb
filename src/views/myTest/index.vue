<template>
   <div>
     <editor v-model="this.contents" @input="inputHangle" />
     <div>
        <el-button type="primary" @click="clickHandle">test</el-button>
      </div>
   </div>
   
</template>
<script>
import editor from './editor'
export default {
  components: {
    editor
  },
  data(){
    return{ 
      contents: ''
    }
  },
  methods:{
    clickHandle(){
      console.log('contents',this.contents)
    },
    inputHangle(e){
      console.log('inputHandle',e)
      // this.contents = e
    },
  },
  
}
</script>