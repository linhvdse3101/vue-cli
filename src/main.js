import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import vuetify from './plugins/vuetify'
import GAuth from 'vue-google-oauth2'
import './plugins/index'
Vue.config.productionTip = false
Vue.use(GAuth, { clientId: '372865906055-kvntue21abv1sn6c7ea5poo5r4c734ad.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
