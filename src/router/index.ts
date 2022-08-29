import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './installRoute';

const router = createRouter({
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
  document.title = (to.meta.title as string) || '默认标题';
  next();
});

router.afterEach((to, form, next) => {
  console.log(to);
});

export default router;
