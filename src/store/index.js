import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import links from './modules/links';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    catalog,
  },
});

export default store;
