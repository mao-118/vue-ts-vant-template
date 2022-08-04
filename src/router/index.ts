import { createRouter, Router, createWebHashHistory } from 'vue-router';
import { routes } from './installRoute';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error404/error404.vue'),
      meta: { title: '404' }
    }
  ]
});
router.beforeResolve((to, form, next) => {
  document.title = <string>to.meta.title || '默认标题';
  next();
});

router.afterEach((to, form, next) => {
  console.log(to);
});

export default router;
