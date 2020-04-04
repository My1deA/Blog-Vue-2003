import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //创建一个对象用于存储 表明用户是否登录过
        user: {
            username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]').username)
        }
    },
    mutations:{
        login(state,user){
            //登录成功时将用户存入浏览器缓存中
            state.user=user;

            window.localStorage.setItem('user', JSON.stringify(user));
        }
    }

})