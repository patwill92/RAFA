import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueScroll from 'vue-scroll';


import App from './App.vue'

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueScroll);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
