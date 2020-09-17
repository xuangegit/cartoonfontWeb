<template>
  <div style="background-color: #f2f5f7;padding:10px;min-width:1200px">
    <el-form inline>
      <!-- <span class="title">筛选</span> -->
      <el-form-item label="筛选：">
        <el-select v-model="form.data1" class="conmonSelect">
          <el-option label="不限" :value="0"></el-option>
          <el-option label="2020" :value="2020"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.data2" class="conmonSelect">
          <el-option v-for="(item,index) in dateArray" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-select v-model="form.data3" class="conmonSelect">
          <el-option value="0" label="不限类型"></el-option>
          <el-option value="1" label="原创"></el-option>
          <el-option value="2" label="转载"></el-option>
          <el-option value="3" label="翻译"></el-option>
        </el-select>
      </el-form-item>
     <el-form-item>
        <el-select v-model="form.data4" class="conmonSelect">
          <el-option value="0" label="不限"></el-option>
          <el-option value="1" label="前端"></el-option>
        </el-select>
     </el-form-item>
     <el-form-item>
        <el-input v-model="form.data5" placeholder="请输入关键词"></el-input>
     </el-form-item>
     <el-form-item style="float: right">
       <el-button class="el-icon-search" @click="searchFn">查询</el-button>
     </el-form-item>
    </el-form>
    <div v-show="extraStatus">
        <el-radio-group v-model="form.data6">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">只显示私密文章</el-radio>
          <el-radio :label="3">只显示公开文章</el-radio>
          <el-radio :label="4">只显示草稿文章</el-radio>
        </el-radio-group>
        <div class="reset-condition" @click="resetSearch">重置搜索</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      extraStatus: false,
      dateArray: [
          { label: '不限', value: 0},
          { label: '1月', value: 1},
          { label: '2月', value: 2},
          { label: '3月', value: 3},
          { label: '4月', value: 4},
          { label: '5月', value: 5},
          { label: '6月', value: 6},
          { label: '7月', value: 7},
          { label: '8月', value: 8},
          { label: '9月', value: 9},
          { label: '10月', value: 10},
          { label: '11月', value: 11},
          { label: '12月', value: 12}
      ],
      form:{
        data1:'',
        data2: "",
        data3: '',
        data4: '',
        data5: '',
        data6: '',
        data7: '',
       
      }
    }
  },
  methods: {
    searchFn() {
      this.extraStatus = true
      this.$emit('search',1)
    },
    resetSearch() {
      this.extraStatus = false
    }
  }
}
</script>
<style scoped>
  .conmonSelect{
    width:180px;
  }
  .reset-condition{
    float:right;
    margin-right: 15px;
    font-size: 14px;
    color: #79a5e5;
    cursor: pointer;
  }
  .reset-condition:hover{
    color: #349edf;
    text-decoration:underline;
  }
</style>