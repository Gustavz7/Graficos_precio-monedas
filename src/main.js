/* default */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter);

/** vue-axios plugin **/
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

/** boostrap-Vue Plugin **/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* Chart.js Plugin */
/*No es nesesario */

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
