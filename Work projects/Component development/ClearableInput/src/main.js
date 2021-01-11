import DefaultLayout from "~/layouts/Default.vue";
import BootstrapVue from "bootstrap-vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import VueLocalStorage from "vue-localstorage";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";

export default function(Vue, { appOptions, head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(BootstrapVue);

  //Importing vuex for storing the list states
  Vue.use(Vuex);
  Vue.use(VueLocalStorage);
  appOptions.store = new Vuex.Store({
    state: {
      selectItemsList: [],
    },
    mutations: {
      initStore(state) {
        var test = JSON.parse(localStorage.getItem("selectItemsList"));
        state.selectItemsList = test;
      },
      saveSelectList(state, selectItems) {
        console.log("Store select Items List...");
        console.log(selectItems);
        localStorage.setItem("selectItemsList", JSON.stringify(selectItems));
        state.selectItemsList = selectItems;
      },
      refreshCache(state) {
        console.log("Cache refreshed...");
        localStorage.removeItem("selectItemsList");
      },
    },
  });

  //Importing Vuetify to display the examples
  appOptions.vuetify = new Vuetify({
    icons: {
      iconfont: "mdi",
    },
  });
  Vue.use(Vuetify);

  //Importing the icons and fonts required for Vuetify to function properly
  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
    }
  );
}
