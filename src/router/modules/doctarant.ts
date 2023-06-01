export default [
    {
        path: "/doctarant",
        name: "doctarant",
        component: () => import("@/pages/doctarant/page.vue"),
      },
      {
        path: "/doctarant/independent",
        name: "independent",
        component: () => import("@/pages/doctarant/independent.vue"),
      },
      {
        path: "/doctarant/intern",
        name: "intern",
        component: () => import("@/pages/doctarant/intern.vue"),
      },
      {
        path: "/doctarant/support",
        name: "support",
        component: () => import("@/pages/doctarant/support.vue"),
      },
      {
        path: "/doctarant/ds",
        name: "ds",
        component: () => import("@/pages/doctarant/ds.vue"),
      },
];
