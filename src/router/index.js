import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        { path: '/home', name: 'Home', component: Home , meta:{requireAuth:true}},
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