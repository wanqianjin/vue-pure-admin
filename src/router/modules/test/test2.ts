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
      name: 'Aa',
      component: () => import('@/views//test/aa.vue'),
      meta: {
        title: 'aa'
      }
    }
  ]
} satisfies RouteConfigsTable;
