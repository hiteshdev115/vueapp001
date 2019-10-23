/*import Vue from 'vue'
import Router from 'vue-router'
import homeCompontnt from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeCompontnt
    }
  ]
})

const routes = [];

export default routes;*/


import Home from '@/components/home.vue';
import Register from '@/components/register.vue';
import Login from '@/components/login.vue';

//import 'static/css/main.css';

const routes = [
    { path: '/', name:'home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

//Javascript
import '@/assets/js/jquery.min.js';
import '@/assets/js/browser.min.js';
import '@/assets/js/util.js';
import '@/assets/js/main.js';

export default routes;
