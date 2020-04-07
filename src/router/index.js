import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/home/Index'
import Blog from "@/components/home/Article";
import Admin from "@/components/home/Admin";
import Study from "@/components/home/Study";

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        { path: '/home', name: 'Home', component: Home, redirect: '/index',
          children:[
              {path: '/index', name: 'Index', component: Index},
              {path: '/article', name: 'Article', component: Article},
              {path: '/study', name:'Study', component: Study},
              {path: '/admin', name:'Admin', component: Admin}]
        },
        { path: '/login', name: 'Login', component: Login },
    ]
})


















/*import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Main from './components/content/main'
import Header from './components/header/header'
import Admin from './components/admin/admin'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Main },
        { path: '/main', name: 'Main', component: Main },
        { path: '/header',  name: 'Header', component: Header},
        { path: '/admin',  name: 'Admin', component: Admin}
    ]
})*/


/*const routes =[
    {
        path:'/login',
        name: 'Login',
        component: Login,
    },
    {
        path:'/home',
        name: 'home',
        component: Home,

    }
];

var router=new Router({
    routes:routes
});

export default router;*/