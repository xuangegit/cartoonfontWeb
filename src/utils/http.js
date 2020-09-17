import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
const server =  axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})
server.interceptors.request.use(config=>{
    NProgress.start()
    return config
},err=>{
    return Promise.reject(err)
})  
server.interceptors.response.use(response=>{
    
    return new Promise((resolve,reject)=>{
        if(response.data.code ==1){
            NProgress.done()
            resolve(response.data)     
        }
        else {
            // this.$message.error(response.data.msg)
            reject(response.data)
        }
                
    })
},err => {
    console.log(err)
    return Promise.reject(err)
})
export default server