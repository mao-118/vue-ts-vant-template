import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import PostcssPxToViewport from 'postcss-px-to-viewport' // 自适应
import Components from 'unplugin-vue-components/vite'
import compressPlugin from 'vite-plugin-compression'
import { VantResolver } from 'unplugin-vue-components/resolvers' // vant自动导入
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // setup支持name
import AutoImport from 'unplugin-auto-import/vite' // 自动导入组合api
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    compressPlugin({
      // gzip静态资源压缩
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小 10K
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
    AutoImport({
      // https://github.com/antfu/unplugin-auto-import
      dts: true,
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
    }),
    vueSetupExtend(),
    Components({
      // https://github.com/antfu/unplugin-vue-components
      resolvers: [VantResolver()],
    }),
    // 解决较老手机浏览器白屏的问题
    // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  build: {
    minify: 'terser',
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          // 静态资源分拆打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    /** 清除console和debugger */
    terserOptions: {
      compress: {
        drop_console: false, // 不清除console
        drop_debugger: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            // 'last 2 versions', // 所有主流浏览器最近2个版本
          ],
        }),
        tailwindcss({
          content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
          theme: {
            extend: {},
          },
          plugins: [],
        }),
        PostcssPxToViewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: [], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ],
    },
  },
})
