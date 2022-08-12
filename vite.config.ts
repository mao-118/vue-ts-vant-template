import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import PostcssPxToViewport from 'postcss-px-to-viewport'; //自适应
import Components from 'unplugin-vue-components/vite';//vant自动导入
import { VantResolver } from 'unplugin-vue-components/resolvers'; //vant自动导入
import vueSetupExtend from 'vite-plugin-vue-setup-extend'; //setup支持name
import AutoImport from 'unplugin-auto-import/vite'; //自动导入组合api
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    AutoImport({ //https://github.com/antfu/unplugin-auto-import
      dts: true,
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      }
    }),
    vueSetupExtend(),
    Components({ //https://github.com/antfu/unplugin-vue-components
      resolvers: [VantResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
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
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  }
});
