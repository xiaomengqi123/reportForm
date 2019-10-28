import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

// import Daily from './views/daily.vue';
// import TopPage from './views/topPage.vue';

// const Daily=()=>{
//   /* webpackChunkName: "group-foo" */"./views/daily.vue"
// }
// const TopPage=()=>{
// /* webpackChunkName: "group-foo" */'./views/topPage.vue'
// }

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/daily",
      name: "daily",
      component: () =>
        import( /* webpackChunkName: "group-foo" */"./views/daily.vue")
      // component: Daily
    },
    {
      path: "/toppage",
      name: "TopPage",
      component: () =>
        import(/* webpackChunkName: "group-foo" */"./views/topPage.vue")
      // component: TopPage
    }

  ]
});
