import Vue from 'vue';
import App from './App.vue';
import VField from './components/VField.vue';

Vue.config.productionTip = false;

// Global components.
const globals = [
  VField,
];

globals.forEach(value => Vue.component(value.name, value));

new Vue({
  render: h => h(App),
}).$mount('#app');
