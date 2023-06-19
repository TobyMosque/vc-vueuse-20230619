import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  pinia,
}).$mount("#app");
