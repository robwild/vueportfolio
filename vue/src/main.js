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

// Progress bar stuff
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options);

// Load custom styles
import './assets/css/style.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
