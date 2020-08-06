import axios from 'axios'
const server =  axios.create({
    baseURL: process.env.VUE_APP_BASE_API
})  
server.interceptors.response.use(response=>{
    
    return new Promise((resolve,reject)=>{
        if(response.data.code ==1)
            resolve(response.data)
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