/**
 * createRouter  创建一个可以被 Vue 应用程序使用的路由实例
 * createWebHashHistory  创建一个 hash 历史记录 注意：如果 SEO 对你很重要，你应该使用 createWebHistory
 * RouteRecordRaw  路由使用ts类型的约束
 */
import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("../view/login.vue"),
    meta: {
      title: "Login",
    },
  },
];

export const constantRouter: any[] = [...RootRoute];

const router = createRouter({
  history: createWebHashHistory(""),
  routes: constantRouter,
  strict: true,
});

export function setupRouter(app: App) {
  app.use(router);
}
export default router;
