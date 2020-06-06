import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //创建一个对象用于存储 表明用户是否登录过
        user: {
            username: window.localStorage.getItem('username' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('username' || '[]')),
        }
    },
    mutations:{
        login(state,user){
            //登录成功时将用户存入浏览器缓存中
            state.user.username=user.username;

            window.localStorage.setItem('username', JSON.stringify(user.username));
        },
        logout (state) {
            // 注意不能用 null 清除，否则将无法判断 user 里具体的内容
            state.user.username = ''
            window.localStorage.removeItem('username')
            state.adminMenus = []
        }
    }

})