import Vue from 'vue';
import App from './App.vue';
import router from './router';
import IconSvg from '../src/components/icon-svg/icon-svg.vue';
import '@/util/vant.js';
import '@/util/element.js';
import 'amfe-flexible/index.js';

Vue.component('IconSvg', IconSvg);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
