export default [
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/demo/index.vue')
    }, {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue')
    }
];