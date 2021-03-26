import './assets/scss/main.scss'

import Vue from 'vue'

import router from '@/router';
import store from '@/store';

import App from '@/App.vue'

import formatMoney from '@/filters/formatMoney'
Vue.use(formatMoney)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')