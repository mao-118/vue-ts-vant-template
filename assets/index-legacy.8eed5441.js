!function(){function e(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,l,t=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(c){o=!0,l=c}finally{try{i||null==r.return||r.return()}finally{if(o)throw l}}return t}(e,n)||a(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){if(e){if("string"==typeof e)return l(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,n):void 0}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}var t=document.createElement("style");t.innerHTML=':root{--van-cell-font-size: var(--van-font-size-md);--van-cell-line-height: 6.4vw;--van-cell-vertical-padding: 2.666667vw;--van-cell-horizontal-padding: var(--van-padding-md);--van-cell-text-color: var(--van-text-color);--van-cell-background-color: var(--van-background-color-light);--van-cell-border-color: var(--van-border-color);--van-cell-active-color: var(--van-active-color);--van-cell-required-color: var(--van-danger-color);--van-cell-label-color: var(--van-text-color-2);--van-cell-label-font-size: var(--van-font-size-sm);--van-cell-label-line-height: var(--van-line-height-sm);--van-cell-label-margin-top: var(--van-padding-base);--van-cell-value-color: var(--van-text-color-2);--van-cell-icon-size: 4.266667vw;--van-cell-right-icon-color: var(--van-gray-6);--van-cell-large-vertical-padding: var(--van-padding-sm);--van-cell-large-title-font-size: var(--van-font-size-lg);--van-cell-large-label-font-size: var(--van-font-size-md)}.van-cell{position:relative;display:flex;box-sizing:border-box;width:100%;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);overflow:hidden;color:var(--van-cell-text-color);font-size:var(--van-cell-font-size);line-height:var(--van-cell-line-height);background:var(--van-cell-background-color)}.van-cell:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;right:var(--van-padding-md);bottom:0;left:var(--van-padding-md);border-bottom:1px solid var(--van-cell-border-color);transform:scaleY(.5)}.van-cell:last-child:after,.van-cell--borderless:after{display:none}.van-cell__label{margin-top:var(--van-cell-label-margin-top);color:var(--van-cell-label-color);font-size:var(--van-cell-label-font-size);line-height:var(--van-cell-label-line-height)}.van-cell__title,.van-cell__value{flex:1}.van-cell__value{position:relative;overflow:hidden;color:var(--van-cell-value-color);text-align:right;vertical-align:middle;word-wrap:break-word}.van-cell__value--alone{color:var(--van-text-color);text-align:left}.van-cell__left-icon,.van-cell__right-icon{height:var(--van-cell-line-height);font-size:var(--van-cell-icon-size);line-height:var(--van-cell-line-height)}.van-cell__left-icon{margin-right:var(--van-padding-base)}.van-cell__right-icon{margin-left:var(--van-padding-base);color:var(--van-cell-right-icon-color)}.van-cell--clickable{cursor:pointer}.van-cell--clickable:active{background-color:var(--van-cell-active-color)}.van-cell--required{overflow:visible}.van-cell--required:before{position:absolute;left:var(--van-padding-xs);color:var(--van-cell-required-color);font-size:var(--van-cell-font-size);content:"*"}.van-cell--center{align-items:center}.van-cell--large{padding-top:var(--van-cell-large-vertical-padding);padding-bottom:var(--van-cell-large-vertical-padding)}.van-cell--large .van-cell__title{font-size:var(--van-cell-large-title-font-size)}.van-cell--large .van-cell__label{font-size:var(--van-cell-large-label-font-size)}:root{--van-field-label-width: 6.2em;--van-field-label-color: var(--van-gray-7);--van-field-label-margin-right: var(--van-padding-sm);--van-field-input-text-color: var(--van-text-color);--van-field-input-error-text-color: var(--van-danger-color);--van-field-input-disabled-text-color: var(--van-text-color-3);--van-field-placeholder-text-color: var(--van-text-color-3);--van-field-icon-size: 4.266667vw;--van-field-clear-icon-size: 4.266667vw;--van-field-clear-icon-color: var(--van-gray-5);--van-field-right-icon-color: var(--van-gray-6);--van-field-error-message-color: var(--van-danger-color);--van-field-error-message-font-size: 3.2vw;--van-field-text-area-min-height: 16vw;--van-field-word-limit-color: var(--van-gray-7);--van-field-word-limit-font-size: var(--van-font-size-sm);--van-field-word-limit-line-height: 4.266667vw;--van-field-disabled-text-color: var(--van-text-color-3);--van-field-required-mark-color: var(--van-red)}.van-field__label{flex:none;box-sizing:border-box;width:var(--van-field-label-width);margin-right:var(--van-field-label-margin-right);color:var(--van-field-label-color);text-align:left;word-wrap:break-word}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field__label--required:before{margin-right:.533333vw;color:var(--van-field-required-mark-color);content:"*"}.van-field--disabled .van-field__label{color:var(--van-field-disabled-text-color)}.van-field__value{overflow:visible}.van-field__body{display:flex;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;color:var(--van-field-input-text-color);line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}.van-field__control::-moz-placeholder{color:var(--van-field-placeholder-text-color)}.van-field__control::placeholder{color:var(--van-field-placeholder-text-color)}.van-field__control:disabled{color:var(--van-field-input-disabled-text-color);cursor:not-allowed;opacity:1;-webkit-text-fill-color:var(--van-field-input-disabled-text-color)}.van-field__control:-moz-read-only{cursor:default}.van-field__control:read-only{cursor:default}.van-field__control--center{justify-content:center;text-align:center}.van-field__control--right{justify-content:flex-end;text-align:right}.van-field__control--custom{display:flex;align-items:center;min-height:var(--van-cell-line-height)}.van-field__control--error::-moz-placeholder{color:var(--van-field-input-error-text-color);-webkit-text-fill-color:currentColor}.van-field__control--error,.van-field__control--error::placeholder{color:var(--van-field-input-error-text-color);-webkit-text-fill-color:currentColor}.van-field__control--min-height{min-height:var(--van-field-text-area-min-height)}.van-field__control[type=date],.van-field__control[type=time],.van-field__control[type=datetime-local]{min-height:var(--van-cell-line-height)}.van-field__control[type=search]{-webkit-appearance:none}.van-field__clear,.van-field__icon,.van-field__button,.van-field__right-icon{flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:calc(var(--van-padding-xs) * -1);padding:0 var(--van-padding-xs);line-height:inherit}.van-field__clear{color:var(--van-field-clear-icon-color);font-size:var(--van-field-clear-icon-size);cursor:pointer}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;font-size:var(--van-field-icon-size);line-height:inherit}.van-field__left-icon{margin-right:var(--van-padding-base)}.van-field__right-icon{color:var(--van-field-right-icon-color)}.van-field__button{padding-left:var(--van-padding-xs)}.van-field__error-message{color:var(--van-field-error-message-color);font-size:var(--van-field-error-message-font-size);text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field__word-limit{margin-top:var(--van-padding-base);color:var(--van-field-word-limit-color);font-size:var(--van-field-word-limit-font-size);line-height:var(--van-field-word-limit-line-height);text-align:right}:root{--van-cell-group-background-color: var(--van-background-color-light);--van-cell-group-title-color: var(--van-text-color-2);--van-cell-group-title-padding: var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs);--van-cell-group-title-font-size: var(--van-font-size-md);--van-cell-group-title-line-height: 4.266667vw;--van-cell-group-inset-padding: 0 var(--van-padding-md);--van-cell-group-inset-border-radius: var(--van-border-radius-lg);--van-cell-group-inset-title-padding: var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)}.van-cell-group{background:var(--van-cell-group-background-color)}.van-cell-group--inset{margin:var(--van-cell-group-inset-padding);border-radius:var(--van-cell-group-inset-border-radius);overflow:hidden}.van-cell-group__title{padding:var(--van-cell-group-title-padding);color:var(--van-cell-group-title-color);font-size:var(--van-cell-group-title-font-size);line-height:var(--van-cell-group-title-line-height)}.van-cell-group__title--inset{padding:var(--van-cell-group-inset-title-padding)}\n',document.head.appendChild(t),System.register(["./index-legacy.453b9ec4.js"],(function(a){"use strict";var l,t,i,o,c,v,d,u,s,f,g,p,h,b,m,y,_,x,w,z,k,S,C,A,B,P,I,M,V,j,q,T,E,L,O,W,H;return{setters:[function(e){l=e.j,t=e.W,i=e.a,o=e.d,c=e.A,v=e.$,d=e.c,u=e.k,s=e.m,f=e.t,g=e.B,p=e.a0,h=e.w,b=e.G,m=e.a1,y=e.a2,_=e.M,x=e.u,w=e.a3,z=e.a4,k=e.i,S=e.a5,C=e.V,A=e.a6,B=e.P,P=e.r,I=e.a7,M=e.x,V=e.E,j=e.C,q=e.a8,T=e.a9,E=e.l,L=e.Z,O=e.aa,W=e.ab,H=e.H}],execute:function(){a({a:$,g:function(e){var n,a=null===(n=decodeURI(window.location.href).split("?")[1])||void 0===n?void 0:n.split("#/")[0],l={};if(a){a.split("&").forEach((function(e){var n=r(e.split("="),1)[0];l[n]=e.replace("".concat(n,"="),"").replace(/\s/g,"+")}))}return l[e]},u:G});var D="van-hairline",F=(a("b","".concat(D,"--bottom")),a("B","".concat(D,"--surround")),"".concat(D,"--top-bottom")),Z=(a("H","van-haptics-feedback"),Symbol("van-form"));function $(e){var n=t();n&&l(n.proxy,e)}var U=a("r",{to:[String,Object],url:String,replace:Boolean});function G(){var e=t().proxy;return function(){return r=(n=e).to,a=n.url,l=n.replace,t=n.$router,void(r&&t?t[l?"replace":"push"](r):a&&(l?location.replace(a):location.href=a));var n,r,a,l,t}}var K=r(i("badge"),2),R=K[0],Y=K[1],J={dot:Boolean,max:u,tag:s("div"),color:String,offset:Array,content:u,showZero:f,position:s("top-right")},N=o({name:R,props:J,setup:function(e,n){var a=n.slots,l=function(){if(a.content)return!0;var n=e.content,r=e.showZero;return g(n)&&""!==n&&(r||0!==n)},t=function(){var n=e.dot,r=e.max,t=e.content;if(!n&&l())return a.content?a.content():g(r)&&p(t)&&+t>r?"".concat(r,"+"):t},i=c((function(){var n={background:e.color};if(e.offset){var l=r(e.offset,2),t=l[0],i=l[1];a.default?(n.top=v(i),n.right="number"==typeof t?v(-t):t.startsWith("-")?t.replace("-",""):"-".concat(t)):(n.marginTop=v(i),n.marginLeft=v(t))}return n})),o=function(){if(l()||e.dot)return d("div",{class:Y([e.position,{dot:e.dot,fixed:!!a.default}]),style:i.value},[t()])};return function(){if(a.default){var n=e.tag;return d(n,{class:Y("wrapper")},{default:function(){return[a.default(),o()]}})}return o()}}}),Q=h(N),X=r(i("config-provider"),2),ee=X[0],ne=X[1],re=Symbol(ee),ae={tag:s("div"),themeVars:Object,iconPrefix:String};o({name:ee,props:ae,setup:function(e,n){var r=n.slots,a=c((function(){if(e.themeVars)return n=e.themeVars,r={},Object.keys(n).forEach((function(e){r["--van-".concat(m(e))]=n[e]})),r;var n,r}));return b(re,e),function(){return d(e.tag,{class:ne(),style:a.value},{default:function(){var e;return[null==(e=r.default)?void 0:e.call(r)]}})}}});var le=r(i("icon"),2),te=le[0],ie=le[1],oe={dot:Boolean,tag:s("i"),name:String,size:u,badge:u,color:String,badgeProps:Object,classPrefix:String},ce=o({name:te,props:oe,setup:function(e,n){var r=n.slots,a=y(re,null),l=c((function(){return e.classPrefix||(null==a?void 0:a.iconPrefix)||ie()}));return function(){var n=e.tag,a=e.dot,t=e.name,i=e.size,o=e.badge,c=e.color,u=function(e){return null==e?void 0:e.includes("/")}(t);return d(Q,_({dot:a,tag:n,class:[l.value,u?"":"".concat(l.value,"-").concat(t)],style:{color:c,fontSize:v(i)},content:o},e.badgeProps),{default:function(){var e;return[null==(e=r.default)?void 0:e.call(r),u&&d("img",{class:ie("image"),src:t},null)]}})}}}),ve=a("I",h(ce)),de=r(i("cell"),2),ue=de[0],se=de[1],fe={icon:String,size:String,title:u,value:u,label:u,center:Boolean,isLink:Boolean,border:f,required:Boolean,iconPrefix:String,valueClass:x,labelClass:x,titleClass:x,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},ge=l({},fe,U),pe=o({name:ue,props:ge,setup:function(e,n){var r=n.slots,a=G(),l=function(){if(r.label||g(e.label))return d("div",{class:[se("label"),e.labelClass]},[r.label?r.label():e.label])},t=function(){if(r.title||g(e.title))return d("div",{class:[se("title"),e.titleClass],style:e.titleStyle},[r.title?r.title():d("span",null,[e.title]),l()])},i=function(){var n=r.value||r.default;if(n||g(e.value)){var a=r.title||g(e.title);return d("div",{class:[se("value",{alone:!a}),e.valueClass]},[n?n():d("span",null,[e.value])])}},o=function(){if(r["right-icon"])return r["right-icon"]();if(e.isLink){var n=e.arrowDirection?"arrow-".concat(e.arrowDirection):"arrow";return d(ve,{name:n,class:se("right-icon")},null)}};return function(){var n,l,c=e.size,v=e.center,u=e.border,s=e.isLink,f=e.required,g=null!=(n=e.clickable)?n:s,p={center:v,required:f,clickable:g,borderless:!u};return c&&(p[c]=!!c),d("div",{class:se(p),role:g?"button":void 0,tabindex:g?0:void 0,onClick:a},[r.icon?r.icon():e.icon?d(ve,{name:e.icon,class:se("left-icon"),classPrefix:e.iconPrefix},null):void 0,t(),i(),o(),null==(l=r.extra)?void 0:l.call(r)])}}}),he=a("c",h(pe));function be(e,n){return(!n.required||!function(e){return Array.isArray(e)?!e.length:0!==e&&!e}(e))&&!(n.pattern&&!n.pattern.test(String(e)))}function me(e,n){var r=n.message;return S(r)?r(e,n):r||""}function ye(e){e.target.composing=!0}function _e(e){var n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}function xe(e){return n(e).length}var we=0;var ze=r(i("field"),2),ke=ze[0],Se=ze[1],Ce={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:u,formatter:Function,clearIcon:s("clear"),modelValue:A(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:s("focus"),formatTrigger:s("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Ae=l({},fe,Ce,{rows:u,type:s("text"),rules:Array,autosize:[Boolean,Object],labelWidth:u,labelClass:x,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),Be=o({name:ke,props:Ae,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup:function(r,a){var l,i,o=a.emit,u=a.slots,s=(l=t(),i=((null==l?void 0:l.type)||{}).name,"".concat(void 0===i?"unknown":i,"-").concat(++we)),f=B({status:"unvalidated",focused:!1,validateMessage:""}),p=P(),h=P(),m=I(Z).parent,y=function(){var e;return String(null!=(e=r.modelValue)?e:"")},x=function(e){return g(r[e])?r[e]:m&&g(m.props[e])?m.props[e]:void 0},S=c((function(){var e=x("readonly");if(r.clearable&&!e){var n=""!==y(),a="always"===r.clearTrigger||"focus"===r.clearTrigger&&f.focused;return n&&a}return!1})),A=c((function(){return h.value&&u.input?h.value():r.modelValue})),H=function(e){return e.reduce((function(e,n){return e.then((function(){if("failed"!==f.status){var e=A.value;return n.formatter&&(e=n.formatter(e,n)),be(e,n)?n.validator?function(e,n){return new Promise((function(r){var a=n.validator(e,n);k(a)?a.then(r):r(a)}))}(e,n).then((function(r){r&&"string"==typeof r?(f.status="failed",f.validateMessage=r):!1===r&&(f.status="failed",f.validateMessage=me(e,n))})):void 0:(f.status="failed",void(f.validateMessage=me(e,n)))}}))}),Promise.resolve())},D=function(){f.status="unvalidated",f.validateMessage=""},F=function(){return o("end-validate",{status:f.status})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.rules;return new Promise((function(n){D(),e?(o("start-validate"),H(e).then((function(){"failed"===f.status?(n({name:r.name,message:f.validateMessage}),F()):(f.status="passed",n(),F())}))):n()}))},G=function(e){if(m&&r.rules){var n=m.props.validateTrigger,a=T(n).includes(e),l=r.rules.filter((function(n){return n.trigger?T(n.trigger).includes(e):a}));l.length&&U(l)}},K=function(e){var a=r.maxlength;if(g(a)&&xe(e)>a){var l=y();return l&&xe(l)===+a?l:function(e,r){return n(e).slice(0,r).join("")}(e,+a)}return e},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange";if(e=K(e),"number"===r.type||"digit"===r.type){var a="number"===r.type;e=q(e,a,a)}r.formatter&&n===r.formatTrigger&&(e=r.formatter(e)),p.value&&p.value.value!==e&&(p.value.value=e),e!==r.modelValue&&o("update:modelValue",e)},Y=function(e){e.target.composing||R(e.target.value)},J=function(){var e;return null==(e=p.value)?void 0:e.blur()},N=function(){var e=p.value;"textarea"===r.type&&r.autosize&&e&&function(e,n){var r=w();e.style.height="auto";var a=e.scrollHeight;if(C(n)){var l=n.maxHeight,t=n.minHeight;void 0!==l&&(a=Math.min(a,l)),void 0!==t&&(a=Math.max(a,t))}a&&(e.style.height="".concat(a,"px"),z(r))}(e,r.autosize)},Q=function(e){f.focused=!0,o("focus",e),j(N),x("readonly")&&J()},X=function(e){x("readonly")||(f.focused=!1,R(y(),"onBlur"),o("blur",e),G("onBlur"),j(N),O())},ee=function(e){return o("click-input",e)},ne=function(e){return o("click-left-icon",e)},re=function(e){return o("click-right-icon",e)},ae=function(e){E(e),o("update:modelValue",""),o("clear",e)},le=c((function(){return"boolean"==typeof r.error?r.error:!(!m||!m.props.showError||"failed"!==f.status)||void 0})),te=c((function(){var e=x("labelWidth");if(e)return{width:v(e)}})),ie=function(e){13===e.keyCode&&(m&&m.props.submitOnEnter||"textarea"===r.type||E(e),"search"===r.type&&J());o("keypress",e)},oe=function(){return r.id||"".concat(s,"-input")},ce=function(){var e=Se("control",[x("inputAlign"),{error:le.value,custom:!!u.input,"min-height":"textarea"===r.type&&!r.autosize}]);if(u.input)return d("div",{class:e,onClick:ee},[u.input()]);var n,a={id:oe(),ref:p,name:r.name,rows:void 0!==r.rows?+r.rows:void 0,class:e,disabled:x("disabled"),readonly:x("readonly"),autofocus:r.autofocus,placeholder:r.placeholder,autocomplete:r.autocomplete,enterkeyhint:r.enterkeyhint,"aria-labelledby":r.label?"".concat(s,"-label"):void 0,onBlur:X,onFocus:Q,onInput:Y,onClick:ee,onChange:_e,onKeypress:ie,onCompositionend:_e,onCompositionstart:ye};return"textarea"===r.type?d("textarea",a,null):d("input",_("number"===(n=r.type)?{type:"text",inputmode:"decimal"}:"digit"===n?{type:"tel",inputmode:"numeric"}:{type:n},a),null)},de=function(){var e=u["right-icon"];if(r.rightIcon||e)return d("div",{class:Se("right-icon"),onClick:re},[e?e():d(ve,{name:r.rightIcon,classPrefix:r.iconPrefix},null)])},ue=function(){if(r.showWordLimit&&r.maxlength){var e=xe(y());return d("div",{class:Se("word-limit")},[d("span",{class:Se("word-num")},[e]),L("/"),r.maxlength])}},se=function(){if(!m||!1!==m.props.showErrorMessage){var e=r.errorMessage||f.validateMessage;if(e){var n=u["error-message"],a=x("errorMessageAlign");return d("div",{class:Se("error-message",a)},[n?n({message:e}):e])}}},fe=function(){return[d("div",{class:Se("body")},[ce(),S.value&&d(ve,{name:r.clearIcon,class:Se("clear"),onTouchstart:ae},null),de(),u.button&&d("div",{class:Se("button")},[u.button()])]),ue(),se()]};return $({blur:J,focus:function(){var e;return null==(e=p.value)?void 0:e.focus()},validate:U,formValue:A,resetValidation:D,getValidationStatus:function(){return f.status}}),b(W,{customValue:h,resetValidation:D,validateWithTrigger:G}),M((function(){return r.modelValue}),(function(){R(y()),D(),G("onChange"),j(N)})),V((function(){R(y(),r.formatTrigger),j(N)})),function(){var n,a=x("disabled"),l=x("labelAlign"),t=(n=x("colon")?":":"",u.label?[u.label(),n]:r.label?d("label",{id:"".concat(s,"-label"),for:oe()},[r.label+n]):void 0),i=function(){var e=u["left-icon"];if(r.leftIcon||e)return d("div",{class:Se("left-icon"),onClick:ne},[e?e():d(ve,{name:r.leftIcon,classPrefix:r.iconPrefix},null)])}();return d(he,{size:r.size,icon:r.leftIcon,class:Se(e({error:le.value,disabled:a},"label-".concat(l),l)),center:r.center,border:r.border,isLink:r.isLink,clickable:r.clickable,titleStyle:te.value,valueClass:Se("value"),titleClass:[Se("label",[l,{required:r.required}]),r.labelClass],arrowDirection:r.arrowDirection},{icon:i?function(){return i}:null,title:t?function(){return t}:null,value:fe,extra:u.extra})}}}),Pe=(a("F",h(Be)),r(i("cell-group"),2)),Ie=Pe[0],Me=Pe[1],Ve={title:String,inset:Boolean,border:f},je=o({name:Ie,inheritAttrs:!1,props:Ve,setup:function(n,r){var a=r.slots,l=r.attrs,t=function(){var r;return d("div",_({class:[Me({inset:n.inset}),e({},F,n.border&&!n.inset)]},l),[null==(r=a.default)?void 0:r.call(a)])};return function(){return n.title||a.title?d(H,null,[d("div",{class:Me("title",{inset:n.inset})},[a.title?a.title():n.title]),t()]):t()}}});a("C",h(je))}}}))}();
