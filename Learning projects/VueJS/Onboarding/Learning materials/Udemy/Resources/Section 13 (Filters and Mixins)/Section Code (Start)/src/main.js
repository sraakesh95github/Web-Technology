import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// This is a global mixin as is mostly used in the development of plugins
Vue.mixin({
  created() {
    console.log("Global mixin created...")
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
