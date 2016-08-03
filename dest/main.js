function $(e){document.addEventListener?document.addEventListener("DOMContentLoaded",function(){e&&e()},!1):document.onreadystatechange=function(){(document.readyState="complete")&&e&&e()}}function getByClass(e,t){if(e.getElementsByClassName)return e.getElementsByClassName(t);for(var n=[],o=e.getElementsByTagName("*"),i=new RegExp("\\b"+t+"\\b"),a=0;a<o.length;a++)i.test(o[a].className)&&n.push(o[a]);return n}function addEvent(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function delEvent(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}function getMousePos(e,t){var n=e.offsetWidth,o=e.offsetHeight,i=e.offsetLeft+n/2-t.pageX,a=e.offsetTop+o/2-t.pageY;return Math.round((180*Math.atan2(a,i)/Math.PI+180)/90)%4}function getPos(e){for(var t=0,n=0;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{left:t,top:n}}function scmove(e,t){var n=0,o=e.offsetLeft;clearInterval(e.timer),e.timer=setInterval(function(){n+=(t-o)/5,n*=.7,o+=n,e.style.left=Math.round(o)+"px",Math.round(n)<1&&Math.round(o)==t&&clearInterval(e.timer)},30)}function wheel(e){function t(t){var n=t||event,o=!0;o=n.wheelDelta?n.wheelDelta<0:n.detail>0,e&&e(o)}window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1?document.addEventListener("DOMMouseScroll",t,!1):document.onmousewheel=t}var Tween={Linear:function(e,t,n,o){return n*e/o+t},Quad:{easeIn:function(e,t,n,o){return n*(e/=o)*e+t},easeOut:function(e,t,n,o){return-n*(e/=o)*(e-2)+t},easeInOut:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},Cubic:{easeIn:function(e,t,n,o){return n*(e/=o)*e*e+t},easeOut:function(e,t,n,o){return n*((e=e/o-1)*e*e+1)+t},easeInOut:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}},Quart:{easeIn:function(e,t,n,o){return n*(e/=o)*e*e*e+t},easeOut:function(e,t,n,o){return-n*((e=e/o-1)*e*e*e-1)+t},easeInOut:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t}},Quint:{easeIn:function(e,t,n,o){return n*(e/=o)*e*e*e*e+t},easeOut:function(e,t,n,o){return n*((e=e/o-1)*e*e*e*e+1)+t},easeInOut:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t}},Sine:{easeIn:function(e,t,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+t},easeOut:function(e,t,n,o){return n*Math.sin(e/o*(Math.PI/2))+t},easeInOut:function(e,t,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+t}},Expo:{easeIn:function(e,t,n,o){return 0==e?t:n*Math.pow(2,10*(e/o-1))+t},easeOut:function(e,t,n,o){return e==o?t+n:n*(-Math.pow(2,-10*e/o)+1)+t},easeInOut:function(e,t,n,o){return 0==e?t:e==o?t+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t}},Circ:{easeIn:function(e,t,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOut:function(e,t,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOut:function(e,t,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}},Elastic:{easeIn:function(e,t,n,o,i,a){if(0==e)return t;if(1==(e/=o))return t+n;if(a||(a=.3*o),!i||i<Math.abs(n)){i=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/i);return-(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/a))+t},easeOut:function(e,t,n,o,i,a){if(0==e)return t;if(1==(e/=o))return t+n;if(a||(a=.3*o),!i||i<Math.abs(n)){i=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/i);return i*Math.pow(2,-10*e)*Math.sin((e*o-s)*(2*Math.PI)/a)+n+t},easeInOut:function(e,t,n,o,i,a){if(0==e)return t;if(2==(e/=o/2))return t+n;if(a||(a=o*(.3*1.5)),!i||i<Math.abs(n)){i=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/i);return e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/a))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*o-s)*(2*Math.PI)/a)*.5+n+t}},Back:{easeIn:function(e,t,n,o,i){return void 0==i&&(i=1.70158),n*(e/=o)*e*((i+1)*e-i)+t},easeOut:function(e,t,n,o,i){return void 0==i&&(i=1.70158),n*((e=e/o-1)*e*((i+1)*e+i)+1)+t},easeInOut:function(e,t,n,o,i){return void 0==i&&(i=1.70158),(e/=o/2)<1?n/2*(e*e*(((i*=1.525)+1)*e-i))+t:n/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t}},Bounce:{easeIn:function(e,t,n,o){return n-Tween.Bounce.easeOut(o-e,0,n,o)+t},easeOut:function(e,t,n,o){return(e/=o)<1/2.75?n*(7.5625*e*e)+t:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+t:n*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOut:function(e,t,n,o){return e<o/2?.5*Tween.Bounce.easeIn(2*e,0,n,o)+t:.5*Tween.Bounce.easeOut(2*e-o,0,n,o)+.5*n+t}}};!function(){window.getStyle=function(e,t){return(e.currentStyle||getComputedStyle(e,!1))[t]},window.doMove=function(e,t,n){clearInterval(e.timer),n=n||{},n.type=n.type||Tween.Bounce.easeOut,n.time=n.time||700;var o=Math.floor(n.time/20),i={};for(var a in t)i[a]=parseFloat(getStyle(e,a));var s=0;e.timer=setInterval(function(){s++;for(var a in t){var r=n.type(n.time*s/o,i[a],t[a]-i[a],n.time);"opacity"==a?(e.style.opacity=r,e.style.filter="alpha(opacity:"+100*r+")"):e.style[a]=r+"px"}s==o&&(clearInterval(e.timer),n.end&&n.end())},20)}}(),$(function(){function e(e,t,n,o){e<=0&&(e=0),e>=t.offsetHeight-n.offsetHeight&&(e=t.offsetHeight-n.offsetHeight);var i=e/(t.offsetHeight-n.offsetHeight);o.style.top=-(o.offsetHeight-t.offsetHeight)*i+"px",n.style.top=e+"px"}for(var t=document.getElementById("article-con"),n=getByClass(t,"con-bar"),o=getByClass(t,"scroll"),i=getByClass(t,"con-box"),a=getByClass(t,"article-list"),s=getByClass(t,"close"),r=document.getElementById("article-menu"),l=r.getElementsByTagName("li"),u=document.getElementById("layer2"),c=null,f=0,d=[],y=document.documentElement.clientWidth,p=0;p<l.length;p++)d.push({top:l[p].offsetTop});for(p=0;p<l.length;p++)l[p].style.top=d[p].top+"px",l[p].style.position="absolute",l[p].style.margin=0;for(var h=0;h<l.length;h++)l[h].index=h,s[h].index=h,l[h].onmouseover=function(e){var t=e||event,n=t.fromElement||t.relatedTarget;this.contains(n)||doMove(this,{top:d[this.index].top-3},{type:Tween.Quart.easeIn,time:300})},l[h].onmouseout=function(e){clearTimeout(c);var t=e||event,n=t.toElement||t.relatedTarget;this.contains(n)||(doMove(this,{top:d[this.index].top},{type:Tween.Quart.easeOut,time:300}),this.dis=0)},l[h].onclick=function(){f=this.index,u.style.display="block",u.style.opacity=1,a[this.index].style.opacity=0,a[this.index].style.display="block",a[this.index].style.top=a[this.index].offsetTop+50+"px",doMove(a[this.index],{opacity:1,top:a[this.index].offsetTop-50},{type:Tween.Linear,time:200})},s[h].onclick=function(){var e=this;doMove(a[this.index],{opacity:0,top:50},{type:Tween.Linear,time:200,end:function(){a[e.index].style.top=0,a[e.index].style.display="none",doMove(u,{opacity:0},{type:Tween.Linear,time:200,end:function(){u.style.display="none"}})}})};for(var p=0;p<n.length;p++)n[p].index=0,n[p].onmousedown=function(t){var a=t||event,s=a.clientY,r=this.offsetTop;return document.onmousemove=function(t){var a=t||event,l=a.clientY-s+r;e(l,o[f],n[f],i[f])},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null},!1};wheel(function(t){var a=n[f].offsetTop;t?a+=6:a-=6,e(a,o[f],n[f],i[f])});for(var m=document.getElementById("topbar"),v=m.getElementsByTagName("li"),g=document.getElementById("list"),M=getByClass(g,"con-li"),x=0,I=!0,p=0;p<M.length;p++)M[p].style.left=y+"px",M[p].style.display="block";M[0].style.left="0px";for(var p=0;p<v.length-1;p++)v[p].index=p,v[p].onmouseover=function(){for(var e=0;e<v.length-1;e++)v[e].style.color="";scmove(v[v.length-1],81*this.index),this.style.color="#0c5bcc",this.onclick=function(){var e=this;I=!1;for(var t=0;t<M.length;t++)M[t].style.display="block";x<this.index?doMove(M[x],{left:-y},{type:Tween.Cubic.easeIn,time:400,end:function(){M[e.index].style.left=y+"px",doMove(M[e.index],{left:0},{type:Tween.Cubic.easeIn,time:400})}}):x==this.index?M[this.index].style.left=0:doMove(M[x],{left:y},{type:Tween.Cubic.easeIn,time:400,end:function(){M[e.index].style.left=-y+"px",doMove(M[e.index],{left:0},{type:Tween.Cubic.easeIn,time:400})}}),x=this.index},I=!0},v[p].onmouseout=function(){for(var e=0;e<v.length-1;e++)v[e].style.color="";v[x].style.color="#0c5bcc",I&&scmove(v[v.length-1],81*x)}}),$(function(){function e(e){doMove(a[a.length-1],{left:24*e+12},{type:Tween.Back.easeOut,time:300});for(var t=0;t<i.length;t++)i[t].style.zIndex=1,doMove(i[t],{opacity:0},{type:Tween.Linear});i[e].style.zIndex=2,doMove(i[e],{opacity:1},{type:Tween.Linear})}function t(){r--,console.log(r),r<0&&(r=i.length-1),e(r)}function n(){r++,r%=i.length,e(r)}for(var o=document.getElementById("banner"),i=o.getElementsByTagName("li"),a=o.getElementsByTagName("i"),s=o.getElementsByTagName("a"),r=0,l=null,u=0;u<i.length;u++)i[u].style.backgroundImage='url("img/banner-img/pic'+(u+1)+'.jpg")';for(i[0].style.zIndex=11,u=0;u<a.length-1;u++)a[u].index=u,a[u].onmouseover=function(){r=this.index,e(this.index)};s[0].onclick=t,s[1].onclick=n,l=setInterval(n,2500),o.onmouseover=function(){clearInterval(l)},o.onmouseout=function(){l=setInterval(n,2500)}}),$(function(){function e(e,t){var n=t||event,o=document.body.scrollTop||document.documentElement.scrollTop,i=document.body.scrollLeft||document.documentElement.scrollLeft,a=e.offsetHeight/2+getPos(e).top-(n.clientY+o),s=e.offsetWidth/2+getPos(e).left-(n.clientX+i);return Math.round((180*Math.atan2(a,s)/Math.PI+180)/90)%4}function t(){for(var t=0;t<o.length;t++)o[t].onmouseover=function(t){var n=t||event,o=this.children[1],i=n.fromElement||n.relatedTarget;if(this.contains(i))return!1;switch(e(this,t)){case 0:o.style.left="311px",o.style.top="166px";break;case 1:o.style.left=0,o.style.top="250px";break;case 2:o.style.left="-311px",o.style.top="166px";break;case 3:o.style.left="0px",o.style.top="250px"}doMove(o,{left:0,top:166},{type:Tween.Linear,time:300})},o[t].onmouseout=function(t){var n=t||event,o=this.children[1],i=n.toElement||n.relatedTarget;if(this.contains(i))return!1;switch(e(this,t)){case 0:doMove(o,{left:311,top:166},{type:Tween.Linear,time:300});break;case 1:doMove(o,{left:0,top:250},{type:Tween.Linear,time:300});break;case 2:doMove(o,{left:-311,top:166},{type:Tween.Linear,time:300});break;case 3:doMove(o,{left:0,top:250},{type:Tween.Linear,time:300})}}}var n=document.getElementById("works-box"),o=n.getElementsByTagName("li");addEvent(window,"scroll",t),t()}),$(function(){var e=document.getElementById("contact"),t=document.getElementById("list2"),n=t.getElementsByTagName("li"),o=document.getElementById("info-layer"),i=o.getElementsByTagName("li"),a=o.getElementsByTagName("i"),s=document.getElementById("layer");t.style.position="relative";for(var r=[],l=0;l<n.length;l++)r.push({left:n[l].offsetLeft,top:n[l].offsetTop});for(e.parentNode.style.display="none",l=0;l<n.length;l++)n[l].style.position="absolute",n[l].style.left=r[l].left+"px",n[l].style.top=r[l].top+"px",n[l].style.margin=0;for(l=0;l<n.length;l++)n[l].index=l,a[l].index=l,n[l].onmouseover=function(){doMove(n[this.index],{top:r[this.index].top-5},{type:Tween.Linear,time:200})},n[l].onmouseout=function(){doMove(n[this.index],{top:r[this.index].top},{type:Tween.Linear,time:200})},n[l].onclick=function(){s.style.display="block",s.style.opacity=1,i[this.index].style.opacity=0,i[this.index].style.display="block",doMove(i[this.index],{opacity:1,top:i[this.index].offsetTop+50},{type:Tween.Linear,time:200})},a[l].onclick=function(){var e=this;doMove(i[this.index],{opacity:0,top:i[this.index].offsetTop-50},{type:Tween.Linear,time:500,end:function(){i[e.index].style.display="none",doMove(s,{opacity:0},{type:Tween.Linear,time:300,end:function(){s.style.display="none"}})}})}});