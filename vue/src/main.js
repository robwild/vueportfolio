import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//  Headful stuff for page titles and meta data
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful);

// Bootstrap stuff for layout
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// FontAwesome stuff
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Highcharts stuff
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
import drilldown from "highcharts/modules/drilldown";

drilldown(Highcharts);
dataModule(Highcharts);

Vue.use(HighchartsVue);

// Load custom styles
import './assets/css/style.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
