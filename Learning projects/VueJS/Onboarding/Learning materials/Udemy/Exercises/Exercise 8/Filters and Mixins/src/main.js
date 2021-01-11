import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('length-count', function(value) {
    var tempString = '';
    tempString = value.split("");
    return (value + " " + tempString.length.toString())
})

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
