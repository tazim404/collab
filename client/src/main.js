import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "./router/route";
import VueYoutube from "vue-youtube";

import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";
const socket = io("http://127.0.0.1:5000");
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueYoutube);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
