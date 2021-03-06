import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/i18n';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Login/Login.vue'),
    meta: {
      title: i18n.global.t('titles.auth'),
      layout: 'modal',
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '@/components/Help/Help.vue'),
    meta: {
      title: i18n.global.t('titles.help'),
      layout: 'main',
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signUp" */ '@/components/SignUp/SignUp.vue'),
    meta: {
      title: i18n.global.t('titles.signUp'),
      layout: 'modal',
    },
  },
  {
    path: '/',
    name: 'Applications',
    component: () => import(/* webpackChunkName: "applications" */ '@/components/Applications/Applications.vue'),
    meta: {
      title: i18n.global.t('titles.signUp'),
      layout: 'main',
    },
  },
  {
    path: '/application/:id',
    name: 'Application',
    component: () => import(/* webpackChunkName: "application" */ '@/components/Applications/Application.vue'),
    meta: {
      title: i18n.global.t('titles.signUp'),
      layout: 'main',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
