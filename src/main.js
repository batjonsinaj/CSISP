import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Welcome from './components/Welcome.vue';
import HomePage from './components/homePage.vue';
import ranking from './components/ranking.vue';
import aboutUs from './components/aboutUs.vue';
import upload from './components/upload.vue';


const routes = [
  {
      name: 'welcome',
      path: '/',
      component: Welcome
  },
  {
      name: 'homePage',
      path: '/homePage',
      component: HomePage
  },
  {
    name: 'ranking',
    path: '/ranking',
    component: ranking
  },
  {
    name: 'aboutUs',
    path: '/aboutUs',
    component: aboutUs
  },
  {
    name: 'upload',
    path: '/upload',
    component: upload
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');