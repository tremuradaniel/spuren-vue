import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/main'
import store from './store/main'
import App from './components/App.vue'
import sprint from 'sprint'

// Import Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// mixins
import apiMix from './mixins/apiMix'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = sprint(
  '%s://%s:%s%s',
  process.env.VUE_APP_API_SCHEME,
  process.env.VUE_APP_API_HOST,
  process.env.VUE_APP_API_PORT,
  process.env.VUE_APP_API_PATH
)

Vue.use(Vuex)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

require('./store/subscriber')

new Vue({
  store,
  router,
  mixins: [apiMix],
  render: h => h(App),
}).$mount('#app')
