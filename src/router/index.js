import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
var router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('../components/newLayout/index.vue'),
            children:[
                {
                    path:'/',
                    redirect: '/main'
                },
                {
                    path: '/main',
                    name: 'main',
                    component:()=> import('../views/myTest')
                },
                {
                    path: '/home',
                    name: 'home',
                    component:()=> import('../views/main')
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
                    name: 'css3d',
                    component:()=>import('../views/animate/backface-visibility.vue')
                },
                {
                    path: '/works',
                    name: 'works',
                    component:()=>import('../views/works')
                },
                {
                    path: '/articles',
                    name: 'articles',
                    component:()=>import('../views/articles')
                },
                {
                    path:'/addBlog',
                    name: 'addBlog',
                    component: ()=>import('../views/myBlog')
                },
                {
                    name:'rtc',
                    path: '/rtc',
                    component:()=>import('../views/rtc')
                }
            ]
        },
        {
            path: '/login',
            name:'login',
            component:()=> import('../views/login')
        },
      
    ]    
})
export default router