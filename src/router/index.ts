import { createRouter, createWebHistory } from "vue-router";
import HomeRouter from "./modules/home";
import DoctarantRouter from "./modules/doctarant";
import ScienceRouter from "./modules/science";
import StudentRouter from "./modules/student";
import ReytingRouter from "./modules/reyting";
import ShoppingRouter from "./modules/shopping";
import NewspaperRouter from "./modules/newspaper";
import Brm from "./modules/brm";
import InnoRouter from "./modules/inno";
import VideoRouter from "./modules/video"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...HomeRouter,
    ...DoctarantRouter,
    ...ScienceRouter,
    ...StudentRouter,
    ...ReytingRouter,
    ...ShoppingRouter,
    ...NewspaperRouter,
    ...Brm,
    ...InnoRouter,
    ...VideoRouter
  ],
});

export default router;




