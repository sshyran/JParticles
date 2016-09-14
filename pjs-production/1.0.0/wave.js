+function(t,e){"use strict";function i(t,e){s.createCanvas(this,i,t,e)}var s=e.util,o=s.limitRandom,r=s.randomColor,n=s.scaleValue,a=Math.random,f=Math.sin,l=2*Math.PI,h="undefined",c=Array.isArray;i.defaultConfig={num:3,fillColor:[],lineColor:[],lineWidth:[],offsetLeft:[],offsetTop:[],crestHeight:[],rippleNum:[],speed:[],fill:!1,stroke:!0};var u=i.prototype={version:"1.0.0",init:function(){this.set.num>0&&(this.rippleLength=[],this.attrNormalize(),this.createDots(),this.draw(),this.resize())},attrNormalize:function(){["fillColor","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","rippleNum","speed","fill","stroke"].forEach(function(t){this.attrProcessor(t)}.bind(this))},attrProcessor:function(t){var e=this.set.num,i=this.set[t],s=i,o="offsetLeft"===t?this.cw:this.ch;for(c(i)||(s=this.set[t]=[]);e--;){var r=c(i)?i[e]:i;s[e]=typeof r===h?this.generateAttrVal(t):this.scaleValue(t,r,o),"rippleNum"===t&&(this.rippleLength[e]=this.cw/s[e])}},scaleValue:function(t,e,i){return"offsetTop"===t||"offsetLeft"===t||"crestHeight"===t?n(e,i):e},generateAttrVal:function(t){var e=this.cw,i=this.ch;switch(t){case"lineColor":case"fillColor":t=r();break;case"lineWidth":t=o(2,.2);break;case"offsetLeft":t=a()*e;break;case"offsetTop":case"crestHeight":t=a()*i;break;case"rippleNum":t=o(e/2,1);break;case"speed":t=o(.4,.1);break;case"fill":t=!1;break;case"stroke":t=!0}return t},setOffsetTop:function(t){this.set.num>0&&(!c(t)&&t>0&&t<1&&(t*=this.ch),this.set.offsetTop.forEach(function(e,i,s){s[i]=c(t)?t[i]||e:t}))},createDots:function(){for(var t=this.dots=[],e=this.rippleLength,i=this.cw,s=this.set.num;s--;){for(var o=[],r=l/e[s],n=0;n<i;n++)o.push({x:n,y:n*r});t[s]=o}},draw:function(){var t=this.set;if(!(t.num<=0)){var e=this.cxt,i=this.cw,s=this.ch,o=this.paused;e.clearRect(0,0,i,s),e.globalAlpha=t.opacity,this.dots.forEach(function(r,n){var a=t.crestHeight[n],l=t.offsetLeft[n],h=t.offsetTop[n],c=t.speed[n];e.save(),e.beginPath(),r.forEach(function(t,i){e[i?"lineTo":"moveTo"](t.x,a*f(t.y+l)+h),!o&&(t.y-=c)}),t.fill[n]&&(e.lineTo(i,s),e.lineTo(0,s),e.closePath(),e.fillStyle=t.fillColor[n],e.fill()),t.stroke[n]&&(e.lineWidth=t.lineWidth[n],e.strokeStyle=t.lineColor[n],e.stroke()),e.restore()}),this.requestAnimationFrame()}}};e.extend(u),s.modifyPrototype(u,"resize",function(t,e){this.set.num>0&&this.dots.forEach(function(i){i.forEach(function(i){i.x*=t,i.y*=e})})}),e.wave=u.constructor=i}(window,Particleground);