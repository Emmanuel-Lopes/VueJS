import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {routes} from './routes';

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // quando a prop e o valor possuem mesmo nome, pode escrever só o nome
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
