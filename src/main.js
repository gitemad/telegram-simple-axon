import Vue from 'vue'
import App from './App.vue'
import '@/plugins/unicon'
import '@/plugins/axios'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
store.dispatch('auth/attempt')
.then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
