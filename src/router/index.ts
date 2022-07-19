import { createRouter, Router, createWebHashHistory } from "vue-router";
import routes from "./modules/demo";
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [routes],
});

router.beforeResolve((to, form, next) => {
  // document.title = to.meta.title || "默认标题";
  next();
});

router.afterEach((to, form, next) => {});

export default router;
