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
  {
    path: "/reyting/the",
    name: "the",
    component: () => import("@/pages/reyting/The.vue"),
  },
  {
    path: "/reyting/green",
    name: "green",
    component: () => import("@/pages/reyting/Greenmetric.vue"),
  },
];
