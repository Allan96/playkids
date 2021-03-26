import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user';
import products from './modules/products';
import cart from './modules/cart';


Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {},
    getters: {},
    mutations: {},
    modules: { user, products, cart }
});

export default store;