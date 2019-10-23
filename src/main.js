import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import routes from './router';
import axios from 'axios';
//import 'jquery'

//var $ = window.jQuery;
require('../static/css/main.css');
//
//Vue.config.silent = true;

//axios.defaults.baseURL = "http://localhost/vueapp01/src/Api";
axios.defaults.baseURL = "http://localhost:8081/api/";

Vue.config.productionTip = false;

Vue.use(VueRouter);

//const router = new VueRouter({routes});

const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


