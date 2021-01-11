import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' //This enables us to use the various pages
  //of the VueJS application without the Home page (#)
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
