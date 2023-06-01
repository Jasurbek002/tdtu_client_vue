export default [
    {
        path: "/shopping",
        name: "shopping",
        component: () => import("@/pages/shopping/shopping.vue"),
      },
      {
        path: "/shopping/contracts",
        name: "contracts",
        component: () => import("@/pages/shopping/Contracts.vue"),
      },
      {
        path: "/shopping/startup",
        name: "startup",
        component: () => import("@/pages/shopping/StartUp.vue"),
      },
]