import"./vue-acd33c84.js";import{i as n,o as e,c as t,r as a,g as i,a as s,b as o,w as r,d,n as u,e as c,u as l}from"./@vue-02ad00f6.js";var v,w,f="undefined"!=typeof window;function p(s){const o=n(s,null);if(o){const n=i(),{link:a,unlink:s,internalChildren:r}=o;a(n),e((()=>s(n)));return{parent:o,index:t((()=>r.indexOf(n)))}}return{parent:null,index:a(-1)}}function g(n){let e;d((()=>{n(),u((()=>{e=!0}))})),c((()=>{e&&n()}))}function m(n,t,a={}){if(!f)return;const{target:i=window,passive:d=!1,capture:u=!1}=a;let c;const v=e=>{const a=l(e);a&&!c&&(a.addEventListener(n,t,{capture:u,passive:d}),c=!0)},w=e=>{const a=l(e);a&&c&&(a.removeEventListener(n,t,u),c=!1)};e((()=>w(i))),s((()=>w(i))),g((()=>v(i))),o(i)&&r(i,((n,e)=>{w(e),v(n)}))}function h(){if(!v&&(v=a(0),w=a(0),f)){const n=()=>{v.value=window.innerWidth,w.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:v,height:w}}var L=/scroll|auto/i,x=f?window:void 0;function y(n){return"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType}function E(n,e=x){let t=n;for(;t&&t!==e&&y(t);){const{overflowY:n}=window.getComputedStyle(t);if(L.test(n))return t;t=t.parentNode}return e}var b=Symbol("van-field");export{b as C,m as a,p as b,E as g,g as o,h as u};
