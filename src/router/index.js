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
          name: "recordings",
          component: () => import("../views/Recording.vue"),
        },
        {
          path: "/recorder",
          name: "recorder",
          component: () => import("../views/Recorder.vue"),
        },
      ],
    },
    {
      path: "/live-recording",
      name: "live-recording",
      component: () => import("../views/LiveRecording.vue"),
      props: true,
    },
  ],
});

export default router;
