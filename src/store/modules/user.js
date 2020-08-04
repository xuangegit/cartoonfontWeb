const state = {
    isLogin:window.localStorage.getItem('isLogin') || false,
    userInfo:JSON.parse(window.localStorage.getItem('userInfo')) || {}
}
const getters={
    userData:(state,getters)=>{
        console.log('getters',getters)
        return {
            isLogin: state.isLogin,
            userInfo: state.userInfo
        }
    }
}
const actions = {
    userLogin({state,commit},userData){
        console.log('Actios state',state)
        commit('logined',userData)
    },
    userLoginOut({commit}){
        commit('loginOut')
    }
}
const mutations = {
    logined(state,userData){
        // console.log('mutations state',state)
        localStorage.setItem('isLogin',true)
        localStorage.setItem('userInfo',JSON.stringify(userData))
        state.userInfo = userData
        state.isLogin = true
    },
    loginOut(state){
        // localStorage.setItem('isLogin',false)
        // localStorage.setItem('userInfo','{}')
        localStorage.removeItem('isLogin')
        localStorage.removeItem('userInfo')
        state.userInfo ={}
        state.isLogin = false
    }
}
export default  {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}