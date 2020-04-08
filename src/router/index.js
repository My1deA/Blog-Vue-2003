import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Error from "@/components/Error";
import Index from '@/components/home/Index'
import Article from "@/components/home/Article";
import Study from "@/components/home/Study";
import Essay from "@/components/home/Essay";
/**/
import Admin from "@/components/Admin";
import AdminArticle from "@/components/admin/AdminArticle";
import AdminStudy from "@/components/admin/AdminStudy";
import AdminRole from "@/components/admin/AdminRole";
import AdminInfo from "@/components/admin/AdminInfo";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/login', name: 'Login', component: Login},
        {path: '*', name: 'Error', component: Error},
        {
            path: '/home', name: 'Home', component: Home, redirect: '/index',
            children: [
                {path: '/index', name: 'Index', component: Index},
                {path: '/article', name: 'Article', component: Article},
                {path: '/study', name: 'Study', component: Study},
                {path: '/essay', name: 'Essay', component: Essay},
            ]
        },
        {
            path: '/admin', name: 'Admin', component: Admin,redirect: '/adminArticle',
            children: [
                {path: '/adminArticle', name: 'AdminArticle', component: AdminArticle},
                {path: '/adminStudy', name: 'AdminStudy', component: AdminStudy},
                {path: '/adminRole', name: 'AdminRole', component: AdminRole},
                {path: '/adminInfo', name: 'AdminInfo', component: AdminInfo}]
        },

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