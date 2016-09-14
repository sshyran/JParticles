/**
 * Particleground.js v1.0.0 (https://github.com/Barrior/Particleground.js)
 * Copyright 2016 Barrior <Barrior@qq.com>
 * Licensed under the MIT (https://opensource.org/licenses/mit-license.php)
 */
!function(t){"object"==typeof module&&module.exports?module.exports=t():t()}(function(){"use strict";function t(t){return parseInt(t,10)}function n(t){return t.replace(z,"")}function e(){return"#"+b().toString(16).slice(-6)}function o(t,n){return b()*(t-n)+n}function i(){var t,n,e=arguments,o=e[0]||{},r=!1,c=e.length,a=1;for("boolean"==typeof o&&(r=o,o=e[1]||{},a++);a<c;a++)for(n in e[a])t=e[a][n],r&&(u(t)||F(t))?o[n]=i(r,F(t)?[]:{},t):o[n]=t;return o}function r(t,n){return toString.call(t)===n}function c(t){return r(t,"[object Function]")}function u(t){return r(t,"[object Object]")}function a(t){return!(!t||1!==t.nodeType)}function f(n,e){var o=C.getComputedStyle(n)[e];return E.test(o)?t(o):o}function s(t){for(var n=t.offsetLeft||0,e=t.offsetTop||0;t=t.offsetParent;)n+=t.offsetLeft,e+=t.offsetTop;return{left:n,top:e}}function d(t,n,e){t.addEventListener(n,e)}function l(t,n,e){t.removeEventListener(n,e)}function h(t,n,e,o){q&&(t.container=a(e)?e:A.querySelector(e))&&(t.set=i({},j,n.defaultConfig,o),t.c=A.createElement("canvas"),t.cw=t.c.width=f(t.container,"width"),t.ch=t.c.height=f(t.container,"height"),t.cxt=t.c.getContext("2d"),t.paused=!1,t.container.innerHTML="",t.container.appendChild(t.c),t.color=m(t.set.color),t.init())}function p(t,n){return t>0&&t<1?n*t:t}function m(t){if("string"==typeof t)return function(){return t};var n=!!F(t)&&t.length,o=function(){return t[x(b()*n)]};return n?o:e}function g(t,n){t.set&&!t.paused&&(c(n)&&n.call(t,"pause"),t.paused=!0)}function v(t,n){t.set&&t.paused&&(c(n)&&n.call(t,"open"),t.paused=!1,t.draw())}function w(t,n){t.set.resize&&d(C,"resize",function(){var e=t.cw,o=t.ch;t.cw=t.c.width=f(t.container,"width"),t.ch=t.c.height=f(t.container,"height");var i=t.cw/e,r=t.ch/o;F(t.dots)&&t.dots.forEach(function(t){u(t)&&(t.x*=i,t.y*=r)}),c(n)&&n.call(t,i,r),t.paused&&t.draw()})}function y(t,e,o){n(e).split(",").forEach(function(n){t[n]=function(){L[n](this,o)}})}var C=window,A=document,b=Math.random,x=Math.floor,F=Array.isArray,q=!!A.createElement("canvas").getContext,z=/\s/g,E=/^\d+(\.\d+)?[a-z]+$/i,j={opacity:1,color:[],resize:!0};C.requestAnimationFrame=function(t){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(n){t.setTimeout(n,1e3/60)}}(C);var L={pInt:t,trimAll:n,randomColor:e,limitRandom:o,extend:i,typeChecking:r,isFunction:c,isPlainObject:u,isElem:a,getCss:f,offset:s,createCanvas:h,scaleValue:p,setColor:m,pause:g,open:v,resize:w,modifyPrototype:y},S={version:"1.0.0",canvasSupport:q,util:L,inherit:{requestAnimationFrame:function(){!this.paused&&C.requestAnimationFrame(this.draw.bind(this))},pause:function(){g(this)},open:function(){v(this)},resize:function(){w(this)}},event:{on:d,off:l},extend:function(t){return i(t,this.inherit),this}};return"function"==typeof define&&define.amd&&define(function(){return S}),C.Particleground=S,S});