(()=>{"use strict";var e={74:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),s=n(645),c=n.n(s)()(o());c.push([e.id,".tabs {\n  width: 100px;\n  height: 100px;\n  background-color: green;\n}\n",""]);const i=c},771:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),s=n(645),c=n.n(s)()(o());c.push([e.id,".marquee {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: orange;\r\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(c[a]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},c=[],i=0;i<e.length;i++){var a=e[i],u=r.base?a[0]+r.base:a[0],l=s[u]||0,f="".concat(u," ").concat(l);s[u]=l+1;var p=n(f),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var d=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:f,updater:d,references:1})}c.push(f)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<s.length;c++){var i=n(s[c]);t[i].references--}for(var a=r(e,o),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),c=n.n(s),i=n(565),a=n.n(i),u=n(216),l=n.n(u),f=n(589),p=n.n(f),h=n(771),d={};d.styleTagTransform=p(),d.setAttributes=a(),d.insert=c().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=l(),t()(h.Z,d),h.Z&&h.Z.locals&&h.Z.locals;var v=n(74),g={};function _(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}g.styleTagTransform=p(),g.setAttributes=a(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const m={},y=()=>{},b=Object.assign,w=Object.prototype.hasOwnProperty,x=(e,t)=>w.call(e,t),S=Array.isArray,O=e=>"[object Map]"===k(e),E=e=>"function"==typeof e,R=e=>"string"==typeof e,j=e=>"symbol"==typeof e,P=e=>null!==e&&"object"==typeof e,M=Object.prototype.toString,k=e=>M.call(e),C=e=>R(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,T=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$=/-(\w)/g,A=(T((e=>e.replace($,((e,t)=>t?t.toUpperCase():"")))),/\B([A-Z])/g),I=(T((e=>e.replace(A,"-$1").toLowerCase())),T((e=>e.charAt(0).toUpperCase()+e.slice(1)))),Z=(T((e=>e?`on${I(e)}`:"")),(e,t)=>!Object.is(e,t));const N=e=>{const t=new Set(e);return t.w=0,t.n=0,t},U=e=>(e.w&F)>0,W=e=>(e.n&F)>0,z=new WeakMap;let B,L=0,F=1;const H=Symbol(""),V=Symbol("");class q{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=B,t=K;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=B,B=this,K=!0,F=1<<++L,L<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=F})(this):D(this),this.fn()}finally{L<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];U(o)&&!W(o)?o.delete(e):t[n++]=o,o.w&=~F,o.n&=~F}t.length=n}})(this),F=1<<--L,B=this.parent,K=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){B===this?this.deferStop=!0:this.active&&(D(this),this.onStop&&this.onStop(),this.active=!1)}}function D(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let K=!0;const J=[];function G(){J.push(K),K=!1}function Q(){const e=J.pop();K=void 0===e||e}function X(e,t,n){if(K&&B){let t=z.get(e);t||z.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=N()),function(e,t){let n=!1;L<=30?W(e)||(e.n|=F,n=!U(e)):n=!e.has(B),n&&(e.add(B),B.deps.push(e))}(r)}}function Y(e,t,n,r,o,s){const c=z.get(e);if(!c)return;let i=[];if("clear"===t)i=[...c.values()];else if("length"===n&&S(e))c.forEach(((e,t)=>{("length"===t||t>=r)&&i.push(e)}));else switch(void 0!==n&&i.push(c.get(n)),t){case"add":S(e)?C(n)&&i.push(c.get("length")):(i.push(c.get(H)),O(e)&&i.push(c.get(V)));break;case"delete":S(e)||(i.push(c.get(H)),O(e)&&i.push(c.get(V)));break;case"set":O(e)&&i.push(c.get(H))}if(1===i.length)i[0]&&ee(i[0]);else{const e=[];for(const t of i)t&&e.push(...t);ee(N(e))}}function ee(e,t){const n=S(e)?e:[...e];for(const e of n)e.computed&&te(e);for(const e of n)e.computed||te(e)}function te(e,t){(e!==B||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ne=_("__proto__,__v_isRef,__isVue"),re=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(j)),oe=ae(),se=ae(!0),ce=ie();function ie(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Le(this);for(let e=0,t=this.length;e<t;e++)X(n,0,e+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Le)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){G();const n=Le(this)[t].apply(this,e);return Q(),n}})),e}function ae(e=!1,t=!1){return function(n,r,o){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&o===(e?t?Ie:Ae:t?$e:Te).get(n))return n;const s=S(n);if(!e&&s&&x(ce,r))return Reflect.get(ce,r,o);const c=Reflect.get(n,r,o);return(j(r)?re.has(r):ne(r))?c:(e||X(n,0,r),t?c:qe(c)?s&&C(r)?c:c.value:P(c)?e?Ne(c):Ze(c):c)}}function ue(e=!1){return function(t,n,r,o){let s=t[n];if(ze(s)&&qe(s)&&!qe(r))return!1;if(!e&&!ze(r)&&(Be(r)||(r=Le(r),s=Le(s)),!S(t)&&qe(s)&&!qe(r)))return s.value=r,!0;const c=S(t)&&C(n)?Number(n)<t.length:x(t,n),i=Reflect.set(t,n,r,o);return t===Le(o)&&(c?Z(r,s)&&Y(t,"set",n,r):Y(t,"add",n,r)),i}}const le={get:oe,set:ue(),deleteProperty:function(e,t){const n=x(e,t),r=(e[t],Reflect.deleteProperty(e,t));return r&&n&&Y(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return j(t)&&re.has(t)||X(e,0,t),n},ownKeys:function(e){return X(e,0,S(e)?"length":H),Reflect.ownKeys(e)}},fe={get:se,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},pe=e=>e,he=e=>Reflect.getPrototypeOf(e);function de(e,t,n=!1,r=!1){const o=Le(e=e.__v_raw),s=Le(t);n||(t!==s&&X(o,0,t),X(o,0,s));const{has:c}=he(o),i=r?pe:n?Ve:He;return c.call(o,t)?i(e.get(t)):c.call(o,s)?i(e.get(s)):void(e!==o&&e.get(t))}function ve(e,t=!1){const n=this.__v_raw,r=Le(n),o=Le(e);return t||(e!==o&&X(r,0,e),X(r,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function ge(e,t=!1){return e=e.__v_raw,!t&&X(Le(e),0,H),Reflect.get(e,"size",e)}function _e(e){e=Le(e);const t=Le(this);return he(t).has.call(t,e)||(t.add(e),Y(t,"add",e,e)),this}function me(e,t){t=Le(t);const n=Le(this),{has:r,get:o}=he(n);let s=r.call(n,e);s||(e=Le(e),s=r.call(n,e));const c=o.call(n,e);return n.set(e,t),s?Z(t,c)&&Y(n,"set",e,t):Y(n,"add",e,t),this}function ye(e){const t=Le(this),{has:n,get:r}=he(t);let o=n.call(t,e);o||(e=Le(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Y(t,"delete",e,void 0),s}function be(){const e=Le(this),t=0!==e.size,n=e.clear();return t&&Y(e,"clear",void 0,void 0),n}function we(e,t){return function(n,r){const o=this,s=o.__v_raw,c=Le(s),i=t?pe:e?Ve:He;return!e&&X(c,0,H),s.forEach(((e,t)=>n.call(r,i(e),i(t),o)))}}function xe(e,t,n){return function(...r){const o=this.__v_raw,s=Le(o),c=O(s),i="entries"===e||e===Symbol.iterator&&c,a="keys"===e&&c,u=o[e](...r),l=n?pe:t?Ve:He;return!t&&X(s,0,a?V:H),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:i?[l(e[0]),l(e[1])]:l(e),done:t}},[Symbol.iterator](){return this}}}}function Se(e){return function(...t){return"delete"!==e&&this}}function Oe(){const e={get(e){return de(this,e)},get size(){return ge(this)},has:ve,add:_e,set:me,delete:ye,clear:be,forEach:we(!1,!1)},t={get(e){return de(this,e,!1,!0)},get size(){return ge(this)},has:ve,add:_e,set:me,delete:ye,clear:be,forEach:we(!1,!0)},n={get(e){return de(this,e,!0)},get size(){return ge(this,!0)},has(e){return ve.call(this,e,!0)},add:Se("add"),set:Se("set"),delete:Se("delete"),clear:Se("clear"),forEach:we(!0,!1)},r={get(e){return de(this,e,!0,!0)},get size(){return ge(this,!0)},has(e){return ve.call(this,e,!0)},add:Se("add"),set:Se("set"),delete:Se("delete"),clear:Se("clear"),forEach:we(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((o=>{e[o]=xe(o,!1,!1),n[o]=xe(o,!0,!1),t[o]=xe(o,!1,!0),r[o]=xe(o,!0,!0)})),[e,n,t,r]}const[Ee,Re,je,Pe]=Oe();function Me(e,t){const n=t?e?Pe:je:e?Re:Ee;return(t,r,o)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(x(n,r)&&r in t?n:t,r,o)}const ke={get:Me(!1,!1)},Ce={get:Me(!0,!1)},Te=new WeakMap,$e=new WeakMap,Ae=new WeakMap,Ie=new WeakMap;function Ze(e){return ze(e)?e:Ue(e,!1,le,ke,Te)}function Ne(e){return Ue(e,!0,fe,Ce,Ae)}function Ue(e,t,n,r,o){if(!P(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const c=(i=e).__v_skip||!Object.isExtensible(i)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>k(e).slice(8,-1))(i));var i;if(0===c)return e;const a=new Proxy(e,2===c?r:n);return o.set(e,a),a}function We(e){return ze(e)?We(e.__v_raw):!(!e||!e.__v_isReactive)}function ze(e){return!(!e||!e.__v_isReadonly)}function Be(e){return!(!e||!e.__v_isShallow)}function Le(e){const t=e&&e.__v_raw;return t?Le(t):e}function Fe(e){return((e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})})(e,"__v_skip",!0),e}const He=e=>P(e)?Ze(e):e,Ve=e=>P(e)?Ne(e):e;function qe(e){return!(!e||!0!==e.__v_isRef)}const De={get:(e,t,n)=>{return qe(r=Reflect.get(e,t,n))?r.value:r;var r},set:(e,t,n,r)=>{const o=e[t];return qe(o)&&!qe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ke(e,t,n,r){let o;try{o=r?e(...r):e()}catch(e){Ge(e,t,n)}return o}function Je(e,t,n,r){if(E(e)){const s=Ke(e,t,n,r);return s&&(P(o=s)&&E(o.then)&&E(o.catch))&&s.catch((e=>{Ge(e,t,n)})),s}var o;const s=[];for(let o=0;o<e.length;o++)s.push(Je(e[o],t,n,r));return s}function Ge(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent;const o=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,s))return;r=r.parent}const c=t.appContext.config.errorHandler;if(c)return void Ke(c,null,10,[e,o,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Qe=!1,Xe=!1;const Ye=[];let et=0;const tt=[];let nt=null,rt=0;const ot=[];let st=null,ct=0;const it=Promise.resolve();let at=null,ut=null;function lt(e){const t=at||it;return e?t.then(this?e.bind(this):e):t}function ft(){Qe||Xe||(Xe=!0,at=it.then(vt))}function pt(e,t,n,r){S(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),ft()}function ht(e,t=null){if(tt.length){for(ut=t,nt=[...new Set(tt)],tt.length=0,rt=0;rt<nt.length;rt++)nt[rt]();nt=null,rt=0,ut=null,ht(e,t)}}const dt=e=>null==e.id?1/0:e.id;function vt(e){Xe=!1,Qe=!0,ht(e),Ye.sort(((e,t)=>dt(e)-dt(t)));try{for(et=0;et<Ye.length;et++){const e=Ye[et];e&&!1!==e.active&&Ke(e,null,14)}}finally{et=0,Ye.length=0,function(e){if(ht(),ot.length){const e=[...new Set(ot)];if(ot.length=0,st)return void st.push(...e);for(st=e,st.sort(((e,t)=>dt(e)-dt(t))),ct=0;ct<st.length;ct++)st[ct]();st=null,ct=0}}(),Qe=!1,at=null,(Ye.length||tt.length||ot.length)&&vt(e)}}new Set,new Map;const gt={};function _t(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:c}=m){const i=kt;let a,u,l=!1,f=!1;if(qe(e)?(a=()=>e.value,l=Be(e)):We(e)?(a=()=>e,r=!0):S(e)?(f=!0,l=e.some((e=>We(e)||Be(e))),a=()=>e.map((e=>qe(e)?e.value:We(e)?yt(e):E(e)?Ke(e,i,2):void 0))):a=E(e)?t?()=>Ke(e,i,2):()=>{if(!i||!i.isUnmounted)return u&&u(),Je(e,i,3,[p])}:y,t&&r){const e=a;a=()=>yt(e())}let p=e=>{u=g.onStop=()=>{Ke(e,i,4)}};if($t)return p=y,t?n&&Je(t,i,3,[a(),f?[]:void 0,p]):a(),y;let h=f?[]:gt;const d=()=>{if(g.active)if(t){const e=g.run();(r||l||(f?e.some(((e,t)=>Z(e,h[t]))):Z(e,h)))&&(u&&u(),Je(t,i,3,[e,h===gt?void 0:h,p]),h=e)}else g.run()};let v;d.allowRecurse=!!t,v="sync"===o?d:"post"===o?()=>Mt(d,i&&i.suspense):()=>function(e){pt(e,nt,tt,rt)}(d);const g=new q(a,v);return t?n?d():h=g.run():"post"===o?Mt(g.run.bind(g),i&&i.suspense):g.run(),()=>{g.stop(),i&&i.scope&&((e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)})(i.scope.effects,g)}}function mt(e,t,n){const r=this.proxy,o=R(e)?e.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const c=kt;Ct(this);const i=_t(o,s.bind(r),n);return c?Ct(c):Tt(),i}function yt(e,t){if(!P(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),qe(e))yt(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if("[object Set]"===k(e)||O(e))e.forEach((e=>{yt(e,t)}));else if((e=>"[object Object]"===k(e))(e))for(const n in e)yt(e[n],t);return e}Boolean,Boolean;RegExp,RegExp;const bt=e=>(t,n=kt)=>(!$t||"sp"===e)&&function(e,t,n=kt,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;G(),Ct(n);const o=Je(t,n,e,r);return Tt(),Q(),o});return r?o.unshift(s):o.push(s),s}}(e,t,n);bt("bm"),bt("m"),bt("bu"),bt("u"),bt("bum");bt("um"),bt("sp"),bt("rtg"),bt("rtc"),Symbol();const wt=e=>e?4&e.vnode.shapeFlag?function(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((t=Fe(e.exposed),We(t)?t:new Proxy(t,De)),{get:(t,n)=>n in t?t[n]:n in xt?xt[n](e):void 0}));var t}(e)||e.proxy:wt(e.parent):null,xt=b(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wt(e.parent),$root:e=>wt(e.root),$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?function(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:c}}=e.appContext,i=s.get(t);let a;return i?a=i:o.length||n||r?(a={},o.length&&o.forEach((e=>St(a,e,c,!0))),St(a,t,c)):a=t,s.set(t,a),a}(e):e.type,$forceUpdate:e=>e.f||(e.f=()=>{return t=e.update,void(Ye.length&&Ye.includes(t,Qe&&t.allowRecurse?et+1:et)||t===ut||(null==t.id?Ye.push(t):Ye.splice(function(e){let t=et+1,n=Ye.length;for(;t<n;){const r=t+n>>>1;dt(Ye[r])<e?t=r+1:n=r}return t}(t.id),0,t),ft()));var t}),$nextTick:e=>e.n||(e.n=lt.bind(e.proxy)),$watch:e=>__VUE_OPTIONS_API__?mt.bind(e):y});function St(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&St(e,s,n,!0),o&&o.forEach((t=>St(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ot[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ot={data:Et,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Pt,directives:Pt,watch:function(e,t){if(!e)return t;if(!t)return e;const n=b(Object.create(null),e);for(const r in t)n[r]=jt(e[r],t[r]);return n},provide:Et,inject:function(e,t){return Pt(Rt(e),Rt(t))}};function Et(e,t){return t?e?function(){return b(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function Rt(e){if(S(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function jt(e,t){return e?[...new Set([].concat(e,t))]:t}function Pt(e,t){return e?b(b(Object.create(null),e),t):t}const Mt=function(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):pt(e,st,ot,ct)};Symbol(void 0),Symbol(void 0),Symbol(void 0);Symbol(void 0);Object.create(null),new WeakMap,new WeakMap,new WeakMap;let kt=null;const Ct=e=>{kt=e,e.scope.on()},Tt=()=>{kt&&kt.scope.off(),kt=null};let $t=!1;Symbol("");const At=n.p+"37ece4fa2c916b8e9170.gif",It=n.p+"ff1ad41dad266fcd9194.png";console.log("轮播图逻辑已经执行"),console.log("选项卡逻辑已经执行");const Zt=document.createElement("img");Zt.src=At,document.body.appendChild(Zt);const Nt=document.createElement("img");Nt.src=It,document.body.appendChild(Nt)})()})();