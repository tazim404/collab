import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Login from "../components/auth/Login.vue";
import Singup from "../components/auth/Singup.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/singup",
    name: "singup",
    component: Singup,
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
