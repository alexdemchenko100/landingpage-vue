/**
 * Application router, used by both the client and server.
 *
 * Serves as the basis for code splitting and componentization. The run-time imports will cause bundle split
 * points for webpack, and as a result, load chunks on-demand (when navigating between routes).
 *
 * @see https://ssr.vuejs.org/en/routing.html
 * @see https://webpack.js.org/guides/code-splitting-async/
 * @see https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import
 */

import axios from 'axios';
import Vue from 'vue'
import Router from 'vue-router';
import keystoneConfig from '../../config/keystone.config';
import { TOTAL_STEPS } from '../components/onboard/onboard.js';

const _ = require('lodash');

Vue.use(Router);

function _checkRegToken (store, next, toPath) {
  if (config.env === 'production') {
    if (!!store.state.global.access) {
      const nextPath = _.get(store, 'state.global.redirectPath', '');
      store.state.global.redirectPath = '';
      next(nextPath || undefined);
    } else {
      store.state.global.redirectPath = toPath || '';
      next('/access');
    }
  } else {
    store.state.global.access = true;
    next();
  }
}

export function createRouter (store) {
  // gate onboard pages behind access token check
  const beforeEnter = (to, from, next) => store.state.global.user._id
    ? next()
    : _checkRegToken(store, next, to.path)

  const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'register_devcolor',
        path: '/register/devcolor',
        component: () => import(/* webpackChunkName: "registerdevcolor */ '../components/devcolor.vue'),
      },
      {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../components/home.vue')
      },
      {
        name: 'about',
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
      },
      {
        name: 'inspire',
        path: '/inspire',
        component: () => import(/* webpackChunkName: "about" */ '../components/inspire.vue')
      },
      {
        name: 'founders',
        path: '/founders',
        component: () => import('../components/founders.vue')
      },
      {
        name: 'camille-hearst',
        path: '/founders/camille-hearst',
        component: () => import('../components/camille-hearst.vue')
      },
      {
        name: 'jason-mayden',
        path: '/founders/jason-mayden',
        component: () => import('../components/jason-mayden.vue')
      },
      {
        name: 'network',
        path: '/network',
        component: () => import(/* webpackChunkName: "network" */ '../components/network.vue')
      },
      {
        name: 'tos',
        path: '/terms-of-service',
        component: () => import(/* webpackChunkName: "tos" */ '../components/tos.vue'),
      },

      {
        name: 'login',
        path: '/user/login',
        component: () => import(/* webpackChunkName: "login" */ '../components/login.vue'),
        beforeEnter: (to, from, next) =>
          store.state.global.user._id
            ? next(keystoneConfig['signin redirect'])
            : _checkRegToken(store, next, to.path),
      },
      {
        name: 'logout',
        path: '/user/logout',
        beforeEnter: (to, from, next) => {
          if (!store.state.global.user._id) {
            return next(keystoneConfig['signout redirect']);
          }

          axios
            .post(config.api.base + '/user/logout', { proxy: { port: config.port } })
            .then(() => {
              next(keystoneConfig['signout redirect']);
              store.state.global.user._id = null;
            })
            .catch(error => console.log(error));
        }
      },
      {
        name: 'profile',
        path: '/user/profile',
        component: () => import(/* webpackChunkName: "profile" */ '../components/profile.vue'),
        beforeEnter: (to, from, next) =>
          !store.state.global.user._id
            ? next(keystoneConfig['signin url'])
            : next(),
      },
      {
        name: 'register',
        path: '/register',
        component: () => import(/* webpackChunkName: "register" */ '../components/register.vue'),
        beforeEnter: (to, from, next) =>
          store.state.global.user._id ? next('/onboard') : _checkRegToken(store, next, to.path),
      },
      {
        name: 'onboard',
        path: '/onboard',
        beforeEnter: (to, from, next) => {
          if (!store.state.global.user._id) {
            return next(keystoneConfig['signin url']);
          }

          if (_.has(store.state.global.user, 'questions.currentStep')) {
            const step = store.state.global.user.questions.currentStep;
            return step <= TOTAL_STEPS ?
              next(`/onboard/${step}`) : next('/user/profile');
          }

          store.dispatch('fetch', {
            id: store.state.global.user._id,
            endpoint: 'users',
            namespace: 'user',
            global: true
          }).then(() => {
            const step = store.state.global.user.questions.currentStep;
            return step < TOTAL_STEPS ?
              next(`/onboard/${step}`) : next('/user/profile');
          }).catch(error => console.error(error));
        }
      },
      {
        name: 'onboard-1',
        path: '/onboard/1',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.1.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-2',
        path: '/onboard/2',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.2.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-3',
        path: '/onboard/3',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.3.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-4',
        path: '/onboard/4',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.4.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-5',
        path: '/onboard/5',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.5.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-6',
        path: '/onboard/6',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.6.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-7',
        path: '/onboard/7',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.7.vue'),
        beforeEnter,
      },
      {
        name: 'onboard-8',
        path: '/onboard/8',
        component: () => import(/* webpackChunkName: "onboard" */ '../components/onboard/onboard.8.vue'),
        beforeEnter,
      },
      {
        name: 'access',
        path: '/access',
        component: () => import(/* webpackChunkName: "access" */ '../components/access.vue'),
      },
      {
        name: 'privacy',
        path: '/privacy-policy',
        component: () => import(/* webpackChunkName: "privacy" */ '../components/privacy.vue'),
      },
      {
        name: 'invite',
        path: '/invite/:id',
        component: () => import (/* webpackChunkName: "invite" */ '../components/invite.vue'),
        beforeEnter: (to, from, next) => {
          if (to.params.id && to.params.id === config.accessToken) {
            store.state.global.access = true;
            return next('/register');
          } else {
            return next();
          }
        },
      },
      {
        name: 'investments',
        path: '/investments',
        component: () => import(/* webpackChunkName: "investments" */ '../components/investments.vue'),
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      }
      return { x: 0, y: 0 }
    }
  });

  return router;
}
