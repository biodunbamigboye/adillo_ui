import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/recordings",
      children: [
        {
          path: "/recordings",
          name: "Recordings",
          component: () => import("../views/Recording.vue"),
        },
        {
          path: "/recorder",
          name: "recorder",
          component: () => import("../views/Recorder.vue"),
        },
      ],
    },
  ],
});

export default router;
