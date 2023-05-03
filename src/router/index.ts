import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/doctarant",
      name: "doctarant",
      component: () => import("../pages/doctarant.vue"),
    },
    {
      path: "/science",
      name: "science",
      component: () => import("../pages/science.vue"),
    },
    {
      path: "/reyting",
      name: "reyting",
      component: () => import("../pages/reyting.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../pages/students.vue"),
    },
    {
      path: "/shopping",
      name: "shopping",
      component: () => import("../pages/shopping.vue"),
    },
    {
      path: "/newspaper",
      name: "newspaper",
      component: () => import("../pages/newspaper.vue"),
    },
    {
      path: "/inno",
      name: "inno",
      component: () => import("../pages/inno.vue"),
    },
  ],
});

export default router;
