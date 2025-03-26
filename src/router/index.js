import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HeroView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contacts",
      name: "Contact us",
      component: () => import("@/views/ContactsView.vue"),
    },
    {
      path: "/reservation",
    },
  ],
});
export default router;
