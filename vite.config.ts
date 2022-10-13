import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// 8月更新-自动导入ElementPlus组件，除了图标需要单独引用外，其他的都可以直接在页面上使用组件，会自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  // 8月更新
  //   productionSourceMap: !isProduction, //关闭生产环境下的SourceMap映射文件

  // 8月更新-自动导入ElementPlus
  // 需安装 npm install -D unplugin-vue-components unplugin-auto-import
  plugins: [
    vue(), //注册插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
  // 8月更新，全局引入less
  css: {
    // sourceMap: !isProduction, // css sourceMap 配置
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            "src/assets/index.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: "dist",
    // 9月更新
    assetsDir: "assets", //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    minify: "terser",
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    cors: true, // 允许跨域  8月更新
    port: 3000, // 端口号
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
});
