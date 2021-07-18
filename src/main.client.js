/**
 * The main entry point for the client.
 *
 * A /dist/main.js is generated by webpack.client.config.js and loaded via index.html.
 *
 * Does the following:
 *   1) Bootstraps the client app, router, and data store
 *   2) Attaches client-side cookie library
 *   3) Informs the router to fetch asynchronous data when routing between routes, before resolving the route
 *   4) Mounts the app to the DOM
 *
 * If SSR is enabled, the app-server will use main.server.js as its entry point. All async data requests are pre-fetched
 * in order to make SSR possible. The results of the pre-fetched requests are stored in the shared data store
 * located at core/store.js.
 *
 * When the client first loads the page that has been fully rendered by the server, the shared data store will be
 * available in window.__INITIAL_STATE__. This initial state will bootstrap the client's data store.
 *
 * @see server/app-server.js
 * @see src/main.server.js
 * @see src/core/store.js
 */
import Vue from 'vue';
import Cookies from './lib/cookies';

Vue.use({
  install: (Vue) => {
    Vue.cookies = new Cookies();
  }
});

import {createApp} from './app';
const {app, router, store} = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  router.beforeResolve(fetchAsyncData);
  app.$mount('#app');
});

/**
 * Fetch all async data when routing to a new route, before resolving the route.
 *
 * Intended to be used as a hook for router.beforeResolve. Should be attached after the initial route is resolved
 * as to not double-fetch the data that is already in the store (if SSR is enabled).
 *
 * The beforeResolve hook is called right before a navigation is confirmed, after all other guards and async
 * components have been resolved.
 *
 * @see https://ssr.vuejs.org/en/data.html
 * @see https://router.vuejs.org/en/api/router-instance.html
 */
function fetchAsyncData(to, from, next) {
  const matched = router.getMatchedComponents(to);
  const prevMatched = router.getMatchedComponents(from);

  let diffed = false;
  const activated = matched.filter((c, i) => {
    return diffed || (diffed = (prevMatched[i] !== c))
  });

  const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);

  if (!asyncDataHooks.length) {
    return next();
  }

  Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
    .then(() => next())
    .catch(next);
}
