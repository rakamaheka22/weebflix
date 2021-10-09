import Vue from 'vue';
import VueFeather from 'vue-feather';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

Vue.use(VueAxios, axios);

Vue.use(Vuex);

Vue.use(VueAwesomeSwiper);

Vue.use(VueFeather);

Vue.config.productionTip = false;

import 'swiper/css/swiper.css';

import './assets/tailwind.css';
import './assets/scss/main.scss';

import router from './router';
import store from './store';
import './firebase';

import App from './App.vue';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
