import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'


Vue.prototype.$axios=axios;
Vue.prototype.$qs=qs;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
}).$mount('#app');

/*
/*路由引人
import router from './router/index.js'

new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
});
*/
