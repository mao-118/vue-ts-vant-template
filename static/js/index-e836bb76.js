function e(){import("data:text/javascript,")}import"./vue-acd33c84.js";import{C as t,D as r,E as o,G as n,H as s,t as i}from"./@vue-02ad00f6.js";import{c,a}from"./vue-router-a1fcee8b.js";import"./vant-4f46f214.js";import"./@vant-0b58e78f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const l=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};const u=l({},[["render",function(e,i){const c=t("router-view");return r(),o(c,null,{default:n((({Component:e})=>[(r(),o(s(e)))])),_:1})}],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/App.vue"]]),d={},m=function(e,t,r){return t&&0!==t.length?Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,r),e in d)return;d[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((t,r)=>{n.addEventListener("load",t),n.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},p=[{path:"/",name:"homepage",component:()=>m((()=>import("./index-e731d942.js")),["index-e731d942.js","../css/index-aecfb57c.css","vant-4f46f214.js","../css/vant-7c9c0706.css","vue-acd33c84.js","@vue-02ad00f6.js","@vant-0b58e78f.js","axios-805d1980.js","nprogress-321ae034.js","../css/nprogress-6e86db3e.css","lodash-6f98ed4c.js","vue-router-a1fcee8b.js"],import.meta.url)}];const f=function(){const e=Object.assign({"./modules/routes.ts":p});return Object.keys(e).reduce(((t,r)=>t=t.concat(e[r])),[])}(),h=c({history:a(),scrollBehavior:()=>({top:0}),routes:[...f,{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>m((()=>import("./error404-b3d1b738.js")),["error404-b3d1b738.js","../css/error404-c98f7813.css","vue-acd33c84.js","@vue-02ad00f6.js","vant-4f46f214.js","../css/vant-7c9c0706.css","@vant-0b58e78f.js","vue-router-a1fcee8b.js"],import.meta.url),meta:{title:"404"}}]});h.beforeResolve(((e,t,r)=>{console.log({form:t}),document.title=e.meta.title||"默认标题",r()})),h.afterEach((e=>{console.log({to:e})}));i(u).use(h).mount("#app");export{l as _,e as __vite_legacy_guard};
