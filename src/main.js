import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from 'jquery';
import 'jquery-mask-plugin';

import App from './App.vue'

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
});
