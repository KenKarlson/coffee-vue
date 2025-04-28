import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import links from './modules/links';
import pleasure from './modules/pleasure';
import bestsellers from './modules/bestsellers';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    catalog,
    pleasure,
    bestsellers,
  },
});

export default store;
