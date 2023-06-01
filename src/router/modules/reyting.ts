export default [
  {
    path: "/reyting",
    name: "reyting",
    component: () => import("@/pages/reyting/reyting.vue"),
  },
  {
    path: "/reyting/qs",
    name: "qs",
    component: () => import("@/pages/reyting/Qs.vue"),
  },
];
