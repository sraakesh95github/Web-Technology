import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setFilter(state, data) {
      Vue.set(state, "filterData", { ...data });
    }
  },
  actions: {}
});
