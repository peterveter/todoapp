import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faTrashAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faTrashAlt, faCheckCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
