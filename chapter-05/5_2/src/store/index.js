import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';

Vue.use(Vuex);

export default (/* { ssrContext } */) => {
  const Store = new Vuex.Store({
    modules: {
      user,
    },
    strict: process.env.DEV,
  });

  return Store;
};
