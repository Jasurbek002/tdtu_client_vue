import Home from "@/pages/home/Home.vue";
export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/news/:id",
    name: "news",
    component: () => import("@/components/Ui/more/More.vue"),
  },
];
