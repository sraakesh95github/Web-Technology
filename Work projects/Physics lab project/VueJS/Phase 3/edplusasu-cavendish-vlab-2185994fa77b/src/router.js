import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import StudentView from "./views/StudentView.vue";
import InstructorView from "./views/InstructorView.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "StudentView",
      component: StudentView
    },
    {
      path: "/EVJKOPx1kjwOxcqLBl9tsQLIBymVsMkE",
      name: "InstructorView",
      component: InstructorView
    },
  ]
});
