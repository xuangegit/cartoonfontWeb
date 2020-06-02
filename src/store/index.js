import user from './modules/user'
import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)
export default new vuex.Store({
    modules:{
        user
    }
})