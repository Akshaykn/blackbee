import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

Vue.component('ak-cmp', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
