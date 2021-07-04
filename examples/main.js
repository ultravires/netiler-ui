import Vue from 'vue';
import NetilerUI from '../lib/index';
import App from './App.vue';

import '../lib/theme-chalk/index.css';

Vue.use(NetilerUI);

new Vue({
  render: h => h(App)
}).$mount('#app');