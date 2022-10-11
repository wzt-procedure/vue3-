import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from "./router";
const app = createApp(App);
// 挂载路由
setupRouter(app);
// 路由准备就绪后挂载APP实例
router.isReady();
 // 挂载到页面
 app.mount('#app', true);

 // 挂载到 window
 (window as any)['$vue'] = app
