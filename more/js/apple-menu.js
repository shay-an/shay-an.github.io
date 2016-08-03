function getPos(obj){
            var l=0;
            var t=0;

            while (obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t};
        }
        $(function(ev){
            var oBox=document.getElementById('box');
            var oUl=document.getElementById('oul');
            var aLi=oUl.children;
            var aImg=oBox.children;
            var aI=oUl.getElementsByTagName('i');
            var scale=.5;
            var arr=[];
            var aLiArr=[];

            for (var i=0;i<aImg.length;i++){
                arr.push({left:getPos(aImg[i]).left,top:getPos(aImg[i]).top});
            }

            for (i=0;i<aLi.length;i++){
//                var
                var clientW=document.documentElement.clientWidth;
                console.log(clientW);
                aLi[i].style.left=clientW/2-aLi[i].offsetWidth/2+'px';
            }

            for (i=0;i<aLi.length;i++){
                aLiArr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
            }

            document.onmousemove=function(ev){
                var oEvent=ev||event;
                for (var i=0;i<aImg.length;i++){
                    var x=aImg[i].offsetWidth/2+getPos(aImg[i]).left;
                    var y=aImg[i].offsetHeight/2+getPos(aImg[i]).top;

                    var a=oEvent.clientX-x;
                    var b=oEvent.clientY-y;

                    var dis=Math.sqrt(a*a+b*b);

                    scale=1-dis/400;

                    if (scale<0.5){
                        scale=0.5
                    }
                    aImg[i].style.width=scale*128+'px';

                }
            };
            for (var j=0;j<aImg.length;j++){
                aI[j].index=j;
                aI[j].onclick=function(){
                    var _this=this;
                    doMove(aLi[this.index],{width:0,height:0,opacity:0},{type:Tween.Linear,end:function(){
                        aLi[_this.index].style.display='none';
                    }});

                };
                aImg[j].oncontextmenu=function(){
                    this.style.display='none';
                    return false;
                };
                aImg[j].index=j;
                aImg[j].onclick=function(){
                    for (var k=0;k<aLi.length;k++){
                        aLi[k].style.opacity=0;
                        aLi[k].style.display='none';
                    }
                    var _this=this;
                    var i=0;
                    var timer=null;
                    timer=setInterval(function(){
                        i++;
                        doMove(_this,{marginBottom:50},{type:Tween.Linear,time:300,end:function(){
                            doMove(_this,{marginBottom:0},{type:Tween.Linear,time:300})
                        }});
                        if (i==3){
                            clearInterval(timer);
                            aLi[_this.index].style.width=0;
                            aLi[_this.index].style.height=0;
                            aLi[_this.index].style.display='block';
                            doMove(aLi[_this.index],{width:800,height:500,opacity:1},{type:Tween.Linear});

                        }
                    },600)
                }
            }
        })