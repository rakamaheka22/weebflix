import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailAnime from '../views/DetailAnime.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anime/:id',
    name: 'DetailAnime',
    component: DetailAnime
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/watch-list',
    name: 'WatchList',
    component: () => import('../views/WatchList.vue'),
    meta: {
      auth: true,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    window.scrollTo(0,0);
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  }
});

router.beforeEach(async (to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    
    const isLoggedIn = await store.dispatch('user/isUserLoggon');

    if (!isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => !record.meta.auth)) {
    if (Object.keys(to.meta).length > 0) {
      
      const isLoggedIn = await store.dispatch('user/isUserLoggon');

      if (isLoggedIn) {
        next('/watch-list');
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
