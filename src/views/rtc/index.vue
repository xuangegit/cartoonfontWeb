<template>
  <div>
    <h3>这是webRTC页面</h3>
    <p class="tip">这是一个简易的webRtc的例子，我们用socket服务做信令服务</p>
    <el-button @click="sendMessage">发送消息</el-button>
    <el-button @click="joinRoom">加入房间</el-button>
    <div class="container">
        <el-row>
          <el-col :span="10">
            <ul class="clientList">
              <div style="line-height:36px;text-align:center;color:#ec4276">webRtcRoom</div>
              <li class="clientItem" v-for="item in clientArray" :key="item">
                {{item==socket.id?item+'(yourself)':item}}
                <el-button v-if="item!=socket.id" @click="startVideo">开视频</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="14">
              <div class="cameraBox">
                <video  class="localVideo" ref="localVideo"></video>
                <video  class="remoteVideo" ref="remoteVideo"></video>
                <el-button @click="hangOn">挂断</el-button>
              </div>
          </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
import {io} from 'socket.io-client' 
export default {
  data(){
    return {
      socket: null,
      clientArray:[]
    }
  },
  mounted() {
    this.initIo()
  },
  methods: {
    hangOn() {

    },
    joinRoom(){
      this.socket.emit('joinRoom','webRtcRoom')
    },
    initIo() {
      const socket = io('ws://localhost:5000');
      this.socket = socket
      this.socket.on('connect',()=>{
        console.log('socket客户端已经连接',this.socket)      
      })
      this.socket.on('disconnect',()=>{
        console.log('socket客户端已经断开连接')
        this.socket = null
      })
      

      this.socket.on('clientMessage',(id,data)=>{
        console.log('发送方id',id)
        console.log('消息',data)
      })
      this.socket.on('sentClientById',(id,data)=>{
        console.log('发送方id',id)
        console.log('消息',data)
      })
      this.socket.on('updateRoomMember',(clientArray)=>{
        this.clientArray = clientArray
      })
    },
    sendMessage(){
        // if(this.socket) return 
      this.socket.emit('sentClientById',this.socket.id,`你好朋友,我是${this.socket.id}`)
    }
  }
}
</script>
<style lang="css" scoped>
  .tip{
    padding: 10px;
    border-left:5px solid #f6b73c;
    background:#eee;
  }
  h3{
    text-align:center;
    line-height: 30px;
  }
  .clientList{
    padding:15px;
    border:1px solid #d1972a;
    border-radius: 5px;
  }
  .clientItem{
    text-align:center;
    min-width:200px;
    padding:15px;
    border:1px solid #ccc;
  }
</style>