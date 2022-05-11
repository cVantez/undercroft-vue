import Home from '@/views/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/redWagon',
    name: 'redWagon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/RedWagon.vue'),
  },
  // fallthrough route for custom 404 page
  {
    path: '/:missingUrl(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "missing" */ '@/views/Missing.vue')
  }
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
