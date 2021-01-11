import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value;

    // delay acts as a modifier for the directive
    var delay = 0;

    if(binding.modifiers['delayed']) {
      delay = 1000;
    }
    setTimeout(() => {
    //Addition of values and arguments to the directive
    if(binding.arg == 'backgroundColor') 
    el.style.backgroundColor = binding.value;
  else
    el.style.color = binding.value;
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
