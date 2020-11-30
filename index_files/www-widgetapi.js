(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function t(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}ka=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function qa(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function ra(){this.o=!1;this.i=null;this.l=void 0;this.f=1;this.j=this.m=0;this.B=this.h=null}
function ua(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
ra.prototype.u=function(a){this.l=a};
function va(a,b){a.h={W:b,X:!0};a.f=a.m||a.j}
ra.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
ra.prototype.D=function(a){this.f=a};
function wa(a,b,c){a.m=b;void 0!=c&&(a.j=c)}
function xa(a){a.m=0;var b=a.h.W;a.h=null;return b}
function za(a){this.f=new ra;this.h=a}
function Aa(a,b){ua(a.f);var c=a.f.i;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.o=!1,e;var f=e.value}catch(g){return a.f.i=null,va(a.f,g),Ca(a)}a.f.i=null;d.call(a.f,f);return Ca(a)}
function Ca(a){for(;a.f.f;)try{var b=a.h(a.f);if(b)return a.f.o=!1,{value:b.value,done:!1}}catch(c){a.f.l=void 0,va(a.f,c)}a.f.o=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.X)throw b.W;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.f);a.f.i?b=Ba(a,a.f.i.next,b,a.f.u):(a.f.u(b),b=Ca(a));return b};
this["throw"]=function(b){ua(a.f);a.f.i?b=Ba(a,a.f.i["throw"],b,a.f.u):(va(a.f,b),b=Ca(a));return b};
this["return"]=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a,b){var c=new Da(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)z(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ia});
t("Promise",function(a){function b(g){this.f=0;this.i=void 0;this.h=[];this.o=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ha),reject:g(this.l)}};
b.prototype.ha=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ja(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ga(g):this.m(g)}};
b.prototype.ga=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.ka(h,g):this.m(g)};
b.prototype.l=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.i=h;2===this.f&&this.ia();this.B()};
b.prototype.ia=function(){var g=this;e(function(){if(g.I()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.I=function(){if(this.o)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.B=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.ja=function(g){var h=this.j();g.M(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(v){try{l(q(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.M(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.M=function(g,h){function k(){switch(l.f){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).M(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){q[v]=w;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).M(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)z(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!z(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!z(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&z(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ha(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&z(h.h,l))for(var n=0;n<m.length;n++){var q=m[n];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:n,s:q}}return{id:l,list:m,index:-1,s:void 0}}
function e(h){this.h={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.s?l.s.value=k:(l.s={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.s),this.f.previous.next=l.s,this.f.previous=l.s,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.s&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.s.previous.next=h.s.next,h.s.next.previous=h.s.previous,h.s.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.h={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).s};
e.prototype.get=function(h){return(h=d(this,h).s)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function B(a,b){for(var c=a.split("."),d=b||A,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function La(){}
function Ma(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Qa:Sa=Ra;return Sa.apply(null,arguments)}
function D(a,b){var c=a.split("."),d=A;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.La=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Xa(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ya(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(Ya,Error);Ya.prototype.name="CustomError";var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Za(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;var ob=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;
function Bb(a,b){return a<b?-1:a>b?1:0}
;var G;a:{var Cb=A.navigator;if(Cb){var Db=Cb.userAgent;if(Db){G=Db;break a}}G=""}function H(a){return-1!=G.indexOf(a)}
;function Eb(){}
;function Fb(a){Fb[" "](a);return a}
Fb[" "]=La;var Gb=H("Opera"),Hb=H("Trident")||H("MSIE"),Ib=H("Edge"),Jb=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Kb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");function Lb(){var a=A.document;return a?a.documentMode:void 0}
var Mb;a:{var Nb="",Ob=function(){var a=G;if(Jb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ib)return/Edge\/([\d\.]+)/.exec(a);if(Hb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kb)return/WebKit\/(\S+)/.exec(a);if(Gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ob&&(Nb=Ob?Ob[1]:"");if(Hb){var Pb=Lb();if(null!=Pb&&Pb>parseFloat(Nb)){Mb=String(Pb);break a}}Mb=Nb}var Qb=Mb,Rb={},Sb;if(A.document&&Hb){var Tb=Lb();Sb=Tb?Tb:parseInt(Qb,10)||void 0}else Sb=void 0;var Ub=Sb;var Vb=H("Firefox")||H("FxiOS"),Wb=H("iPhone")&&!H("iPod")&&!H("iPad")||H("iPod"),Xb=H("iPad");var Yb={},Zb=null;var I=window;function $b(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function ac(a,b){b||(b={});b[lc(a)]=!0;var c=a.stack||"",d=a.Ma;d&&!b[lc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=ac(d,b));return c}
function lc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var bc={};function mc(a){this.f=a||{cookie:""}}
r=mc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ua;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ob(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.f.cookie};
r.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ob(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nc=new mc("undefined"==typeof document?null:document);function oc(a,b){this.width=a;this.height=b}
r=oc.prototype;r.clone=function(){return new oc(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var rc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sc(a){return a?decodeURI(a):a}
function J(a){return sc(a.match(rc)[3]||null)}
function tc(a){var b=a.match(rc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function uc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)uc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function vc(a){var b=[],c;for(c in a)uc(c,a[c],b);return b.join("&")}
var wc=/#|$/;function xc(a){var b=yc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function zc(){var a=[];xc(function(b){a.push(b)});
return a}
var yc={ya:"allow-forms",za:"allow-modals",Aa:"allow-orientation-lock",Ba:"allow-pointer-lock",Ca:"allow-popups",Da:"allow-popups-to-escape-sandbox",Ea:"allow-presentation",Fa:"allow-same-origin",Ga:"allow-scripts",Ha:"allow-top-navigation",Ia:"allow-top-navigation-by-user-activation"},Ac=fb(function(){return zc()});
function Bc(){var a=pc(),b={};F(Ac(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Cc(){this.i=this.i;this.j=this.j}
Cc.prototype.i=!1;Cc.prototype.dispose=function(){this.i||(this.i=!0,this.J())};
Cc.prototype.J=function(){if(this.j)for(;this.j.length;)this.j.shift()()};var Dc={};function Ec(){}
function Fc(a,b){if(b!==Dc)throw Error("Bad secret");this.f=a}
qa(Fc,Ec);Fc.prototype.toString=function(){return this.f};new Fc("about:blank",Dc);new Fc("about:invalid#zTSz",Dc);var Gc=(new Date).getTime();function Hc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ic(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],x=e[3],la=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var K=x^v&(w^x);var ya=1518500249}else K=v^w^x,ya=1859775393;else 60>p?(K=v&w|x&(v|w),ya=2400959708):(K=v^w^x,ya=3395469782);K=((n<<5|n>>>27)&4294967295)+K+la+ya+q[p]&4294967295;la=x;x=w;w=(v<<30|v>>>2)&4294967295;v=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+la&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var v=24;0<=v;v-=8)n[q++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,la:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Jc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Kc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Kc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Kc(a){var b=Ic();b.update(a);return b.la().toLowerCase()}
;function Lc(a){var b=Hc(String(A.location.href)),c;(c=A.__SAPISID||A.__APISID||A.__OVERRIDE_SID)?c=!0:(c=new mc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,c||(c=new mc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(A.location.href);return d&&c&&b?[b,Jc(Hc(d),
c,a||null)].join(" "):null}return null}
;function Mc(){this.h=[];this.f=-1}
Mc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.f=-1)};
Mc.prototype.get=function(a){return!!this.h[a]};
function Nc(a){-1==a.f&&(a.f=$a(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Oc(a,b){this.i=a;this.j=b;this.h=0;this.f=null}
Oc.prototype.get=function(){if(0<this.h){this.h--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Pc(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.f,a.f=b)}
;function Qc(a){A.setTimeout(function(){throw a;},0)}
var Rc;function Sc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=pc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.U;c.U=null;e()}};
return function(e){d.next={U:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Tc(){this.h=this.f=null}
var Vc=new Oc(function(){return new Uc},function(a){a.reset()});
Tc.prototype.add=function(a,b){var c=Vc.get();c.set(a,b);this.h?this.h.next=c:this.f=c;this.h=c};
Tc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Uc(){this.next=this.scope=this.f=null}
Uc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Uc.prototype.reset=function(){this.next=this.scope=this.f=null};function Wc(a,b){Xc||Yc();Zc||(Xc(),Zc=!0);$c.add(a,b)}
var Xc;function Yc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Xc=function(){a.then(ad)}}else Xc=function(){var b=ad;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!H("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Rc||(Rc=Sc()),Rc(b)):A.setImmediate(b)}}
var Zc=!1,$c=new Tc;function ad(){for(var a;a=$c.remove();){try{a.f.call(a.scope)}catch(b){Qc(b)}Pc(Vc,a)}Zc=!1}
;function bd(){this.h=-1}
;function cd(){this.h=64;this.f=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.h;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
E(cd,bd);cd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function dd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
cd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.h,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)dd(this,a,d),d+=this.h;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.h){dd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.h){dd(this,e);f=0;break}}this.i=f;this.l+=b}};
cd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.h-(this.i-56));for(var c=this.h-1;56<=c;c--)this.m[c]=b&255,b/=256;dd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var ed="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function fd(){}
fd.prototype.next=function(){throw ed;};
fd.prototype.C=function(){return this};
function gd(a){if(a instanceof fd)return a;if("function"==typeof a.C)return a.C(!1);if(Ma(a)){var b=0,c=new fd;c.next=function(){for(;;){if(b>=a.length)throw ed;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function hd(a,b){if(Ma(a))try{F(a,b,void 0)}catch(c){if(c!==ed)throw c;}else{a=gd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ed)throw c;}}}
function id(a){if(Ma(a))return db(a);a=gd(a);var b=[];hd(a,function(c){b.push(c)});
return b}
;function jd(a,b){this.i={};this.f=[];this.j=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof jd)for(c=kd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function kd(a){ld(a);return a.f.concat()}
r=jd.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||md;ld(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function md(a,b){return a===b}
r.isEmpty=function(){return 0==this.h};
r.clear=function(){this.i={};this.j=this.h=this.f.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.h--,this.j++,this.f.length>2*this.h&&ld(this),!0):!1};
function ld(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.h++,this.f.push(a),this.j++);this.i[a]=b};
r.forEach=function(a,b){for(var c=kd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new jd(this)};
r.C=function(a){ld(this);var b=0,c=this.j,d=this,e=new fd;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw ed;var f=d.f[b++];return a?f:d.i[f]};
return e};var nd=!Hb||9<=Number(Ub),Id;
if(Id=Hb){var Jd;if(Object.prototype.hasOwnProperty.call(Rb,"9"))Jd=Rb["9"];else{for(var Kd=0,Ld=ob(String(Qb)).split("."),Md=ob("9").split("."),Nd=Math.max(Ld.length,Md.length),Od=0;0==Kd&&Od<Nd;Od++){var Pd=Ld[Od]||"",Qd=Md[Od]||"";do{var Rd=/(\d*)(\D*)(.*)/.exec(Pd)||["","","",""],Sd=/(\d*)(\D*)(.*)/.exec(Qd)||["","","",""];if(0==Rd[0].length&&0==Sd[0].length)break;Kd=Bb(0==Rd[1].length?0:parseInt(Rd[1],10),0==Sd[1].length?0:parseInt(Sd[1],10))||Bb(0==Rd[2].length,0==Sd[2].length)||Bb(Rd[2],Sd[2]);
Pd=Rd[3];Qd=Sd[3]}while(0==Kd)}Jd=Rb["9"]=0<=Kd}Id=!Jd}var Td=Id,Ud=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",La,b),A.removeEventListener("test",La,b)}catch(c){}return a}();function Vd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.h=!1}
Vd.prototype.stopPropagation=function(){this.h=!0};
Vd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Wd(a,b){Vd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(Wd,Vd);var Xd={2:"touch",3:"pen",4:"mouse"};
Wd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Jb){a:{try{Fb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Xd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&this.preventDefault()};
Wd.prototype.stopPropagation=function(){Wd.A.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Wd.prototype.preventDefault=function(){Wd.A.preventDefault.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Td)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Yd="closure_listenable_"+(1E6*Math.random()|0),Zd=0;function $d(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.N=e;this.key=++Zd;this.H=this.L=!1}
function ae(a){a.H=!0;a.listener=null;a.f=null;a.src=null;a.N=null}
;function be(a){this.src=a;this.listeners={};this.f=0}
be.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ce(a,b,d,e);-1<g?(b=a[g],c||(b.L=!1)):(b=new $d(b,this.src,f,!!d,e),b.L=c,a.push(b));return b};
be.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ce(e,b,c,d);return-1<b?(ae(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function de(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(ae(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ce(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.H&&f.listener==b&&f.capture==!!c&&f.N==d)return e}return-1}
;var ee="closure_lm_"+(1E6*Math.random()|0),fe={},ge=0;function he(a,b,c,d,e){if(d&&d.once)ie(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else c=je(c),a&&a[Yd]?a.f.add(String(b),c,!1,C(d)?!!d.capture:!!d,e):ke(a,b,c,!1,d,e)}
function ke(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=le(a);h||(a[ee]=h=new be(a));c=h.add(b,c,d,g,f);if(!c.f){d=me();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Ud||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ne(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ge++}}
function me(){var a=oe,b=nd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ie(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);else c=je(c),a&&a[Yd]?a.f.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):ke(a,b,c,!0,d,e)}
function pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=je(c),a&&a[Yd])?a.f.remove(String(b),c,d,e):a&&(a=le(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ce(b,c,d,e)),(c=-1<a?b[a]:null)&&qe(c))}
function qe(a){if("number"!==typeof a&&a&&!a.H){var b=a.src;if(b&&b[Yd])de(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ne(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ge--;(c=le(b))?(de(c,a),0==c.f&&(c.src=null,b[ee]=null)):ae(a)}}}
function ne(a){return a in fe?fe[a]:fe[a]="on"+a}
function re(a,b,c,d){var e=!0;if(a=le(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.H&&(f=se(f,d),e=e&&!1!==f)}return e}
function se(a,b){var c=a.listener,d=a.N||a.src;a.L&&qe(a);return c.call(d,b)}
function oe(a,b){if(a.H)return!0;if(!nd){var c=b||B("window.event"),d=new Wd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.h&&0<=g;g--){d.f=c[g];var h=re(c[g],f,!0,d);e=e&&h}for(g=0;!d.h&&g<c.length;g++)d.f=c[g],h=re(c[g],f,!1,d),e=e&&h}return e}return se(a,new Wd(b,this))}
function le(a){a=a[ee];return a instanceof be?a:null}
var te="__closure_events_fn_"+(1E9*Math.random()>>>0);function je(a){if("function"===typeof a)return a;a[te]||(a[te]=function(b){return a.handleEvent(b)});
return a[te]}
;function L(){Cc.call(this);this.f=new be(this);this.o=this;this.l=null}
E(L,Cc);L.prototype[Yd]=!0;L.prototype.addEventListener=function(a,b,c,d){he(this,a,b,c,d)};
L.prototype.removeEventListener=function(a,b,c,d){pe(this,a,b,c,d)};
L.prototype.dispatchEvent=function(a){var b=this.l;if(b){var c=[];for(var d=1;b;b=b.l)c.push(b),++d}b=this.o;d=a.type||a;if("string"===typeof a)a=new Vd(a,b);else if(a instanceof Vd)a.target=a.target||b;else{var e=a;a=new Vd(d,b);mb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.h&&0<=f;f--){var g=a.f=c[f];e=ue(g,d,!0,a)&&e}a.h||(g=a.f=b,e=ue(g,d,!0,a)&&e,a.h||(e=ue(g,d,!1,a)&&e));if(c)for(f=0;!a.h&&f<c.length;f++)g=a.f=c[f],e=ue(g,d,!1,a)&&e;return e};
L.prototype.J=function(){L.A.J.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ae(d[e]);delete a.listeners[c];a.f--}}this.l=null};
function ue(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.H&&g.capture==c){var h=g.listener,k=g.N||g.src;g.L&&de(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var ve=A.JSON.stringify;function we(a){this.f=0;this.o=void 0;this.j=this.h=this.i=null;this.l=this.m=!1;if(a!=La)try{var b=this;a.call(void 0,function(c){xe(b,2,c)},function(c){xe(b,3,c)})}catch(c){xe(this,3,c)}}
function ye(){this.next=this.context=this.onRejected=this.h=this.f=null;this.i=!1}
ye.prototype.reset=function(){this.context=this.onRejected=this.h=this.f=null;this.i=!1};
var ze=new Oc(function(){return new ye},function(a){a.reset()});
function Ae(a,b,c){var d=ze.get();d.h=a;d.onRejected=b;d.context=c;return d}
we.prototype.then=function(a,b,c){return Be(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
we.prototype.$goog_Thenable=!0;we.prototype.cancel=function(a){if(0==this.f){var b=new Ce(a);Wc(function(){De(this,b)},this)}};
function De(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?De(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ee(c),Fe(c,e,3,b)))}a.i=null}else xe(a,3,b)}
function Ge(a,b){a.h||2!=a.f&&3!=a.f||He(a);a.j?a.j.next=b:a.h=b;a.j=b}
function Be(a,b,c,d){var e=Ae(null,null,null);e.f=new we(function(f,g){e.h=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ce?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;Ge(a,e);return e.f}
we.prototype.B=function(a){this.f=0;xe(this,2,a)};
we.prototype.I=function(a){this.f=0;xe(this,3,a)};
function xe(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.B,f=a.I;if(d instanceof we){Ge(d,Ae(e||La,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(C(d))try{var k=d.then;if("function"===typeof k){Ie(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.f=b,a.i=null,He(a),3!=b||c instanceof Ce||Je(a,c))}}
function Ie(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function He(a){a.m||(a.m=!0,Wc(a.u,a))}
function Ee(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
we.prototype.u=function(){for(var a;a=Ee(this);)Fe(this,a,this.f,this.o);this.m=!1};
function Fe(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Ke(b,c,d);else try{b.i?b.h.call(b.context):Ke(b,c,d)}catch(e){Le.call(null,e)}Pc(ze,b)}
function Ke(a,b,c){2==b?a.h.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Je(a,b){a.l=!0;Wc(function(){a.l&&Le.call(null,b)})}
var Le=Qc;function Ce(a){Ya.call(this,a)}
E(Ce,Ya);Ce.prototype.name="cancel";function N(a){Cc.call(this);this.o=1;this.l=[];this.m=0;this.f=[];this.h={};this.u=!!a}
E(N,Cc);r=N.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.o=e+3;d.push(e);return e};
function Me(a,b,c){var d=Ne;if(a=d.h[a]){var e=d.f;(a=ab(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.P(a)}}
r.P=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.m?(this.l.push(a),this.f[a+1]=La):(c&&bb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
r.K=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Oe(this.f[g+1],this.f[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.P(c)}}return 0!=e}return!1};
function Oe(a,b,c){Wc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(F(b,this.P,this),delete this.h[a])}else this.f.length=0,this.h={}};
r.J=function(){N.A.J.call(this);this.clear();this.l.length=0};function Pe(a){this.f=a}
Pe.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ve(b))};
Pe.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pe.prototype.remove=function(a){this.f.remove(a)};function Qe(a){this.f=a}
E(Qe,Pe);function Re(a){this.data=a}
function Se(a){return void 0===a||a instanceof Re?a:new Re(a)}
Qe.prototype.set=function(a,b){Qe.A.set.call(this,a,Se(b))};
Qe.prototype.h=function(a){a=Qe.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qe.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Te(a){this.f=a}
E(Te,Qe);Te.prototype.set=function(a,b,c){if(b=Se(b)){if(c){if(c<Date.now()){Te.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Te.A.set.call(this,a,b)};
Te.prototype.h=function(a){var b=Te.A.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Te.prototype.remove.call(this,a);else return b}};function Ue(){}
;function Ve(){}
E(Ve,Ue);Ve.prototype.clear=function(){var a=id(this.C(!0)),b=this;F(a,function(c){b.remove(c)})};function We(a){this.f=a}
E(We,Ve);r=We.prototype;r.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeItem(a)};
r.C=function(a){var b=0,c=this.f,d=new fd;d.next=function(){if(b>=c.length)throw ed;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.f.clear()};
r.key=function(a){return this.f.key(a)};function Xe(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Xe,We);function Ye(a,b){this.h=a;this.f=null;if(Hb&&!(9<=Number(Ub))){Ze||(Ze=new jd);this.f=Ze.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ze.set(a,this.f));try{this.f.load(this.h)}catch(c){this.f=null}}}
E(Ye,Ve);var $e={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ze=null;function af(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return $e[b]})}
r=Ye.prototype;r.isAvailable=function(){return!!this.f};
r.set=function(a,b){this.f.setAttribute(af(a),b);bf(this)};
r.get=function(a){a=this.f.getAttribute(af(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeAttribute(af(a));bf(this)};
r.C=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new fd;d.next=function(){if(b>=c.length)throw ed;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);bf(this)};
function bf(a){try{a.f.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function cf(a,b){this.h=a;this.f=b+"::"}
E(cf,Ve);cf.prototype.set=function(a,b){this.h.set(this.f+a,b)};
cf.prototype.get=function(a){return this.h.get(this.f+a)};
cf.prototype.remove=function(a){this.h.remove(this.f+a)};
cf.prototype.C=function(a){var b=this.h.C(!0),c=this,d=new fd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.h.get(e)};
return d};var df=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",df);function ef(a){var b=arguments;1<b.length?df[b[0]]=b[1]:1===b.length&&Object.assign(df,b[0])}
function O(a,b){return a in df?df[a]:b}
;var ff=[];function gf(a){ff.forEach(function(b){return b(a)})}
function hf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jf(b),gf(b)}}:a}
function jf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ef("ERRORS",b))}
function kf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ef("ERRORS",b))}
;var lf=0;D("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++lf});var mf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function nf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in mf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
nf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
nf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
nf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=A.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ib);var of=A.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",of);
function pf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function qf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?rf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
var rf=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function sf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=pf(a,b,c,d);if(!e){e=++of.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new nf(h);if(!qc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new nf(h);
h.currentTarget=a;return c.call(a,h)};
g=hf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),rf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d]}}}
;function tf(a,b){"function"===typeof a&&(a=hf(a));return window.setTimeout(a,b)}
function uf(a){"function"===typeof a&&(a=hf(a));return window.setInterval(a,250)}
;var vf={q:!0,search_query:!0};function wf(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function xf(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?eb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){vf.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],jf(k))}}return c}
function yf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=xf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=vc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var zf={};function Af(a){return zf[a]||(zf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Bf={},Cf=[],Ne=new N,Df={};function Ef(){for(var a=u(Cf),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ff(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Af(b)]:a.getAttribute("data-"+b):null;return c}
function Gf(a,b){Ne.K.apply(Ne,arguments)}
;function Hf(a){this.h=a||{};this.i=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function P(a,b){for(var c=[a.h,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function If(a,b,c){Jf||(Jf={},sf(window,"message",Sa(a.j,a)));Jf[c]=b}
Hf.prototype.j=function(a){if(a.origin==P(this,"host")||a.origin==P(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.i=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Jf[b.id])a.u=!0,a.u&&(F(a.o,a.T,a),a.o.length=0),a.ea(b)}};
var Jf=null;function S(a){a=Kf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Lf(a,b){var c=Kf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Kf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Mf(){}
function Nf(a){var b=5E3;isNaN(b)&&(b=void 0);var c=B("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():tf(a,b||0)}
;function Of(){}
qa(Of,Mf);Of.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Of.f=void 0;Of.h=function(){Of.f||(Of.f=new Of)};
Of.h();var Pf=A.ytPubsubPubsubInstance||new N,Qf=A.ytPubsubPubsubSubscribedKeys||{},Rf=A.ytPubsubPubsubTopicToKeys||{},Sf=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.P;N.prototype.publish=N.prototype.K;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",Pf);D("ytPubsubPubsubTopicToKeys",Rf);D("ytPubsubPubsubIsSynchronous",Sf);D("ytPubsubPubsubSubscribedKeys",Qf);var xg=window,T=xg.ytcsi&&xg.ytcsi.now?xg.ytcsi.now:xg.performance&&xg.performance.timing&&xg.performance.now&&xg.performance.timing.navigationStart?function(){return xg.performance.timing.navigationStart+xg.performance.now()}:function(){return(new Date).getTime()};var yg=Lf("initial_gel_batch_timeout",1E3),zg=Math.pow(2,16)-1,Ag=null,Bg=0,Cg=void 0,Dg=0,Eg=0,Fg=0,Gg=!0,Hg=A.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Hg);var Ig=A.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Ig);function Jg(a){a=void 0===a?!1:a;return new we(function(b){window.clearTimeout(Dg);window.clearTimeout(Eg);Eg=0;Cg&&Cg.isReady()?(Kg(b,a),Hg.clear()):(Lg(),b())})}
function Lg(){S("web_gel_timeout_cap")&&!Eg&&(Eg=tf(Jg,6E4));window.clearTimeout(Dg);var a=O("LOGGING_BATCH_TIMEOUT",Lf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Gg&&(a=yg);Dg=tf(Jg,a)}
function Kg(a,b){var c=Cg;b=void 0===b?!1:b;for(var d=Math.round(T()),e=Hg.size,f=u(Hg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:Mg(c.f||Ng())});h.events=k;(k=Ig[g])&&Og(h,g,k);delete Ig[g];Pg(h,d);Qg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Bg=Math.round(T()-d)},
onError:function(){e--;e||a()},
xa:b});Gg=!1}}
function Pg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*zg/2));d++;d>zg&&(d=1);ef("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Ag&&Bg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Ag,roundtripMs:String(Bg)});Ag=c;Bg=0}}
function Og(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Rg=A.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Rg);function Sg(a){var b=Tg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Ug(b),Vg(b));b.ca_type="image";a&&(b.bid=a);return b}
function Ug(a){var b={};b.dt=Gc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.h.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function Vg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new oc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new oc(-12245933,-12245933)}k=m;m={};l=new Mc;A.SVGElement&&
A.document.createElementNS&&l.set(0);c=Bc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);A.crypto&&A.crypto.subtle&&l.set(3);A.TextDecoder&&A.TextEncoder&&l.set(4);l=Nc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.h;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!I.WebGLRenderingContext,m}
var Tg=new function(){var a=window.document;this.f=window;this.h=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return wf(Sg(a))});var Wg="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Xg(){if(!Wg)return null;var a=Wg();return"open"in a?a:null}
;var Yg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Zg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
$g=!1;
function ah(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(rc)[1]||null,e=J(a);d&&e?(d=c,c=a.match(rc),d=d.match(rc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(c)==e&&(Number(c.match(rc)[4]||null)||null)==(Number(a.match(rc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in Yg)e=O(Yg[f]),!e||!c&&J(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!J(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!J(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!J(a))b["X-YouTube-Ad-Signals"]=wf(Sg(void 0));return b}
function bh(a){var b=window.location.search,c=J(a),d=sc(a.match(rc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=xf(b),f={};F(Zg,function(g){e[g]&&(f[g]=e[g])});
return yf(a,f||{},!1)}
function ch(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=dh(a,b);var d=eh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||A;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.R&&b.R.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=tf(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||A))},b.timeout))}else fh(a,b)}
function fh(a,b){var c=b.format||"JSON";a=dh(a,b);var d=eh(a,b),e=!1,f=gh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=hh(a,c,k,b.Na);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.R&&b.R.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.O&&0<b.timeout){var g=b.O;var h=tf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function dh(a,b){b.Ra&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.wa;d&&(d[c]&&delete d[c],a=yf(a,d||{},!0));return a}
function eh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.v,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Qa||J(a)&&!b.withCredentials&&J(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.v&&b.v[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=xf(e),mb(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):vc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!$g&&c&&"POST"!=b.method&&
($g=!0,jf(Error("AJAX request with postData should use POST")));return e}
function hh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,kf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ih(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=jh(g)})}d&&kh(e);
return e}
function kh(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===nb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(g){A.console&&A.console.error(g.message)}nb=e}else nb=e}(e=nb)&&e.createHTML(d);a[c]=new Eb}else kh(a[b])}}
function ih(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function jh(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function gh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&hf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Xg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=bh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ah(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function lh(){for(var a={},b=u(Object.entries(xf(O("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function mh(){return"INNERTUBE_API_KEY"in df&&"INNERTUBE_API_VERSION"in df}
function Ng(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),ma:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:O("INNERTUBE_CONTEXT_HL",void 0),oa:O("INNERTUBE_CONTEXT_GL",void 0),qa:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Mg(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,lh());return b}
function nh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ka||O("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Ja:b=Lc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function oh(a){a=Object.assign({},a);delete a.Authorization;var b=Lc();if(b){var c=new cd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ma(b);void 0===c&&(c=0);if(!Zb){Zb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Yb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Zb[k]&&(Zb[k]=h)}}}c=Yb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function ph(){var a=new Xe;(a=a.isAvailable()?new cf(a,"yt.innertube"):null)||(a=new Ye("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Te(a):null;this.h=document.domain||window.location.hostname}
ph.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ve(b))}catch(f){return}else e=escape(b);b=this.h;nc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ph.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=nc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ph.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.h;nc.remove(""+a,"/",void 0===b?"youtube.com":b)};var qh;function rh(){qh||(qh=new ph);return qh}
function sh(a,b,c,d){if(d)return null;d=rh().get("nextId",!0)||1;var e=rh().get("requests",!0)||{};e[d]={method:a,request:b,authState:oh(c),requestTime:Math.round(T())};rh().set("nextId",d+1,86400,!0);rh().set("requests",e,86400,!0);return d}
function th(a){var b=rh().get("requests",!0)||{};delete b[a];rh().set("requests",b,86400,!0)}
function uh(a){var b=rh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=oh(nh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Qg(a,d.method,e,{}));delete b[c]}}rh().set("requests",b,86400,!0)}}
;var vh=[],wh=!1;function xh(a,b){wh||(vh.push({type:"EVENT",eventType:a,payload:b}),10<vh.length&&vh.shift())}
;function yh(a){if(!a)throw Error();throw a;}
function zh(a){return a}
function U(a){var b=this;this.h=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.h(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
U.all=function(a){return new U(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={G:0};f.G<a.length;f={G:f.G},++f.G)Ah(U.resolve(a[f.G]).then(function(g){return function(h){d[g.G]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
U.resolve=function(a){return new U(function(b,c){a instanceof U?a.then(b,c):b(a)})};
U.reject=function(a){return new U(function(b,c){c(a)})};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:zh,e=null!==b&&void 0!==b?b:yh;return new U(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Bh(c,c,d,f,g)}),c.onRejected.push(function(){Ch(c,c,e,f,g)})):"FULFILLED"===c.state.status?Bh(c,c,d,f,g):"REJECTED"===c.state.status&&Ch(c,c,e,f,g)})};
function Ah(a,b){a.then(void 0,b)}
function Bh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?Dh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ch(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?Dh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?Dh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Eh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fh(a){return new Promise(function(b,c){Eh(a,b,c)})}
function X(a){return new U(function(b,c){Eh(a,b,c)})}
;function Gh(a,b){return new U(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Hh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
qa(Hh,Error);var Ih={},Jh=(Ih.AUTH_INVALID="No user identifier specified.",Ih.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ih.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ih.MISSING_OBJECT_STORE="Object store not created.",Ih.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Ih.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ih.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ih);
function Kh(a,b,c){b=void 0===b?{}:b;c=void 0===c?Jh[a]:c;Hh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Kh.prototype);wh||(vh.push({type:"ERROR",payload:this}),10<vh.length&&vh.shift())}
qa(Kh,Hh);function Lh(a,b,c){Kh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,Lh.prototype)}
qa(Lh,Kh);function Mh(a){Kh.call(this,"MISSING_OBJECT_STORE",{Sa:a},Jh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Mh.prototype)}
qa(Mh,Kh);function Nh(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=Math.round(T());this.h=!1}
r=Nh.prototype;r.add=function(a,b,c){return Oh(this,[a],"readwrite",function(d){return Ph(d,a).add(b,c)})};
r.clear=function(a){return Oh(this,[a],"readwrite",function(b){return Ph(b,a).clear()})};
r.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Oh(this,[a],"readonly",function(c){return Ph(c,a).count(b)})};
r["delete"]=function(a,b){return Oh(this,[a],"readwrite",function(c){return Ph(c,a)["delete"](b)})};
r.get=function(a,b){return Oh(this,[a],"readwrite",function(c){return Ph(c,a).get(b)})};
function Oh(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new Qh(e);d=Rh(e,d);Sh(a,d,b.join(),c);return d}
function Sh(a,b,c,d){Xa(a,function f(){var g,h,k=this,l,m,n;return Ha(f,function(q){if(1==q.f)return g=Math.round(T()),wa(q,2),y(q,b,4);if(2!=q.f)h=Math.round(T()),Th(k,!0,c,h-g),q.f=0,q.m=0;else{l=xa(q);m=Math.round(T());var p=l,v=k.f.name,w=k.transactionCount,x;"QuotaExceededError"===p.name?x=new Kh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:v,mode:d}):"UnknownError"===p.name&&(x=new Kh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:v,mode:d}));x&&xh("QUOTA_EXCEEDED",{dbName:v,objectStoreNames:c,
transactionCount:w,transactionMode:d});n=m-g;l instanceof Lh&&(xh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.i}),k.h=!0);Th(k,!1,c,n);q.f=0}})})}
function Th(a,b,c,d){xh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.h,duration:d,isSuccessful:b})}
function Uh(a){this.f=a}
r=Uh.prototype;r.add=function(a,b){return X(this.f.add(a,b))};
r.clear=function(){return X(this.f.clear()).then(function(){})};
r.count=function(a){return X(this.f.count(a))};
function Vh(a,b){return Wh(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Vh(this,a):X(this.f["delete"](a))};
r.get=function(a){return X(this.f.get(a))};
r.index=function(a){return new Xh(this.f.index(a))};
r.getName=function(){return this.f.name};
function Wh(a,b,c){a=a.f.openCursor(b.query,b.direction);return Yh(a).then(function(d){return Gh(d,c)})}
function Qh(a){var b=this;this.f=a;this.h=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=Lh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function Rh(a,b){var c=new Promise(function(d,e){Ah(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Qh.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Kh("EXPLICIT_ABORT");};
Qh.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function Ph(a,b){var c=a.f.objectStore(b),d=a.h.get(c);d||(d=new Uh(c),a.h.set(c,d));return d}
function Xh(a){this.f=a}
Xh.prototype.count=function(a){return X(this.f.count(a))};
Xh.prototype["delete"]=function(a){return Zh(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Xh.prototype.get=function(a){return X(this.f.get(a))};
Xh.prototype.getKey=function(a){return X(this.f.getKey(a))};
function Zh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Yh(a).then(function(d){return Gh(d,c)})}
function $h(a,b){this.request=a;this.cursor=b}
function Yh(a){return X(a).then(function(b){return null===b?null:new $h(a,b)})}
r=$h.prototype;r.advance=function(a){this.cursor.advance(a);return Yh(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Yh(this.request)};
r["delete"]=function(){return X(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return X(this.cursor.update(a))};function ai(a,b,c){return Xa(this,function e(){var f,g,h,k,l,m,n,q,p,v;return Ha(e,function(w){if(1==w.f)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.va,m=g.upgrade,n=g.closed,p=function(){q||(q=new Nh(f.result,{closed:n}));return q},f.addEventListener("upgradeneeded",function(x){if(null===x.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");x.dataLoss&&"none"!==x.dataLoss&&xh("IDB_DATA_CORRUPTED",{reason:x.dataLossMessage||"unknown reason",dbName:a});var la=p(),K=new Qh(f.transaction);m&&m(la,x.oldVersion,x.newVersion,K)}),h&&f.addEventListener("blocked",function(){h()}),y(w,Fh(f),2);
v=w.l;k&&v.addEventListener("versionchange",function(){k(p())});
v.addEventListener("close",function(){xh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return w["return"](p())})})}
function bi(a,b,c){c=void 0===c?{}:c;return ai(a,b,c)}
function ci(a,b){b=void 0===b?{}:b;return Xa(this,function d(){var e,f,g;return Ha(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return y(h,Fh(e),0)})})}
;var di=Wb||Xb;function ei(a){this.name="YtIdbMeta";this.options=a;this.h=!1}
function fi(a,b,c){c=void 0===c?{}:c;return bi(a,b,c)}
ei.prototype["delete"]=function(a){a=void 0===a?{}:a;return ci(this.name,a)};
ei.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,va:c,upgrade:this.options.upgrade},e=function(){return Xa(a,function g(){var h=this,k,l,m;return Ha(g,function(n){switch(n.f){case 1:return wa(n,2),y(n,fi(h.name,h.options.version,d),4);case 4:k=n.l;if(!Vb){n.D(5);break}a:{var q=u(Object.keys(h.options.ua));for(var p=q.next();!p.done;p=q.next())if(p=p.value,!k.f.objectStoreNames.contains(p)){q=p;break a}q=void 0}l=q;if(void 0===l){n.D(5);break}if(!Vb||h.h){n.D(7);break}h.h=!0;return y(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new Mh(l);
case 5:return n["return"](k);case 2:m=xa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](fi(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.f=b=e()}return this.f};var gi=new ei({ua:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function hi(a){return Xa(this,function c(){var d;return Ha(c,function(e){if(1==e.f)return y(e,gi.open(),2);d=e.l;return e["return"](Oh(d,["databases"],"readwrite",function(f){var g=Ph(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.f.put(a,void 0)).then(function(){})})}))})})}
function ii(){return Xa(this,function b(){var c;return Ha(b,function(d){if(1==d.f)return y(d,gi.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new L;var ji;
function ki(){return Xa(this,function b(){var c,d,e;return Ha(b,function(f){switch(f.f){case 1:var g;if(g=di)g=/WebKit\/([0-9]+)/.exec(G),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(G),g=!(g&&602<=parseInt(g[1],10)));if(g&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Ib)return f["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return f["return"](!1)}catch(h){return f["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f["return"](!1);if(!S("ytidb_new_supported_check_with_delete")){f.D(2);
break}wa(f,3);return y(f,ii(),5);case 5:return f["return"](!0);case 3:return xa(f),f["return"](!1);case 2:if(!S("ytidb_new_supported_check_with_add_and_delete")){f.D(6);break}wa(f,7);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return y(f,hi(d),9);case 9:return y(f,ii(),10);case 10:return f["return"](!0);case 7:return xa(f),f["return"](!1);case 6:return wa(f,11,12),y(f,bi("yt-idb-test-do-not-use"),14);case 14:if(e=f.l,!e)return f["return"](!1);
case 12:f.B=[f.h];f.m=0;f.j=0;if(e)try{e.close()}catch(h){}g=f.B.splice(0)[0];(g=f.h=f.h||g)?g.X?f.f=f.m||f.j:void 0!=g.D&&f.j<g.D?(f.f=g.D,f.h=null):f.f=f.j:f.f=13;break;case 11:return xa(f),f["return"](!1);case 13:return f["return"](!0)}})})}
function li(){if(void 0!==ji)return ji;var a=T();wh=!0;return ji=ki().then(function(b){wh=!1;xh("IS_SUPPORTED_COMPLETED",{duration:Math.round(T()-a),isSupported:b});return b})}
;function mi(){L.call(this);this.m=!1;this.h=ni();oi(this);pi(this)}
qa(mi,L);function ni(){var a=window.navigator.onLine;return void 0===a?!0:a}
function pi(a){window.addEventListener("online",function(){a.h=!0;qi(a)})}
function oi(a){window.addEventListener("offline",function(){a.h=!1;qi(a)})}
function qi(a){a.m&&(kf(new Hh("NetworkStatusManager state did not match poll",T()-0)),a.m=!1)}
;function ri(a,b){b=void 0===b?{}:b;li().then(function(){mi.f||(mi.f=new mi);mi.f.h!==ni()&&kf(new Hh("NetworkStatusManager isOnline does not match window status"));fh(a,b)})}
function si(a,b){b=void 0===b?{}:b;li().then(function(){fh(a,b)})}
;function ti(a){var b=this;this.f=null;a?this.f=a:mh()&&(this.f=Ng());Nf(function(){uh(b)})}
ti.prototype.isReady=function(){!this.f&&mh()&&(this.f=Ng());return!!this.f};
function Qg(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&kf(new Hh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Hh("innertube xhrclient not ready",b,c,d);jf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",v:c,da:"JSON",O:function(){d.O()},
ba:d.O,onSuccess:function(n,q){if(d.onSuccess)d.onSuccess(q)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,q){if(d.onError)d.onError(q)},
Ta:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.qa)&&(g=e);var h=a.f.sa||!1,k=nh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ra&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=yf(""+g+e,l||{},!0);li().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var q=sh(b,
c,k,h);if(q){var p=f.onSuccess,v=f.aa;f.onSuccess=function(w,x){th(q);p(w,x)};
c.aa=function(w,x){th(q);v(w,x)}}}try{S("use_fetch_for_op_xhr")?ch(m,f):S("networkless_gel")&&d.retry?(f.method="POST",!d.xa&&S("nwl_send_fast_on_unload")?si(m,f):ri(m,f)):(f.method="POST",f.v||(f.v={}),fh(m,f))}catch(w){if("InvalidAccessError"==w.name)q&&(th(q),q=0),kf(Error("An extension is blocking network request."));
else throw w;}q&&Nf(function(){uh(a)})})}
;var ui=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
S:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
S:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function vi(){this.f=[];this.h=[]}
var wi;var xi=new N;function yi(a,b,c,d){c+="."+a;a=zi(b);d[c]=a;return c.length+a.length}
function zi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Ai=new Set,Bi=0,Ci=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.m=this.f=this.h=null;this.l=Na(this);this.i=0;this.u=!1;this.o=[];this.j=null;this.B=c;this.I={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?tc(a.src):"https://www.youtube.com"),this.h=new Hf(b),c||(b=Di(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Na(this.f)),Bf[this.f.id]=this,window.postMessage){this.j=new N;Ei(this);b=P(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Df)Fi(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
r.ta=function(){return this.f};
r.ea=function(a){Gi(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Hi(this,a);return this};
function Fi(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.B==c[0]&&Hi(a,d)}}
r.destroy=function(){this.f.id&&(Bf[this.f.id]=null);var a=this.j;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Jf&&(Jf[this.l]=null);this.h=null;a=this.f;for(var c in ib)ib[c][0]==a&&qf(c);this.m=this.f=null};
r.V=function(){return{}};
function Ii(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.T(b):a.o.push(b)}
function Gi(a,b,c){a.j.i||(c={target:a,data:c},a.j.K(b,c),Gf(a.B+"."+b,c))}
function Di(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+P(a.h,"title"));(d=P(a.h,"width"))&&c.setAttribute("width",d);(d=P(a.h,"height"))&&c.setAttribute("height",d);var h=
a.V();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.l;window.location.href&&F(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(wc);b:{var n=0;for(var q=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var p=l.charCodeAt(n-1);if(38==p||63==p)if(p=l.charCodeAt(n+q),!p||61==p||38==p||35==p)break b;n+=q+1}n=-1}if(0>n)l=null;else{q=l.indexOf("&",n);if(0>q||q>m)q=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
q-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=P(a.h,"host")+("/embed/"+P(a.h,"videoId"))+"?"+vc(h);return c}
r.ca=function(){this.f&&this.f.contentWindow?this.T({event:"listening"}):window.clearInterval(this.i)};
function Ei(a){If(a.h,a,a.l);a.i=uf(Sa(a.ca,a));sf(a.f,"load",Sa(function(){window.clearInterval(this.i);this.i=uf(Sa(this.ca,this))},a))}
function Hi(a,b){a.I[b]||(a.I[b]=!0,Ii(a,"addEventListener",[b]))}
r.T=function(a){a.id=this.l;a.channel="widget";var b=ve(a),c=this.h,d=tc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.i?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ua){if(Ua.name&&"SyntaxError"==Ua.name){if(!(Ua.message&&0<Ua.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Ua;h=void 0===h?{}:h;h.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(S("console_log_js_exceptions")){var n=k,q=[];q.push("Name: "+n.name);q.push("Message: "+n.message);n.hasOwnProperty("params")&&q.push("Error Params: "+JSON.stringify(n.params));q.push("File name: "+n.fileName);q.push("Stacktrace: "+n.stack);window.console.log(q.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=Bi)&&0!==k.sampleWeight){var p=k,v=l,w=$b(p),x=w.message||"Unknown Error",la=w.name||"UnknownError",K=w.stack||
p.f||"Not available";if(S("kevlar_js_fixes")&&K.startsWith(la+": "+x)){var ya=K.split("\n");ya.shift();K=ya.join("\n")}var Ni=w.lineNumber||"Not available",Oi=w.fileName||"Not available",Pi=K,cc=void 0,da=p,Q=v;if(da.hasOwnProperty("args")&&da.args&&da.args.length)for(var sa=0,dc=0;dc<da.args.length;dc++){var R=da.args[dc],Ea="params."+dc;sa+=Ea.length;if(R)if(Array.isArray(R)){for(var Qi=Q,od=sa,pb=0;pb<R.length&&!(R[pb]&&(od+=yi(pb,R[pb],Ea,Qi),500<od));pb++);sa=od}else if("object"===typeof R){var ec=
void 0,Ri=Q,pd=sa;for(ec in R)if(R[ec]&&(pd+=yi(ec,R[ec],Ea,Ri),500<pd))break;sa=pd}else Q[Ea]=zi(R),sa+=Q[Ea].length;else Q[Ea]=zi(R),sa+=Q[Ea].length;if(500<=sa)break}else if(da.hasOwnProperty("params")&&da.params){var fc=da.params;if("object"===typeof da.params){var Tf=0;for(cc in fc)if(fc[cc]){var Uf="params."+cc,Vf=zi(fc[cc]);Q[Uf]=Vf;Tf+=Uf.length+Vf.length;if(500<Tf)break}}else Q.params=zi(fc)}navigator.vendor&&!Q.hasOwnProperty("vendor")&&(Q.vendor=navigator.vendor);var qd={message:x,name:la,
lineNumber:Ni,fileName:Oi,stack:Pi,params:Q},Wf=Number(p.columnNumber);isNaN(Wf)||(qd.lineNumber=qd.lineNumber+":"+Wf);for(var V,Fa=qd,Xf=u(ui),rd=Xf.next();!rd.done;rd=Xf.next()){var sd=rd.value;if(sd.S[Fa.name])for(var Yf=u(sd.S[Fa.name]),td=Yf.next();!td.done;td=Yf.next()){var Zf=td.value,gc=Fa.message.match(Zf.regexp);if(gc){Fa.params["error.original"]=gc[0];for(var ud=Zf.groups,$f={},Va=0;Va<ud.length;Va++)$f[ud[Va]]=gc[Va+1],Fa.params["error."+ud[Va]]=gc[Va+1];Fa.message=sd.Z($f);break}}}V=
Fa;window.yterr&&"function"===typeof window.yterr&&window.yterr(V);if(!(Ai.has(V.message)||0<=V.stack.indexOf("/YouTubeCenter.js")||0<=V.stack.indexOf("/mytube.js"))){"ERROR"===m?xi.K("handleError",V):"WARNING"===m&&xi.K("handleWarning",V);if(S("kevlar_gel_error_routing")){var hc=void 0,ag=m,M=V;a:{for(var bg=u(Ci),vd=bg.next();!vd.done;vd=bg.next()){var cg=G;if(cg&&0<=cg.toLowerCase().indexOf(vd.value.toLowerCase())){var dg=!0;break a}}dg=!1}if(!dg){var qb={stackTrace:M.stack};M.fileName&&(qb.filename=
M.fileName);var ea=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];0!==ea.length&&(1!==ea.length||isNaN(Number(ea[0]))?2!==ea.length||isNaN(Number(ea[0]))||isNaN(Number(ea[1]))||(qb.lineNumber=Number(ea[0]),qb.columnNumber=Number(ea[1])):qb.lineNumber=Number(ea[0]));wi||(wi=new vi);var ic=wi;var Si=M.message,Ti=M.name;a:{for(var eg=u(ic.h),wd=eg.next();!wd.done;wd=eg.next()){var fg=wd.value;if(M.message&&M.message.match(fg.f)){var xd=fg.weight;break a}}for(var gg=u(ic.f),yd=gg.next();!yd.done;yd=
gg.next()){var hg=yd.value;if(hg.f(M)){xd=hg.weight;break a}}xd=1}var zd={level:"ERROR_LEVEL_UNKNOWN",message:Si,errorClassName:Ti,sampleWeight:xd};"ERROR"===ag?zd.level="ERROR_LEVEL_ERROR":"WARNING"===ag&&(zd.level="ERROR_LEVEL_WARNNING");var Ui={isObfuscated:!0,browserStackInfo:qb},Wa={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(Wa.experimentIds=O("FEXP_EXPERIMENTS"));Wa.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+ic.h.length+"&cb="+ic.f.length},{key:"client.params.serviceWorker",
value:"false"}];var Ad=M.params;if(Ad)for(var ig=u(Object.keys(Ad)),Bd=ig.next();!Bd.done;Bd=ig.next()){var jg=Bd.value;Wa.kvPairs.push({key:"client."+jg,value:String(Ad[jg])})}var kg=O("SERVER_NAME",void 0),lg=O("SERVER_VERSION",void 0);kg&&lg&&(Wa.kvPairs.push({key:"server.name",value:kg}),Wa.kvPairs.push({key:"server.version",value:lg}));var Vi={errorMetadata:Wa,stackTrace:Ui,logMessage:zd};hc=void 0===hc?{}:hc;var mg=ti;O("ytLoggingEventsDefaultDisabled",!1)&&ti==ti&&(mg=null);var Wi=mg,W=hc;
W=void 0===W?{}:W;var rb={};rb.eventTimeMs=Math.round(W.timestamp||T());rb.clientError=Vi;var ng=B("_lact",window);var og=null==ng?-1:Math.max(Date.now()-ng,0);rb.context={lastActivityMs:String(W.timestamp||!isFinite(og)?-1:og)};if(S("log_sequence_info_on_gel_web")&&W.fa){var Xi=rb.context,sb=W.fa;Rg[sb]=sb in Rg?Rg[sb]+1:0;Xi.sequence={index:Rg[sb],groupKey:sb};W.Pa&&delete Rg[W.fa]}var Yi=rb,jc=W.Oa,pg=Wi,Cd="";if(jc){var kc=jc,Dd={};kc.videoId?Dd.videoId=kc.videoId:kc.playlistId&&(Dd.playlistId=
kc.playlistId);Ig[jc.token]=Dd;Cd=jc.token}var Ed=Hg.get(Cd)||[];Hg.set(Cd,Ed);Ed.push(Yi);pg&&(Cg=new pg);var Zi=Lf("web_logging_max_batch")||100,qg=T();Ed.length>=Zi?Jg(!0):10<=qg-Fg&&(Lg(),Fg=qg);Jg()}}if(!S("suppress_error_204_logging")){var Fd,Ga=V,tb=Ga.params||{},ta={wa:{a:"logerror",t:"jserror",type:Ga.name,msg:Ga.message.substr(0,250),line:Ga.lineNumber,level:m,"client.name":tb.name},v:{url:O("PAGE_NAME",window.location.href),file:Ga.fileName},method:"POST"};tb.version&&(ta["client.version"]=
tb.version);if(ta.v){Ga.stack&&(ta.v.stack=Ga.stack);for(var rg=u(Object.keys(tb)),Gd=rg.next();!Gd.done;Gd=rg.next()){var sg=Gd.value;ta.v["client."+sg]=tb[sg]}if(Fd=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var tg=u(Object.keys(Fd)),Hd=tg.next();!Hd.done;Hd=tg.next()){var ug=Hd.value;ta.v[ug]=Fd[ug]}var vg=O("SERVER_NAME",void 0),wg=O("SERVER_VERSION",void 0);vg&&wg&&(ta.v["server.name"]=vg,ta.v["server.version"]=wg)}fh(O("ECATCHER_REPORT_HOST","")+"/error_204",ta)}Ai.add(V.message);
Bi++}}}}}else throw Ua;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Ji(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ki(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.F={};this.playerInfo={}}
qa(Z,Y);r=Z.prototype;r.V=function(){var a=P(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=P(this.h,"embedConfig")){if(C(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(C(a))for(var c in a)this.F[c]=a[c];break;case "infoDelivery":Li(this,a);break;case "initialDelivery":window.clearInterval(this.i);this.playerInfo={};this.F={};Mi(this,a.apiInterface);Li(this,a);break;default:Gi(this,b,a)}};
function Li(a,b){if(C(b))for(var c in b)a.playerInfo[c]=b[c]}
function Mi(a,b){F(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Ji(c)?this[c]=function(){this.playerInfo={};
this.F={};Ii(this,c,arguments);return this}:Ki(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ii(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(P(this.h,"width"),10),b=parseInt(P(this.h,"height"),10),c=P(this.h,"host")+("/embed/"+P(this.h,"videoId"));Ab.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ub,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(vb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(wb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(xb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(yb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(zb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.F.namespaces?a?this.F[a].options||[]:this.F.namespaces||[]:[]};
r.getOption=function(a,b){if(this.F.namespaces&&a&&b)return this.F[a][b]};
function $i(a){if("iframe"!=a.tagName.toLowerCase()){var b=Ff(a,"videoid");b&&(b={videoId:b,width:Ff(a,"width"),height:Ff(a,"height")},new Z(a,b))}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Bf[a]});
D("YT.scan",Ef);D("YT.subscribe",function(a,b,c){Ne.subscribe(a,b,c);Df[a]=!0;for(var d in Bf)Fi(Bf[d],a)});
D("YT.unsubscribe",function(a,b,c){Me(a,b,c)});
D("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ta;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Cf.push(function(a){var b=a;b||(b=document);a=db(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Za(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=db(b);F(cb(a,b),$i)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ef();var aj=A.onYTReady;aj&&aj();var bj=A.onYouTubeIframeAPIReady;bj&&bj();var cj=A.onYouTubePlayerAPIReady;cj&&cj();}).call(this);
