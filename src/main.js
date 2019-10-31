import Vue from 'vue';
import App from './App';
//import VueRouter from 'vue-router';

import router from './router';
import axios from 'axios';
import store from './store';
import VeeValidate from 'vee-validate';


require('../static/css/main.css');
//
//Vue.config.silent = true;

axios.defaults.baseURL = "http://localhost:8081/api/";

Vue.config.productionTip = false;

//Vue.use(VueRouter);

//const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')






