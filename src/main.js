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
import leaderboard from './components/leaderboard.vue';
import aboutUS from './components/aboutUS.vue';


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
    name: 'leaderboard',
    path: '/leaderboard/:id',
    component: leaderboard
  },
  {
    name: 'leaderboard',
    path: '/leaderboard',
    component: leaderboard
  },
  {
    name: 'aboutUS',
    path: '/aboutUS',
    component: aboutUS
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');