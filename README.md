## Vue 3 + TypeScript + Vite

该模板将帮助您开始在`Vite`中使用`Vue3` 和 `TypeScript`进行开发。

开始之前希望您对 `vue3` 、`vite3` 、`typescript` 、`vant` 有所了解

```bash
# 克隆项目
git clone http://tm-coderepos.tianmcloud.com/maolihang/vue-ts-vant-template.git

#安装依赖
npm install

# 启动项目
npm run dev

# 部署项目(根据环境打包)
npm run build:deve
```

## 推荐配置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 代码规范

项目中配备 `eslint` + `prettier` 语法校验以及代码修复，基于 `vue3`，我们使用 `volar` 而不是 `vetur`。

`volar` 对 `vue3` 的语法支持更友好。

代码规范遵循 [公司前端代码规范](http://frontdevstudy.tianmcloud.top/standard/javascript.html)

## vant 引入

这里采用 `vant` 的按需引入,通过 `unplugin-vue-components` 插件实现，直接在文件中使用组件即可生效。

**注意：** 按需引入不包括个别函数形式提供的组件，如：`Toast`、`Dialog`、`Notify` 和 `ImagePreview`，无法引入对应的样式，需手动引入

解决方案：`@/plugins/vant.ts` 中引入对应的函数形式组件样式，在 `main.ts` 中导入他们

## Viewport 布局

项目默认使用 `px` 作为样式单位，通过 `postcss-px-to-viewport` 进行转换以实现响应式布局。

具体配置可以查看根目录下的 `vite.config.ts` 中的 `postcss` 配置节点

## 路由

路由文件统一放在 `@/router/modules` 中，这里采用 `vite` 内置的 `glob` 批量导入的形式注入路由，
只需在 `@/router/modules` 下新建路由文件即可生效。

## lodash

项目中引入了 `lodash` 工具库，在目录 `@/utils/lodash` 中可以看到，目前提供了 `节流` 和 `防抖` 供直接使用。

## 组件

`@/components` 中的组件无需导入便可直接在页面中使用，这是 `vite` 所提供的,`@/components` 下面提供了`navbar`组件可直接使用

`setup` 语法糖中只需引入对应的组件，无需注册即可在页面中生效

```vue
<template>
  <my-component />
</template>
<script setup lang="ts">
import MyComponent from './MyComponent'
</script>
```

## 对第三方包的支持

在 [search](https://www.typescriptlang.org/dt/search) 中基本都可以找到第三方包对 ts 的声明文件

或者可以在项目下自己创建`d.ts`文件，声明对应的第三方包类型

## 全局 loading

当页面加载缓慢或网络卡顿，会出现如下加载效果：

<img src="https://gitee.com/mao-118/utools-filebed/raw/master/vue-ts-vant-template/20221109-152653-0201.gif" alt="20221109-152653-0201.gif" width="100" heigin="100" />

如需修改效果中的文字，可以在 `index.html` 中修改即可，也可以`DIY`背景及文字颜色

## 请求 loading

请求加载效果使用的是 `NProgress` 插件。

## 其他

- 配置了 gzip 压缩
- 正式环境去除 debugger
- css 浏览器前缀
- 对传统浏览器的编译支持
- vue3 组合式 api 的自动导入
- 允许 setup 语法糖上面添加 name 属性
