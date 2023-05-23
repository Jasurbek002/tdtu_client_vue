import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/pages/home/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
    },
    {
      path: "/doctarant",
      name: "doctarant",
      component: () => import("../pages/doctarant/page.vue"),
    },
    {
      path: "/doctarant/independent",
      name: "independent",
      component: () => import("../pages/doctarant/independent.vue"), 
    },
    {
      path: "/doctarant/intern",
      name: "intern",
      component: () => import("../pages/doctarant/intern.vue"), 
    },
    {
      path: "/doctarant/support",
      name: "support",
      component: () => import("../pages/doctarant/support.vue"), 
    },
    {
      path: "/doctarant/ds",
      name: "ds",
      component: () => import("../pages/doctarant/ds.vue"), 
    },
    {
      path: "/science",
      name: "science",
      component: () => import("../pages/science/science.vue"),
    },
    {
      path: "/science/tech",
      name: "tech",
      component: () => import("../pages/science/Technic.vue"),
    },
    {
      path: "/science/projects",
      name: "project",
      component: () => import("../pages/science/Projects.vue"),
    },
    {
      path: "/science/laboratory",
      name: "laboratory",
      component: () => import("../pages/science/Loboratoiya.vue"),
    },
    {
      path: "/science/objects",
      name: "objects",
      component: () => import("../pages/science/Objects.vue"),
    },
    {
      path: "/reyting",
      name: "reyting",
      component: () => import("../pages/reyting/reyting.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../pages/students/students.vue"),
    },
    {
      path: "/shopping",
      name: "shopping",
      component: () => import("../pages/shopping/shopping.vue"),
    },
    {
      path: "/newspaper",
      name: "newspaper",
      component: () => import("../pages/newspaper/newspaper.vue"),
    },
    {
      path: "/inno",
      name: "inno",
      component: () => import("../pages/inno/inno.vue"),
    },
    {
      path: "/news/:id",
      name: "news",
      component: () => import("../components/Ui/more/More.vue"),
    },
  ],
});

export default router;
