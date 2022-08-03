# Vue 3 + TypeScript + Vite

该模板将帮助您开始在Vite中使用Vue 3和TypeScript进行开发。


```bash
# 克隆项目
git clone https://github.com/mao-118/vue-ts-vant-template.git

#安装依赖
npm install

# 启动项目
npm run dev

# 部署项目(根据环境打包)
npm run build:deve
```


## 推荐配置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## vant引入

这里采用 `vant` 的按需引入,通过 `unplugin-vue-components` 插件实现，直接在文件中使用组件即可生效。

**注意：** 按需引入不包括个别函数形式提供的组件，如：`Toast`、`Dialog`、`Notify` 和 `ImagePreview`，无法引入对应的样式，需手动引入

解决方案：`@/plugins/vant.ts` 中引入对应的函数形式组件样式，在 `main.ts` 中导入他们

## Viewport 布局

项目默认使用 `px` 作为样式单位，通过 `postcss-px-to-viewport` 进行转换以实现响应式布局。

具体配置可以查看根目录下的 `vite.config.ts` 中的 `postcss` 配置节点

## 路由

路由文件统一放在 `@/router/modules` 中，在 `@/router/index.ts` 中采用一键导入的形式注入路由，所以只关心路由的创建即可。

