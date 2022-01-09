import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/championship',
    name: 'Championship',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */'../views/Championship/Dashboard.vue'),
      },
      {
        path: 'season',
        name: 'Season',
        component: () => import(/* webpackChunkName: "season" */'../views/Championship/Season.vue'),
      },
      {
        path: 'round',
        name: 'Round',
        component: () => import(/* webpackChunkName: "round" */ '../views/Championship/Round.vue'),
      },
      {
        path: 'stats',
        name: 'Stats',
        component: () => import(/* webpackChunkName: "stats" */ '../views/Championship/Stats.vue'),
      },
      {
        path: 'participants',
        name: 'Participants',
        component: () => import(/* webpackChunkName: "participants" */ '../views/Championship/Participants.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('to: ', to);
  console.log('from: ', from);
  next();
});

export default router;
