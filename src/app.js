import App from './app.vue';
import config from '../config';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import {createRouter} from './core/router';
import {createStore} from './core/store';
import {sync} from 'vuex-router-sync';

export function createApp() {
  const store = createStore();
  const router = createRouter(store);

  // link google analytics with router
  Vue.use(VueAnalytics, { id: config.analyticsId, router });

  sync(store, router);

  const app = new Vue({router, store, render: h => h(App)});

  return {app, router, store};
}
