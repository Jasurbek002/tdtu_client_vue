export default [
    {
        path: "/science",
        name: "science",
        component: () => import("@/pages/science/science.vue"),
      },
      {
        path: "/science/tech",
        name: "tech",
        component: () => import("@/pages/science/Technic.vue"),
      },
      {
        path: "/science/projects",
        name: "project",
        component: () => import("@/pages/science/Projects.vue"),
      },
      {
        path: "/science/laboratory",
        name: "laboratory",
        component: () => import("@/pages/science/Loboratoiya.vue"),
      },
      {
        path: "/science/objects",
        name: "objects",
        component: () => import("@/pages/science/Objects.vue"),
      },
]