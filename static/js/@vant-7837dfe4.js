import"./vue-ddd8973d.js";import{i as n,o as e,c as t,r as i,g as a,a as s,b as o,w as r,d,n as u,e as c,u as l}from"./@vue-87d63935.js";var v,w,f="undefined"!=typeof window;function p(s){const o=n(s,null);if(o){const n=a(),{link:i,unlink:s,internalChildren:r}=o;i(n),e((()=>s(n)));return{parent:o,index:t((()=>r.indexOf(n)))}}return{parent:null,index:i(-1)}}function g(n){let e;d((()=>{n(),u((()=>{e=!0}))})),c((()=>{e&&n()}))}function m(n,t,i={}){if(!f)return;const{target:a=window,passive:d=!1,capture:u=!1}=i;let c;const v=e=>{const i=l(e);i&&!c&&(i.addEventListener(n,t,{capture:u,passive:d}),c=!0)},w=e=>{const i=l(e);i&&c&&(i.removeEventListener(n,t,u),c=!1)};e((()=>w(a))),s((()=>w(a))),g((()=>v(a))),o(a)&&r(a,((n,e)=>{w(e),v(n)}))}function h(){if(!v&&(v=i(0),w=i(0),f)){const n=()=>{v.value=window.innerWidth,w.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:v,height:w}}var L=/scroll|auto/i,x=f?window:void 0;function y(n){return"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType}function E(n,e=x){let t=n;for(;t&&t!==e&&y(t);){const{overflowY:n}=window.getComputedStyle(t);if(L.test(n))return t;t=t.parentNode}return e}var b=Symbol("van-field");export{b as C,m as a,p as b,E as g,g as o,h as u};
