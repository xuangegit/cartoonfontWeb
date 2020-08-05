import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=> import('../views/home'),
            children:[
                {
                    path:'/',
                    redirect: '/main'
                },
                {
                    path: '/main',
                    name: 'main',
                    component:()=> import('../views/main')
                }
            ]
        },
        {
            path: '/login',
            name:'login',
            component:()=> import('../views/login')
        },
        {
            path: '/upload',
            name: 'upload',
            component:()=>import('../views/upload')
        },
        {
            path: '/mytest',
            name: 'myTest',
            component:()=>import('../views/myTest')
        },
        {
            path: '/css3D',
            name: 'css#d',
            component:()=>import('../views/animate/backface-visibility.vue')
        }
    ]    
})
export default router