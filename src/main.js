import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueScrollReveal from 'vue-scroll-reveal'

window.axios = axios;

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  delay: 200,
  scale: 1,
  distance: '10px',
  mobile: true
});

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.silent = true;
Vue.config.debug = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
