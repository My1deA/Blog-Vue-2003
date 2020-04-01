import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
}).$mount('#app');

/*
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
});
*/
