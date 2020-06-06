import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login';//登录
import Home from '@/components/Home';//主页
import Error from "@/components/Error";//错误
import Index from '@/components/home/Index'//主页-首页
import Article from "@/components/home/Article";//主页-文章
import ArticleDetails from "@/components/home/article/ArticleDetails";//主页-文章详情
import Study from "@/components/home/Study";//主页-学习路线
import Essay from "@/components/home/Essay";//主页-随笔
/**/
import Admin from "@/components/Admin";//管理
import AdminArticle from "@/components/admin/AdminArticle";//管理-文章列表
import AdminArticleAdd from "@/components/admin/AdminArticleAdd";//管理-文章添加
import AdminArticleEdit from "@/components/admin/AdminArticleEdit";//管理-文章修改
import AdminStudy from "@/components/admin/AdminStudy";//管理-学习路线
import AdminRole from "@/components/admin/AdminRole";//管理-角色
import AdminUserInfo from "@/components/admin/AdminUserInfo";//管理-用户信息


Vue.use(Router);

export default new Router({
    //mode: 'history',
    mode: 'hash',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/login', name: 'Login', component: Login},
        {path: '*', name: 'Error', component: Error},
        {
            path: '/home', name: 'Home', component: Home, redirect: '/index',
            children: [
                {path: '/index', name: 'Index', component: Index},
                {path: '/article', name: 'Article', component: Article},
                {path: '/article/details/:id', name: 'ArticleDetails', component: ArticleDetails},//使用 name params传参
                /*{path: '/article/details', name: 'ArticleDetails', component: ArticleDetails},*/ //使用 name/path query传参
                {path: '/study', name: 'Study', component: Study},
                {path: '/essay', name: 'Essay', component: Essay},
            ]
        },
        {
            path: '/admin', name: 'Admin', component: Admin, //meta:{requireAuth: true},表示要验证
            children: [
                {path: '/admin/article', name: 'AdminArticle', component: AdminArticle},
                {path: '/admin/article/add', name: 'AdminArticleAdd', component: AdminArticleAdd},
                {path: '/admin/article/edit/:id', name: 'AdminArticleEdit', component: AdminArticleEdit},
                {path: '/admin/study', name: 'AdminStudy', component: AdminStudy},
                {path: '/admin/role', name: 'AdminRole', component: AdminRole},
                {path: '/admin/userinfo', name: 'AdminInfo', component: AdminUserInfo}]
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