!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var a,r,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(i.push(a.value),!e||i.length!==e);o=!0);}catch(v){l=!0,r=v}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var a=document.createElement("style");a.innerHTML=":root{--van-nav-bar-height: 12.266667vw;--van-nav-bar-background-color: var(--van-background-color-light);--van-nav-bar-arrow-size: 4.266667vw;--van-nav-bar-icon-color: var(--van-primary-color);--van-nav-bar-text-color: var(--van-primary-color);--van-nav-bar-title-font-size: var(--van-font-size-lg);--van-nav-bar-title-text-color: var(--van-text-color);--van-nav-bar-z-index: 1}.van-nav-bar{position:relative;z-index:var(--van-nav-bar-z-index);line-height:var(--van-line-height-lg);text-align:center;background:var(--van-nav-bar-background-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar--safe-area-inset-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.van-nav-bar .van-icon{color:var(--van-nav-bar-icon-color)}.van-nav-bar__content{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:var(--van-nav-bar-height)}.van-nav-bar__arrow{margin-right:var(--van-padding-base);font-size:var(--van-nav-bar-arrow-size)}.van-nav-bar__title{max-width:60%;margin:0 auto;color:var(--van-nav-bar-title-text-color);font-weight:var(--van-font-weight-bold);font-size:var(--van-nav-bar-title-font-size)}.van-nav-bar__left,.van-nav-bar__right{position:absolute;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 var(--van-padding-md);font-size:var(--van-font-size-md)}.van-nav-bar__left{left:0}.van-nav-bar__right{right:0}.van-nav-bar__text{color:var(--van-nav-bar-text-color)}.nav-bar[data-v-4d808a77]{height:12.266667vw;line-height:12.266667vw}[data-v-4d808a77] .van-nav-bar__title,[data-v-4d808a77] .van-nav-bar__left i{color:#252525}[data-v-4d808a77] .van-nav-bar__left i,[data-v-4d808a77] .van-nav-bar__right i{font-size:5.866667vw}[data-v-4d808a77] .van-nav-bar__right i{color:#383838}.textColor[data-v-20207095]{color:var(--20207095-color)}\n",document.head.appendChild(a),System.register(["./index-legacy.553657d2.js","./index-legacy.1fd01355.js"],(function(n){"use strict";var a,r,i,o,l,v,u,c,s,f,d,p,b,g,h,m,x,_,w,y,k,T,z,S,C,A,I,j,V,B,L,H,E,O,R;return{setters:[function(t){a=t.r,r=t.E,i=t.C,o=t.ac,l=t.c,v=t.a,u=t.d,c=t.j,s=t.t,f=t.ad,d=t.w,p=t.o,b=t.ae,g=t.e,h=t.af,m=t.ag,x=t.ah,_=t.Y,w=t.ai,y=t._,k=t.aj,T=t.b,z=t.h,S=t.H,C=t.Z,A=t.p,I=t.f},function(t){j=t.H,V=t.a,B=t.I,L=t.F,H=t.C,E=t.b,O=t.g,R=t.B}],execute:function(){function U(t,e){var n=function(t){var e=a(),n=function(){e.value=o(t).height};return r((function(){i(n),setTimeout(n,100)})),e}(t);return function(t){return l("div",{class:e("placeholder"),style:{height:n.value?"".concat(n.value,"px"):void 0}},[t()])}}var M=e(v("nav-bar"),2),N=M[0],$=M[1],F={title:String,fixed:Boolean,zIndex:c,border:s,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},P=u({name:N,props:F,emits:["click-left","click-right"],setup:function(e,n){var r=n.emit,i=n.slots,o=a(),v=U(o,$),u=function(t){return r("click-left",t)},c=function(t){return r("click-right",t)},s=function(){var n,a=e.title,r=e.fixed,v=e.border,s=e.zIndex,d=f(s),p=e.leftArrow||e.leftText||i.left,b=e.rightText||i.right;return l("div",{ref:o,style:d,class:[$({fixed:r}),(n={},t(n,V,v),t(n,"van-safe-area-top",e.safeAreaInsetTop),n)]},[l("div",{class:$("content")},[p&&l("div",{class:[$("left"),j],onClick:u},[i.left?i.left():[e.leftArrow&&l(B,{class:$("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:$("text")},[e.leftText])]]),l("div",{class:[$("title"),"van-ellipsis"]},[i.title?i.title():a]),b&&l("div",{class:[$("right"),j],onClick:c},[i.right?i.right():l("span",{class:$("text")},[e.rightText])])])])};return function(){return e.fixed&&e.placeholder?v(s):s()}}}),Y=d(P),Z=u({__name:"Navbar",props:{title:{type:String,default:function(){return document.title}},showLeft:{type:Boolean,default:!0},leftText:{type:String,default:""}},emits:["clickLeft","clickRight"],setup:function(t,e){var n=e.emit,a=function(){n("clickLeft")},r=function(){n("clickRight")};return function(e,n){var i=Y;return p(),b(i,{title:t.title,"left-arrow":t.showLeft,"left-text":t.leftText,border:!1,class:"nav-bar",style:x({paddingTop:"".concat(_(w),"px")}),onClickLeft:a,onClickRight:r},{right:g((function(){return[h(" 右侧插槽 "),m(e.$slots,"right",{},void 0,!0)]})),_:3},8,["title","left-arrow","left-text","style"])}}}),q=y(Z,[["__scopeId","data-v-4d808a77"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/components/Navbar.vue"]]),D=y(u({__name:"ChangeValue",emits:["updateText"],setup:function(t,e){var n=e.emit,r=a(""),i=function(t){n("updateText",t)};return function(t,e){var n=L,a=H;return p(),b(a,{inset:""},{default:g((function(){return[l(n,{modelValue:r.value,"onUpdate:modelValue":[e[0]||(e[0]=function(t){return r.value=t}),i],label:"改变父组件值",placeholder:"请输入改变父组件值"},null,8,["modelValue"])]})),_:1})}}}),[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ChangeValue.vue"]]),G=y(u({__name:"ShowValue",props:{text:{type:String,default:""}},setup:function(t){return function(e,n){var a=E;return p(),b(a,{title:"父传子",value:t.text},null,8,["value"])}}}),[["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/components/ShowValue.vue"]]),J=function(t){return A("data-v-20207095"),t=t(),I(),t},K=C("change color"),Q=J((function(){return z("div",{class:"textColor"},"text",-1)}));n("default",y(u({__name:"index",setup:function(t){k((function(t){return{"20207095-color":i.value}}));var e=O("topHeight");w.value=parseInt(e);var n=a("test"),r=function(t){n.value=t},i=a("red"),o=function(){i.value="red"===i.value?"green":"red"};return function(t,e){var a=R;return p(),T(S,null,[l(q),z("div",null,[l(G,{text:n.value},null,8,["text"]),l(D,{onUpdateText:r}),l(a,{type:"primary",onClick:o},{default:g((function(){return[K]})),_:1}),Q])],64)}}}),[["__scopeId","data-v-20207095"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/test/index.vue"]]))}}}))}();
