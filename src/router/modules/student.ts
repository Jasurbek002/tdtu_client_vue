export default [
    {
        path: "/students",
        name: "students",
        component: () => import("@/pages/students/students.vue"),
      },
      {
        path: "/students/finances",
        name: "finances",
        component: () => import("../../pages/students/Finances.vue"),
      },
      {
        path: "/students/courses",
        name: "courses",
        component: () => import("../../pages/students/Courses.vue"),
      },
      {
        path: "/students/olympics",
        name: "olympics",
        component: () => import("../../pages/students/Olimp.vue"),
      },
]