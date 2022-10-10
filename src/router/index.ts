import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const RootRoute: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Root',
      redirect: PageEnum.BASE_HOME,
      component: Layout,
      meta: {
        title: 'Root',
      },
      children: [
        ...HttpErrorPage,
        modules.projectRoutes,
        modules.chartRoutes,
        modules.previewRoutes
      ]
    }
  ]

  export const constantRouter: any[] = [LoginRoute, ...RootRoute, RedirectRoute, ReloadRoute];

const router = createRouter({
    history: createWebHashHistory(''),
    routes: constantRouter,
    strict: true,
});
