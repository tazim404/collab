import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Login from "../components/auth/Login.vue";
import Singup from "../components/auth/Singup.vue";
import Profile from "../components/admin/Profile.vue";
import Collab from "../components/chat/Collab.vue";
import Chat from "../components/chat/Chat.vue";
Vue.use(VueRouter);
function guardMyroute(to, from, next) {
  let isAuthenticated = false;
  console.log(to);
  console.log(from);
  if (localStorage.getItem("token")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}
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
  {
    path: "/admin",
    name: "admin",
    component: Profile,
    beforeEnter: guardMyroute,
  },
  {
    path: "/tazim",
    name: "chatting",
    component: Chat,
  },
  {
    path: "/:id",
    name: "chat",
    component: Collab,
    beforeEnter: guardMyroute,
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
