export default {
  path: '/test',
  redirect: '/test/aa',
  meta: {
    icon: 'ri:information-line',
    // showLink: false,
    title: 'test',
    rank: 19
  },
  children: [
    {
      path: '/test/aa',
      name: 'Test',
      component: () => import('@/views/test/index.vue'),
      meta: {
        title: 'Test'
      }
    }
  ]
} satisfies RouteConfigsTable;
