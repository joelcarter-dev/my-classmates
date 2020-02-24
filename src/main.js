import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Keziah from './components/keziah/Keziah.vue';
import Anton from './components/anton/Anton'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [{
    path: '/keziah',
    component: Keziah
  },
  {
    name: 'anton',
    path: '/anton',
    component: Anton
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
