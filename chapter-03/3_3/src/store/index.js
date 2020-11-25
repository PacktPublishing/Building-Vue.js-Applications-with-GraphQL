import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default (/* { ssrContext } */) => {
  const Store = new Vuex.Store({
    modules: {},
    strict: process.env.DEV,
  });

  return Store;
};
