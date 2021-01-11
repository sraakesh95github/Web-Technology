import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectItemsList: []
  },

  mutations: {
    saveSelectList: (state, selectItems) => {
      state.selectItemsList = selectItems
    }
  }
});