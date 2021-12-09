import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';
import './firebase';

Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})