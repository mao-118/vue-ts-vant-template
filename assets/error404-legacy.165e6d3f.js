!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,a=[],l=!0,o=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(c){o=!0,i=c}finally{try{l||null==n.return||n.return()}finally{if(o)throw i}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=document.createElement("style");n.innerHTML=":root{--van-empty-padding: var(--van-padding-xl) 0;--van-empty-image-size: 42.666667vw;--van-empty-description-margin-top: var(--van-padding-md);--van-empty-description-padding: 0 16vw;--van-empty-description-color: var(--van-text-color-2);--van-empty-description-font-size: var(--van-font-size-md);--van-empty-description-line-height: var(--van-line-height-md);--van-empty-bottom-margin-top: 6.4vw}.van-empty{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;box-sizing:border-box;padding:var(--van-empty-padding)}.van-empty__image{width:var(--van-empty-image-size);height:var(--van-empty-image-size)}.van-empty__image img{width:100%;height:100%}.van-empty__description{margin-top:var(--van-empty-description-margin-top);padding:var(--van-empty-description-padding);color:var(--van-empty-description-color);font-size:var(--van-empty-description-font-size);line-height:var(--van-empty-description-line-height)}.van-empty__bottom{margin-top:var(--van-empty-bottom-margin-top)}.content-404[data-v-951b6402]{width:100%;height:100vh}.content-404 .tip[data-v-951b6402]{font-size:6.4vw;font-weight:bolder;line-height:4em}\n",document.head.appendChild(n),System.register(["./index-legacy.9c0a16db.js"],(function(e){"use strict";var n,r,i,a,l,o,c,d,u,s,f,p,h;return{setters:[function(t){n=t.c,r=t.a,i=t.m,a=t.d,l=t.g,o=t.w,c=t._,d=t.o,u=t.b,s=t.e,f=t.p,p=t.f,h=t.h}],execute:function(){var v=function(t){return"van-empty-".concat(t)},m=function(t){return"url(#".concat(v(t),")")},y=function(t,e,r){return n("stop",{"stop-color":t,offset:"".concat(e,"%"),"stop-opacity":r},null)},g=function(t,e){return[y(t,0),y(e,100)]},x=function(t){return[n("defs",null,[n("radialGradient",{id:v(t),cx:"50%",cy:"54%",fx:"50%",fy:"54%",r:"297%",gradientTransform:"matrix(-.16 0 0 -.33 .58 .72)"},[y("#EBEDF0",0),y("#F2F3F5",100,.3)])]),n("ellipse",{fill:m(t),opacity:".8",cx:"80",cy:"140",rx:"46",ry:"8"},null)]},F=function(){return[n("defs",null,[n("linearGradient",{id:v("a"),x1:"64%",y1:"100%",x2:"64%"},[y("#FFF",0,.5),y("#F2F3F5",100)])]),n("g",{opacity:".8"},[n("path",{d:"M36 131V53H16v20H2v58h34z",fill:m("a")},null),n("path",{d:"M123 15h22v14h9v77h-31V15z",fill:m("a")},null)])]},w=function(){return[n("defs",null,[n("linearGradient",{id:v("b"),x1:"64%",y1:"97%",x2:"64%",y2:"0%"},[y("#F2F3F5",0,.3),y("#F2F3F5",100)])]),n("g",{opacity:".8"},[n("path",{d:"M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",fill:m("b")},null),n("path",{d:"M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",fill:m("b")},null)])]},b=t(r("empty"),2),E=b[0],D=b[1],k={error:function(){return n("svg",{viewBox:"0 0 160 160"},[n("defs",null,[n("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:v(8)},[g("#EAEDF1","#DCDEE0")])]),F(),w(),x("c"),n("path",{d:"m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",fill:m(8)},null)])},search:function(){return n("svg",{viewBox:"0 0 160 160"},[n("defs",null,[n("linearGradient",{x1:"50%",y1:"100%",x2:"50%",id:v(9)},[g("#EEE","#D8D8D8")]),n("linearGradient",{x1:"100%",y1:"50%",y2:"50%",id:v(10)},[g("#F2F3F5","#DCDEE0")]),n("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:v(11)},[g("#F2F3F5","#DCDEE0")]),n("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:v(12)},[g("#FFF","#F7F8FA")])]),F(),w(),x("d"),n("g",{transform:"rotate(-45 113 -4)",fill:"none"},[n("rect",{fill:m(9),x:"24",y:"52.8",width:"5.8",height:"19",rx:"1"},null),n("rect",{fill:m(10),x:"22.1",y:"67.3",width:"9.9",height:"28",rx:"1"},null),n("circle",{stroke:m(11),"stroke-width":"8",cx:"27",cy:"27",r:"27"},null),n("circle",{fill:m(12),cx:"27",cy:"27",r:"16"},null),n("path",{d:"M37 7c-8 0-15 5-16 12",stroke:m(11),"stroke-width":"3",opacity:".5","stroke-linecap":"round",transform:"rotate(45 29 13)"},null)])])},network:function(){return n("svg",{viewBox:"0 0 160 160"},[n("defs",null,[n("linearGradient",{id:v(1),x1:"64%",y1:"100%",x2:"64%"},[y("#FFF",0,.5),y("#F2F3F5",100)]),n("linearGradient",{id:v(2),x1:"50%",x2:"50%",y2:"84%"},[y("#EBEDF0",0),y("#DCDEE0",100,0)]),n("linearGradient",{id:v(3),x1:"100%",x2:"100%",y2:"100%"},[g("#EAEDF0","#DCDEE0")]),n("radialGradient",{id:v(4),cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[y("#EBEDF0",0),y("#FFF",100,0)])]),n("g",{fill:"none"},[F(),n("path",{fill:m(4),d:"M0 139h160v21H0z"},null),n("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:m(2)},null),n("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[n("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:m(3)},null),n("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:m(3)},null),n("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:m(3)},null),n("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:m(3)},null)]),n("g",{transform:"translate(31 105)"},[n("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),n("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),n("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])])},default:function(){return n("svg",{viewBox:"0 0 160 160"},[n("defs",null,[n("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:v(5)},[g("#F2F3F5","#DCDEE0")]),n("linearGradient",{x1:"95%",y1:"48%",x2:"5.5%",y2:"51%",id:v(6)},[g("#EAEDF1","#DCDEE0")]),n("linearGradient",{y1:"45%",x2:"100%",y2:"54%",id:v(7)},[g("#EAEDF1","#DCDEE0")])]),F(),w(),n("g",{transform:"translate(36 50)",fill:"none"},[n("g",{transform:"translate(8)"},[n("rect",{fill:"#EBEDF0",opacity:".6",x:"38",y:"13",width:"36",height:"53",rx:"2"},null),n("rect",{fill:m(5),width:"64",height:"66",rx:"2"},null),n("rect",{fill:"#FFF",x:"6",y:"6",width:"52",height:"55",rx:"1"},null),n("g",{transform:"translate(15 17)",fill:m(6)},[n("rect",{width:"34",height:"6",rx:"1"},null),n("path",{d:"M0 14h34v6H0z"},null),n("rect",{y:"28",width:"34",height:"6",rx:"1"},null)])]),n("rect",{fill:m(7),y:"61",width:"88",height:"28",rx:"1"},null),n("rect",{fill:"#F7F8FA",x:"29",y:"72",width:"30",height:"6",rx:"1"},null)])])}},z={image:i("default"),imageSize:[Number,String,Array],description:String},G=a({name:E,props:z,setup:function(t,e){var r=e.slots,i=function(){var e=r.description?r.description():t.description;if(e)return n("p",{class:D("description")},[e])},a=function(){if(r.default)return n("div",{class:D("bottom")},[r.default()])};return function(){return n("div",{class:D()},[n("div",{class:D("image"),style:l(t.imageSize)},[r.image?r.image():(null==(e=k[t.image])?void 0:e.call(k))||n("img",{src:t.image},null)]),i(),a()]);var e}}}),M=o(G),_={},A={class:"content-404"},B=function(t){return f("data-v-951b6402"),t=t(),p(),t}((function(){return h("div",{class:"tip"},"404 Not Found",-1)}));e("default",c(_,[["render",function(t,e){var r=M;return d(),u("div",A,[n(r,{image:"error",description:"没有找到该页面！！！"},{default:s((function(){return[B]})),_:1})])}],["__scopeId","data-v-951b6402"],["__file","/home/runner/work/vue-ts-vant-template/vue-ts-vant-template/src/views/error404/error404.vue"]]))}}}))}();
