import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home.vue';
import Services from '@/components/services.vue';
import Register from '@/components/register.vue';
import Login from '@/components/login.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name:'home', 
      component: Home 
    },
    { 
      path: '/register',
      name:'register', 
      component: Register,
      meta:{
        needsAuth: false,
      } 
    },
    { 
      path: '/services',
      name:'services', 
      component: Services,
      meta:{
        needsAuth: true,
      } 
    },
    { 
      path: '/login',
      name:'login', 
      component: Login,
    }
  ]
})


router.beforeEach((to, from, next) => {
  store.dispatch('checkToken');
  const requiresAuth = to.matched.some(record => record.meta.needsAuth);
  if(requiresAuth) {
    //console.log('===>'+store.getters.loggedIn);
    if(!store.getters.loggedIn){
      next('/login')
    } else {
      //console.log(to.fullPath);
      next()
    }
  } else {
    next()
  }
})


/*const routes = [
    { 
      path: '/', 
      name:'home', 
      component: Home 
    },
    { 
      path: '/register',
      name:'register', 
      component: Register,
      meta:{
        needsAuth: false,
      } 
    },
    { 
      path: '/services',
      name:'services', 
      component: Services,
      meta:{
        needsAuth: true,
      } 
    },
    { 
      path: '/login',
      name:'login', 
      component: Login,
    },
];*/

//Javascript
import '@/assets/js/jquery.min.js';
import '@/assets/js/browser.min.js';
import '@/assets/js/util.js';
import '@/assets/js/main.js';

export default router
