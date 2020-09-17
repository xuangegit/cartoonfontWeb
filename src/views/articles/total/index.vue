<template>
  <div>
    <selection @search="selectFn"></selection>
    <div>
      <article-table :tableData="tableData"></article-table> 
    </div>
  </div>
</template>
<script>
import selection from './selection.vue'
import articleTable from '../components/articleTable'
export default {
  components:{
    selection,
    articleTable
  },
  data(){
    return {
      tableData:[],
      tableData1: [
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id:1,
        },
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id: 2,
        },
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id:3
        },
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id: 3
        },
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id:4
        },
        {
          createTime: '2020-9-14',
          date: '2020-9-14 15:25:15',
          type: '公开',
          readers: 50,
          commentAccounts: 20,
          stars: 10,
          id:5
        }
      ],
      item:{
        createTime: '2020-9-14',
        date: '2020-9-14 15:25:15',
        type: '公开',
        readers: 50,
        commentAccounts: 20,
        stars: 10,
      }
    }
  },
  methods: {
    selectFn(data){
      console.log('查询',data)
      if(data)
        this.tableData = this.tableData1
    }
  }
}
</script>
<style scoped>

</style>