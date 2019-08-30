import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Guide from "./components/Guide.vue";
import Commend from "./components/Commend.vue";
import Person from "./components/Person.vue";
import Fabu from "./components/Fabu.vue";
import ZhanXun from "./components/ZhanXun.vue";
import Search from "./components/Search.vue";
import Inshow from "./components/Inshow.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: Guide,
    path: "/"
  },
  {
    component: Home,
    path: "/home",
    children: [
      {
        component: ZhanXun,
        path: "/zhanxun"
      },
      {
        component: Commend,
        path: "/commend"
      },
      {
        component: Person,
        path: "/person"
      },
      {
        component: Fabu,
        path: "/fabu"
      }
    ]
  },
  {
    component: Search,
    path: "/search"
  },
  {
    component: Inshow,
    path: "/inshow"
  }
];
const router = new VueRouter({
  routes,
  mode: "hash"
});

export default router;
