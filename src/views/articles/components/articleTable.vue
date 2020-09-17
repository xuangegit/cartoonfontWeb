<template>
  <div>
    <div v-if="tableData&&tableData.length>0">
      <list-item  v-for="(item,index) in tableData" :item="item" :key="index"></list-item>
    </div>
    <div v-else class="writeContainer"> 
      <el-button @click="linkHandle">写博客</el-button>
    </div>
  </div>
</template>
<script>
import listItem from './list.vue'
export default {
  components:{
    listItem
  },
  props:{
    tableData:{
      type:Array,
    }
  },
  data(){
    return {
      // tableData:[],
      
    }
  },
  methods:{
    linkHandle(){
      this.$router.push({path: 'addBlog'})
    }
  }
}
</script>
<style scoped>
.writeContainer{
  min-height:500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>