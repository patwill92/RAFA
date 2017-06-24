import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from 'jquery';
import 'jquery-mask-plugin';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue'

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAdR4s5e8lOiRYcUY85w501A-1P-iLSRFY'
    }
});

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
