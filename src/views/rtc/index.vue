<template>
  <div>
    <h3>这是webRTC页面</h3>
    <el-button @click="sendMessage">发送消息</el-button>
  </div>
</template>
<script>
import {io} from 'socket.io-client' 
export default {
  data(){
    return {
      socket: null,
    }
  },
  mounted() {
    this.initIo()
  },
  methods: {
    initIo() {
      const socket = io('ws://localhost:5000');
      this.socket = socket
      this.socket.on('connect',()=>{
        console.log('socket客户端已经连接',this.socket)      
      })
      this.socket.on('disconnect',()=>{
        this.socket = null
      })
      this.socket.on('say',data=>{
        console.log('event--say',data)
      })

      this.socket.on('clientMessage',(id,data)=>{
        console.log('发送方id',id)
        console.log('消息',data)
      })
      this.socket.on('sentClientById',(id,data)=>{
        console.log('发送方id',id)
        console.log('消息',data)
      })
    },
    sendMessage(){
        // if(this.socket) return 
      this.socket.emit('sentClientById',this.socket.id,`你好朋友,我是${this.socket.id}`)
    }
  }
}
</script>