import{r as f,E as y,C as V,ac as F,c as l,a as I,d,k as N,t as H,ad as R,w as E,X as x,o as v,ae as m,e as C,af as A,ag as L,ah as P,Y as $,_,b as D,h as z,H as O}from"./index.88af75ae.js";import{H as g,b as M,I as U,F as G,C as K,c as X,g as Y}from"./index.22c7af95.js";const Z=e=>{const a=f(),t=()=>{a.value=F(e).height};return y(()=>{V(t),setTimeout(t,100)}),a};function j(e,a){const t=Z(e);return n=>l("div",{class:a("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[n()])}const[q,r]=I("nav-bar"),J={title:String,fixed:Boolean,zIndex:N,border:H,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var Q=d({name:q,props:J,emits:["click-left","click-right"],setup(e,{emit:a,slots:t}){const n=f(),o=j(n,r),s=i=>a("click-left",i),c=i=>a("click-right",i),u=()=>t.left?t.left():[e.leftArrow&&l(U,{class:r("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:r("text")},[e.leftText])],h=()=>t.right?t.right():l("span",{class:r("text")},[e.rightText]),p=()=>{const{title:i,fixed:k,border:w,zIndex:T}=e,B=R(T),b=e.leftArrow||e.leftText||t.left,S=e.rightText||t.right;return l("div",{ref:n,style:B,class:[r({fixed:k}),{[M]:w,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:r("content")},[b&&l("div",{class:[r("left"),g],onClick:s},[u()]),l("div",{class:[r("title"),"van-ellipsis"]},[t.title?t.title():i]),S&&l("div",{class:[r("right"),g],onClick:c},[h()])])])};return()=>e.fixed&&e.placeholder?o(p):p()}});const W=E(Q);const ee=d({__name:"Navbar",props:{title:{type:String,default:()=>document.title},showLeft:{type:Boolean,default:!0},leftText:{type:String,default:""}},emits:["clickLeft","clickRight"],setup(e,{emit:a}){const t=()=>{a("clickLeft")},n=()=>{a("clickRight")},o=x();return(s,c)=>{const u=W;return v(),m(u,{title:e.title,"left-arrow":e.showLeft,"left-text":e.leftText,onClickLeft:t,onClickRight:n,border:!1,class:"nav-bar",style:P({paddingTop:`${$(o).topHeight}px`})},{right:C(()=>[A(" \u53F3\u4FA7\u63D2\u69FD "),L(s.$slots,"right",{},void 0,!0)]),_:3},8,["title","left-arrow","left-text","style"])}}});const te=_(ee,[["__scopeId","data-v-4d808a77"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/components/Navbar.vue"]]),ae=d({__name:"ChangeValue",emits:["updateText"],setup(e,{emit:a}){const t=f(""),n=o=>{a("updateText",o)};return(o,s)=>{const c=G,u=K;return v(),m(u,{inset:""},{default:C(()=>[l(c,{modelValue:t.value,"onUpdate:modelValue":[s[0]||(s[0]=h=>t.value=h),n],label:"\u6539\u53D8\u7236\u7EC4\u4EF6\u503C",placeholder:"\u8BF7\u8F93\u5165\u6539\u53D8\u7236\u7EC4\u4EF6\u503C"},null,8,["modelValue"])]),_:1})}}}),ne=_(ae,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ChangeValue.vue"]]),le=d({__name:"ShowValue",props:{text:{type:String,default:""}},setup(e){return(a,t)=>{const n=X;return v(),m(n,{title:"\u7236\u4F20\u5B50",value:e.text},null,8,["value"])}}}),se=_(le,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ShowValue.vue"]]),re=d({__name:"index",setup(e){const a=Y("topHeight");x().setTopHeight(parseInt(a));const n=f("test"),o=s=>{n.value=s};return(s,c)=>(v(),D(O,null,[l(te),z("div",null,[l(se,{text:n.value},null,8,["text"]),l(ne,{onUpdateText:o})])],64))}}),ue=_(re,[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/index.vue"]]);export{ue as default};
