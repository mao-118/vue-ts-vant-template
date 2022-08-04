import { createRouter, Router, createWebHashHistory } from 'vue-router';
import { routes } from './installRoute';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
router.beforeResolve((to, form, next) => {
  document.title = <string>to.meta.title || '默认标题';
  next();
});

router.afterEach((to, form, next) => {
  console.log(to);
});

export default router;
