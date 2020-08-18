import user from './modules/user'
import app from './modules/app'
import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)
export default new vuex.Store({
    modules:{
        user,
        app
    }
})