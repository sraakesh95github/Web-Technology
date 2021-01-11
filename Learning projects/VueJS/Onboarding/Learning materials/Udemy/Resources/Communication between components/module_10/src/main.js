import Vue from 'vue'
import App from './App.vue'

//Serves as a main vue instance that can be used to pass
// data within multiple child nodes
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
