import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  delay: 200,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
