import{d as o,r as _,o as s,ac as p,e as d,c as l,_ as c,b as x}from"./index.39fdc216.js";import{F as f,C as h,b as C}from"./index.8c0d1186.js";const w=o({__name:"ChangeValue",emits:["updateText"],setup(a,{emit:t}){const n=_(""),e=u=>{t("updateText",u)};return(u,r)=>{const m=f,v=h;return s(),p(v,{inset:""},{default:d(()=>[l(m,{"onUpdate:modelValue":[e,r[0]||(r[0]=i=>n.value=i)],modelValue:n.value,label:"\u6539\u53D8\u7236\u7EC4\u4EF6\u503C",placeholder:"\u8BF7\u8F93\u5165\u6539\u53D8\u7236\u7EC4\u4EF6\u503C"},null,8,["modelValue"])]),_:1})}}}),V=c(w,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ChangeValue.vue"]]),F=o({__name:"ShowValue",props:{text:{type:String,default:""}},setup(a){return(t,n)=>{const e=C;return s(),p(e,{title:"\u7236\u4F20\u5B50",value:a.text},null,8,["value"])}}}),g=c(F,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ShowValue.vue"]]),k=o({__name:"index",setup(a){const t=_("test"),n=e=>{t.value=e};return(e,u)=>(s(),x("div",null,[l(g,{text:t.value},null,8,["text"]),l(V,{onUpdateText:n})]))}}),S=c(k,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/index.vue"]]);export{S as default};
