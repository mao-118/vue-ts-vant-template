import{N as e,T as a}from"./vant-8fbafc0e.js";import{r as t,h as s,B as l,C as i,D as n,K as o,L as r,M as p,u as v,b as c,G as u,f as d,J as f,N as m,q as A,v as g,H as y,I as q}from"./@vue-d6093895.js";import{_ as b}from"./index-5029f18b.js";import"./@vant-df958203.js";import"./vue-router-d4a5e816.js";import"./vconsole-339d9e70.js";const h=t(0),j=b(s({__name:"Navbar",props:{title:{type:String,default:()=>document.title},showLeft:{type:Boolean,default:!0},leftText:{type:String,default:""}},emits:["clickLeft","clickRight"],setup(a,{emit:t}){const s=()=>{t("clickLeft")},c=()=>{t("clickRight")};return(t,u)=>{const d=e;return l(),i(d,{title:a.title,"left-arrow":a.showLeft,"left-text":a.leftText,border:!1,class:"nav-bar",style:p({paddingTop:`${v(h)}px`,backgroundColor:"transparent"}),onClickLeft:s,onClickRight:c},{right:n((()=>[o(" 右侧插槽 "),r(t.$slots,"right",{},void 0,!0)])),_:3},8,["title","left-arrow","left-text","style"])}}}),[["__scopeId","data-v-4d808a77"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/components/Navbar.vue"]]),w=""+new URL("../png/play-2b8c8bab.png",import.meta.url).href,x=""+new URL("../mp4/play-a5dc4a9c.mp4",import.meta.url).href,R=""+new URL("../png/nie-0ee872fe.png",import.meta.url).href,k=""+new URL("../png/gift-a6febb9c.png",import.meta.url).href,B=e=>(y("data-v-c5f4ee70"),e=e(),q(),e),C={class:"container"},U={class:"play-box"},z={class:"play"},L={class:"add-box"},M=B((()=>f("img",{src:w,class:"play-img"},null,-1))),P=B((()=>f("img",{src:k,alt:"",class:"gift"},null,-1))),S=b(s({__name:"index",setup(e){const s=()=>{a("返回")},i=t(!1),n=t(),o=t(999);c((()=>{n.value.onended=r}));const r=()=>{a.success("恭喜获得小丑卡*10"),i.value=!1,n.value.load()},p=()=>{i.value||(i.value=!0,o.value--,n.value.play())},y=()=>{a.fail("余额不足")};return(e,a)=>{const t=j;return l(),u("div",C,[d(t,{title:"愚人节活动",onClickLeft:s}),f("div",U,[f("div",z,[f("div",L,[f("span",null,m(v(o)),1),f("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAe1BMVEUAAACqavqqavqqavqqafutbPyqafqqafmoZ/mpaPikbv+qavuqavupavqqavqqavqqavqqavupavqpaPioaviqavmpbPisbPqqavr////UtPyyd/r9+//69//48v/q2v7n1f7jzf3OqvzJoPy/j/utcPrTs/zw5P67h/tB0mOwAAAAGHRSTlMA+tzokBb+iicjBz3x8dbHvLWac2BXRzRD+ncoAAABpklEQVRYw6SUCZKCMBBFQzYIIqtAR1lkU+9/wqmpGWYiphWKd4BXnfz+TRB8oYosjShzHEajNCuU8MkWRM5jJsFAspjnYrXA4zSQ8IIMKPfICnyPHwHlyL2P71Eug7cwV703nKgDH3DoieAI1xTgEhf91zJZGFBHUtoNhxBWEx6sBgoboAfEsMtRhrCRsFxkkcBmkudc0DSnsb/142TP9mmjMMOlaypdNd3F6jB2TFHMcNc/3K0Oqv6ahT1j6vRMN1mf4s/lxpo1NnqmGa2dm8vPAaGv9EzVgw3+OwR6H276n5v9fnjvh4CzoTgDPoagexT0e7/yYI8iyAnxudyjkNwnIoY9CogFUWyfgilSyH0KWZDspRdDW2ucuh2e+5KRdGF4XPUnrg8wSEm0mMEw4A5zjogsFmvQaxjM5SKLQNpVitaMhCxORb1KUZtH46sVO6ABAISBGOjfdUVcDZAA277dcYRf5HhO/9SjtLzAjzbzZj9Gjg8+H79PCHgUeSB6LDscOKI4KDmuOTQu6OoA7RjvMuFK42LleueS6arrwu3a/y8ffAUSsdBANobF4BgAAAAASUVORK5CYII=",class:"add",onClick:y})]),A(f("video",{id:"VideoDom",ref_key:"VideoDom",ref:n,poster:w,preload:"auto","webkit-playsinline":"webkit-playsinline",playsinline:"true","x5-playsinline":"x5-playsinline","x5-video-player-type":"h5","x5-video-player-fullscreen":"x5-video-player-fullscreen",muted:"true",src:x},null,512),[[g,v(i)]]),M,f("img",{src:R,class:"nie",onClick:p})])]),P])}}}),[["__scopeId","data-v-c5f4ee70"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/homepage/index.vue"]]);export{S as default};