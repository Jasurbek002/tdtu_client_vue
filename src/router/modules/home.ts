import Home from "@/pages/home/Home.vue";
export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/inno/info",
    name: "info",
    component: () => import("@/components/InnoInfo/InnoInfo.vue"),
  },
  {
    path: "/news/:id",
    name: "news",
    component: () => import("@/components/Ui/more/More.vue"),
  },
];
