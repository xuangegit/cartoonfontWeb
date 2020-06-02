<template>
    <div class="wrap">
        <div class="content" v-for="(content,index) in contentData" :key="index">
            <div class="title">{{content.title}}</div>
            <div class="list">
               <span class="list_item" v-for="(item,index) in content.listData" :key="index" @click="select(item)">{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            contentData: [
                {
                    title: '地区:',
                    listData:['全部','国产', '日本', '欧美', '韩国']
                },
                {
                    title: '类型:',
                    listData:['全部','热血', '格斗', '校园', '青春', '美少女', '魔法' , '运动', '青春', '']
                },
            ],
           
            selectedValue: ''
        }
    },
    methods:{
        select(value){
            this.selectedValue = value
            this.$emit('select',value)
        }
    }
}
</script>
<style  scoped>
.content{
    display: flex;
    color: whitesmoke;
}
.title{
    min-width: 100px;
     vertical-align: middle;
}
.list{
    flex:1;
    cursor: pointer;
    text-align: left;
    vertical-align: middle;
}
.list_item {
    vertical-align: middle;
    display: inline-block;
    padding: 5px 10px;
}
.list_item:hover{
    color: green
}
</style>