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
                <el-button v-if="item!=socket.id" @click="startVideo(item)">开视频</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="14">
              <div class="cameraBox">
                <video  class="localVideo" ref="localVideo" width='200' heigh="160" autoplay></video>
                <video  class="remoteVideo" ref="remoteVideo" width='400' heigh="320" autoplay></video>
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
      peerConnection: null,
      clientArray:[]
    }
  },
  mounted() {
    this.initIo()
    //  this.rtcEventInit()
  },
  methods: {
    rtcEventInit(){
      this.peerConnection.onnegotiationneeded = this.handleNegotiationNeededEvent
      this.peerConnection.onicecandidate = this.icecandidateHandle
      this.peerConnection.ontrack = this.trackHandle
    },
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
     
      this.socket.on('videoAnswer',data=> {
        if(data.id == this.socket.id) {
          //设置远端sdp
          this.peerConnection.setRemoteDescrition(new RTCSessionDescription(data.sdp)).then(()=> { 
            return navigator.mediaDevices.getUserMedia({video:true})
          }).then(localStream=> {
            localStream.getTracks().forEach(track => this.peerConnection.addTrack(track, localStream));
            
          })
        }
      })

      this.socket.on('videoOffer',(data)=>{
          console.log('offer')
        if(data.id == this.socket.id){
          console.log('offer')
          this.peerConnection = new RTCPeerConnection() //接受端创建RTC连接
          this.rtcEventInit()
           var desc = new RTCSessionDescription(data.sdp);
           this.peerConnection.setRemoteDescrition(desc).then(()=>{  //设置远端sdp
             navigator.mediaDevices.getUserMedia({video:true}).then(localStream=> {
               this.$refs.localVideo.srcObject = localStream 
               localStream.getTracks().forEach(track => this.peerConnection.addTrack(track, localStream));
               this.peerConnection.createAnswer().then(answer=> { //创建answer
                 return this.setLocalDescription(answer) //设置本地sdp
               }).then(()=>{
                 this.sendSocketServe({
                   type: 'videoAnswerToServer',
                   data: {
                     userId: this.socket.id,
                     id: data.userId,
                     sdp: this.peerConnection.localDescription
                   }
                 })
               })
             })
           })
        }
      })

      this.socket.on('new-ice-candidate',data=> {
        this.peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate))
      })
    },
    sendMessage(){
        // if(this.socket) return 
      this.socket.emit('sentClientById',this.socket.id,`你好朋友,我是${this.socket.id}`)
    },
    startVideo(clientId){
      this.friend = clientId
      this.peerConnection = new RTCPeerConnection() //创建RTC连接通道
      this.rtcEventInit()
      let mediaConstraints = {video: true};
      navigator.mediaDevices.getUserMedia(mediaConstraints).then( //获取本地本地视频流
        localStream=>{ 
          this.$refs.localVideo.srcObject = localStream
          this.handleNegotiationNeededEvent()
          
        }
      )
    },
    handleNegotiationNeededEvent(){
      console.log('caller发起')
      this.peerConnection.createOffer().then(offer=>{
        return this.peerConnection.setLocalDescription(offer)
      }).then(()=>{
        this.sendSocketServer({
          type: 'videoOfferToServer',
          data:{
            userId: this.socket.id, //当前用户id
            id: this.friendId,  //对端客户id
            sdp: this.peerConnection.localDescription
          }
        })
      })
    },
    icecandidateHandle(event) {
      if (event.candidate) {
        this.sendSocketServer({
          type: "new-ice-candidateToServer",
          data:{
            userId: this.socket.id,
            id: this.friendId,
            candidate: event.candidate
          },
        });
      }
    },
    trackHandle(event) {
      console.log('event',event)
      this.$refs.remoteVideo.srcObject = event.stream
    },
    sendSocketServe(params) {
      this.socket.to('webRtcRoom').emit(params.type,params.data)
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