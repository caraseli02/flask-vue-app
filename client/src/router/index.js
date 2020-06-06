import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import Books from '../components/Books.vue';
// eslint-disable-next-line import/no-unresolved
import Ping from '../components/Ping.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
  ],
});
