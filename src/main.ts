import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// fastclick 解决移动端点击延迟    (!!!!不知道怎么解决,跟ts有关系)
// import * as FastClick from 'fastclick';
// FastClick.attach(document.body);

// vue-scroller刷新组件        (!!!!没解决，跟ts有关系)
// import VueScroller from 'vue-scroller';
// Vue.use(VueScroller);

// 引入单个图表-折线图
// declare module 'v-charts'
import VeLine from 'v-charts/lib/line.common';
Vue.component(VeLine.name, VeLine)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
