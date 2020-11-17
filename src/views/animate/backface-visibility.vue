<template>
  <div>
      <div class="item">
        <!--box 可以翻转的容器-->
        <div class="box">
            <!--font 默认显示的正面-->
            <div class="font con" :class="{active:isActive}">正面</div>
            <!--back 背面-->
            <div class="back con" :class="{active:!isActive}">背面</div>
        </div>
        <div>
          <el-button type="primary" @click="clickHandle">点击切换</el-button>
        </div>
        <div class="devicesContainer">
          <el-button @click="start" type="primary">开始</el-button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isActive: true
    }
  },
  methods:{
    clickHandle(){
      this.isActive = !this.isActive
    },
    start(){
      navigator.mediaDevices.getUserMedia({
        audio:false,video:true
      }).then(d=>{
        console.log('打开摄像头',d)
      })
    },
  }
}
</script>
<style scoped>
      *{
            padding: 0;
            margin: 0;
        }

        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .item{
            width:200px;
            height:200px;
            perspective:500px;
        }

        .box{
            background: #abb9c5;
            width:100%;
            height:100%;
            position: relative;
        }

        /* .item:hover .box{
            transform: rotateY(180deg);
        } */

        .font, .back{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            text-align: center;
            line-height: 200px;

            backface-visibility: hidden;
        }
        .con{
           transform: rotateY(180deg);
            transition: all 3s
        }
        .active{
            transform: rotateY(0deg);
            transition: all 3s
        }
</style>

