(()=>{"use strict";var e,t,r,n,o,a,i,s,p,c,l,d,u,f,h={664:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(601),o=r.n(n),a=r(314),i=r.n(a),s=r(417),p=r.n(s),c=new URL(r(928),r.b),l=new URL(r(917),r.b),d=new URL(r(558),r.b),u=new URL(r(25),r.b),f=i()(o());f.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Creepster&display=swap);"]);var h=p()(c),g=p()(l),m=p()(d),v=p()(u);f.push([e.id,`.display{width:100%;height:150px;margin:3vh 0;background-color:#bed754;padding:20px;overflow:hidden;position:relative}.display__input{height:55px;width:100%;text-align:right;color:#191919;line-height:2;font-size:1.5rem;overflow-y:hidden;overflow-x:scroll}.display__answer{height:55px;width:100%;text-align:right;color:#750e21;line-height:3;font-size:larger}.display .upper-teeth,.display .lower-teeth{position:absolute;left:0;width:330px;height:100px;transition:transform .1s ease-in-out;filter:invert(7%) sepia(99%) saturate(3397%) hue-rotate(339deg) brightness(103%) contrast(97%)}.display .upper-teeth{background-image:url(${h});top:-90px}.display .lower-teeth{background-image:url(${g});bottom:-100px}.display:hover .upper-teeth{transform:translateY(90px)}.display:hover .lower-teeth{transform:translateY(-100px)}@media(max-width: 440px){.upper-teeth,.lower-teeth{width:250px}}.keypad{display:grid;grid:repeat(5, 70px)/repeat(4, 70px);gap:20px}.keypad button{border-radius:10px;background-color:#191919;font-size:x-large;border:3px solid #750e21}.keypad__buttons,.keypad__controls{color:#bed754}.keypad .--operators{color:#e3651d}.keypad button:hover{background-color:#750e21;cursor:pointer}@media(max-width: 440px){.keypad{grid:repeat(5, 50px)/repeat(4, 50px);gap:15px}}.hat{top:-100px;left:-80px;transform:rotate(-30deg);position:absolute;height:200px;width:200px;background-image:url(${m});background-size:contain;background-repeat:no-repeat}.hat:hover{animation:shake 1s ease-in-out}@keyframes shake{0%{transform:rotate(-30deg)}25%{transform:rotate(-25deg)}50%{transform:rotate(-35deg)}70%{transform:rotate(-25deg)}100%{transform:rotate(-30deg)}}@media(max-width: 440px){.hat{top:-90px;left:-10px;transform:rotate(-10deg);height:150px;width:150px}@keyframes shake{0%{transform:rotate(-10deg)}25%{transform:rotate(-5deg)}50%{transform:rotate(-15deg)}70%{transform:rotate(-5deg)}100%{transform:rotate(-10deg)}}}html{box-sizing:border-box}*,*::after,*::before{font-family:"Creepster",system-ui;font-size:24px;font-weight:400;font-style:normal;box-sizing:inherit;margin:0;padding:0}.wrapper{width:100vw;height:100svh;background-image:url(${v});background-size:cover;display:flex;justify-content:center;align-items:center}.container{width:400px;height:auto;background-color:#191919;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:25px 35px;border-radius:10px;user-select:none;position:relative}.container .eyes{display:none;position:absolute;top:15px;color:#750e21}@media(max-width: 440px){.container{width:300px;padding:25px}}`,""]);const y=f},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(i[p]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var p=e[s],c=n.base?p[0]+n.base:p[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var u=r(d),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var p=n(e,o),c=0;c<a.length;c++){var l=r(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=p}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},25:(e,t,r)=>{e.exports=r.p+"82041267fd688f48c23e.jpg"},558:(e,t,r)=>{e.exports=r.p+"d1fc68b37c711683b0a2.png"},917:(e,t,r)=>{e.exports=r.p+"891c5763d2f69ddef931.svg"},928:(e,t,r)=>{e.exports=r.p+"f32bc27790870c0586b6.svg"}},g={};function m(e){var t=g[e];if(void 0!==t)return t.exports;var r=g[e]={id:e,exports:{}};return h[e](r,r.exports,m),r.exports}m.m=h,m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var r in t)m.o(t,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var t=m.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),m.b=document.baseURI||self.location.href,m.nc=void 0,(()=>{function e(e){for(var t=function(e){var t=e.match(/\+|(?<![+\-/*%]|^)-/g)||[];return e.replace(/\+|(?<![+\-/*%]|^)-/g," ").replace(/([*/%])((?<=[+\-/*%]|^)-?\d[\d.]*)/g," $2 $1").split(" ").concat(t.reverse())}(e),r=[],n=0;n<t.length;n+=1)switch(!0){case"+"===t[n]:r.push(r.pop()+r.pop());break;case"-"===t[n]:r.push(-(r.pop()-r.pop()));break;case"*"===t[n]:r.push(r.pop()*r.pop());break;case"/"===t[n]:r.push(1/(r.pop()/r.pop()));break;case"%"===t[n]:var o=r.pop(),a=r.pop();r.push(a%o);break;default:r.push(+t[n])}return r[0]?r[0].toString():"0"}var t=document.querySelector(".display"),r=document.querySelector(".eyes"),n=document.querySelector(".display__input"),o=document.querySelector(".display__answer"),a=document.querySelectorAll(".keypad__buttons"),i=document.querySelectorAll(".keypad__controls"),s="";a.forEach((function(t){t.addEventListener("click",(function(){s+=t.value,n.innerHTML=s,n.scrollLeft=n.scrollWidth,t.classList.contains("--operands")&&(o.innerHTML=e(s))}))})),i.forEach((function(t){t.addEventListener("click",(function(){"clear"===t.value&&(s="",n.innerHTML="",o.innerHTML="0"),"delete"===t.value&&(s=s.slice(0,-1),n.innerHTML=s,n.scrollLeft=n.scrollWidth,o.innerHTML=e(s)),"equals"===t.value&&(s=e(s),n.innerHTML=s,n.scrollLeft=n.scrollWidth,o.innerHTML=s)}))})),t.addEventListener("mouseover",(function(){r.style.display="block"})),t.addEventListener("mouseout",(function(){r.style.display="none"}))})(),e=m(72),t=m.n(e),r=m(825),n=m.n(r),o=m(659),a=m.n(o),i=m(56),s=m.n(i),p=m(540),c=m.n(p),l=m(113),d=m.n(l),u=m(664),(f={}).styleTagTransform=d(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),t()(u.A,f),u.A&&u.A.locals&&u.A.locals})();