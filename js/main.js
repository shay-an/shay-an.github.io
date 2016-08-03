function wheel(fn){
    function fnWheel(ev){
        var oEvent=ev||event;
        var sys=true;

        if (oEvent.wheelDelta){
            if (oEvent.wheelDelta<0){
                sys=true;
            }else{
                sys=false;
            }
        }else{
            if(oEvent.detail>0){
                sys=true;
            }else{
                sys=false;
            }
        }
        fn && fn(sys);
    }
    if (window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
        document.addEventListener('DOMMouseScroll',fnWheel,false);
    }else {
        document.onmousewheel=fnWheel;
    }
}
$(function(){
    var oBox1=document.getElementById('article-con');
    var aBar=getByClass(oBox1,'con-bar');
    var aScroll=getByClass(oBox1,'scroll');
    var aCon=getByClass(oBox1,'con-box');
    var aArtLi=getByClass(oBox1,'article-list');
    var aClose=getByClass(oBox1,'close');
    var oMenu=document.getElementById('article-menu');
    var aMenuLi=oMenu.getElementsByTagName('li');
    var oLay=document.getElementById('layer2');
    var timer=null;
    var iNew=0;
    var arr=[];
    var clientW=document.documentElement.clientWidth;


    for (var j=0;j<aMenuLi.length;j++){
        aMenuLi[j].index=j;
        aClose[j].index=j;

        aMenuLi[j].onclick=function(){
            iNew=this.index;
            oLay.style.display='block';
            oLay.style.opacity=1;
            aArtLi[this.index].style.opacity=0;
            aArtLi[this.index].style.display='block';
            aArtLi[this.index].style.top=aArtLi[this.index].offsetTop+50+'px';
            doMove(aArtLi[this.index],{opacity:1,top:aArtLi[this.index].offsetTop-50},{type:Tween.Linear,time:200})
        };
        aClose[j].onclick=function(){
            var _this=this;
            doMove(aArtLi[this.index],{opacity:0,top:50},{type:Tween.Linear,time:200,end:function(){
                aArtLi[_this.index].style.top=0;
                aArtLi[_this.index].style.display='none';
                doMove(oLay,{opacity:0},{type:Tween.Linear,time:200,end:function(){
                    oLay.style.display='none';
                }});
            }})
        }
    }

    function setPos(t,oScorll,oBar,oCon){
        if(t<=0){t=0}
        if(t>=oScorll.offsetHeight-oBar.offsetHeight){t=oScorll.offsetHeight-oBar.offsetHeight}
        var scale=t/(oScorll.offsetHeight-oBar.offsetHeight);
        oCon.style.top=-(oCon.offsetHeight-oScorll.offsetHeight)*scale+'px';
        oBar.style.top=t+'px';
    }
    for (var i=0;i<aBar.length;i++){
        aBar[i].index=0;
        aBar[i].onmousedown=function(ev){
            var oEvent=ev||event;
            var disY=oEvent.clientY;
            var oT=this.offsetTop;

            document.onmousemove=function(ev){
                var oEvent=ev||event;
                var t=oEvent.clientY-disY+oT;

                setPos(t,aScroll[iNew],aBar[iNew],aCon[iNew]);
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            return false;
        };
    }
    wheel(function(sys){
        var t=aBar[iNew].offsetTop;
        if (sys){
            t+=6;
        }else{
            t-=6;
        }
        setPos(t,aScroll[iNew],aBar[iNew],aCon[iNew]);

    });
    var oBox=document.getElementById('topbar');
    var aLi=oBox.getElementsByTagName('li');
    var oList=document.getElementById('list');
    var aList=getByClass(oList,'con-li');
    var iNow=0;
    var bSys=true;

    for (var i=0;i<aList.length;i++){
        aList[i].style.left=clientW+'px';
        aList[i].style.display='block';
    }
    aList[0].style.left=0+'px';
    for (var i=0;i<aLi.length-1;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for (var i=0;i<aLi.length-1;i++){
                aLi[i].style.color='';
            }
            scmove(aLi[aLi.length-1],this.index*81);
            this.style.color='#0c5bcc';
            this.onclick=function(){
                var _this=this;
                bSys=false;
                for (var j=0;j<aList.length;j++){
                    aList[j].style.display='block';
                }
                if (iNow<this.index){
                    doMove(aList[iNow],{left:-clientW},{type:Tween.Cubic.easeIn,time:400,end:function(){
                        aList[_this.index].style.left=clientW+'px';
                        doMove(aList[_this.index],{left:0},{type:Tween.Cubic.easeIn,time:400});
                    }});

                }else if(iNow==this.index){
                    aList[this.index].style.left=0;
                }else {
                    doMove(aList[iNow],{left:clientW},{type:Tween.Cubic.easeIn,time:400,end:function(){
                        aList[_this.index].style.left=-clientW+'px';
                        doMove(aList[_this.index],{left:0},{type:Tween.Cubic.easeIn,time:400});
                    }});

                }
                iNow=this.index;
            };
            bSys=true;
        };
        aLi[i].onmouseout=function(){
            for (var i=0;i<aLi.length-1;i++){
                aLi[i].style.color='';
            };
            aLi[iNow].style.color='#0c5bcc';
            if (bSys){
                scmove(aLi[aLi.length-1],iNow*81);
            }
        }
    }
});

$(function(){
    var oBanner=document.getElementById('banner');
    var aLi=oBanner.getElementsByTagName('li');
    var aBtn=oBanner.getElementsByTagName('i');
    var aChange=oBanner.getElementsByTagName('a');
    var iNow=0;
    var timer=null;

    for (var i=0;i<aLi.length;i++){
        aLi[i].style.backgroundImage='url("img/banner-img/pic'+(i+1)+'.jpg")'
    }
    aLi[0].style.zIndex=11;
    for (i=0;i<aBtn.length-1;i++){
        aBtn[i].index=i;
        aBtn[i].onmouseover=function(){
            iNow=this.index;

            tab(this.index);
        }
    }
    function tab(index){
        doMove(aBtn[aBtn.length-1],{left:index*24+12},{type:Tween.Back.easeOut,time:300});
        for (var j=0;j<aLi.length;j++){
            aLi[j].style.zIndex=1;
            doMove(aLi[j],{opacity:0},{type:Tween.Linear});
        }
        aLi[index].style.zIndex=2;
        doMove(aLi[index],{opacity:1},{type:Tween.Linear});
    };
    aChange[0].onclick=prev;
    function prev(){
        iNow--;
        console.log(iNow);
        if (iNow<0){
            iNow=aLi.length-1;
        }
        tab(iNow);
    }
    aChange[1].onclick=next;
    function next(){
        iNow++;
        iNow%=aLi.length;
        tab(iNow);
    }
    timer=setInterval(next,2500);
    oBanner.onmouseover=function(){
        clearInterval(timer);
    };
    oBanner.onmouseout=function(){
        timer=setInterval(next,2500);
    }

});

$(function(){
    var oBox=document.getElementById('works-box');
    var aLi=oBox.getElementsByTagName('li');

    function findDir(oDiv,ev){
        var oEvent=ev||event;
        var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
        var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft;

        var y=oDiv.offsetHeight/2+getPos(oDiv).top-(oEvent.clientY+scrollT);
        var x=oDiv.offsetWidth/2+getPos(oDiv).left-(oEvent.clientX+scrollL);

        return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
    }
    function test() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].onmouseover = function (ev) {
                var oEvent = ev || event;
                var oSon = this.children[1];
                var oFrom = oEvent.fromElement || oEvent.relatedTarget;
                if (this.contains(oFrom))return false;

                switch (findDir(this, ev)) {
                    case 0:
                        oSon.style.left = 311 + 'px';
                        oSon.style.top = 166 + 'px';
                        break;
                    case 1:
                        oSon.style.left = 0;
                        oSon.style.top = 250 + 'px';
                        break;
                    case 2:
                        oSon.style.left = -311 + 'px';
                        oSon.style.top = 166+'px';
                        break;
                    case 3:
                        oSon.style.left = 0 + 'px';
                        oSon.style.top = 250+'px';
                        break;
                }
                doMove(oSon, {left: 0, top: 166},{type:Tween.Linear,time:300});

            };
            aLi[i].onmouseout = function (ev) {
                var oEvent = ev || event;
                var oSon = this.children[1];
                var to = oEvent.toElement || oEvent.relatedTarget;
                if (this.contains(to))return false;

                switch (findDir(this, ev)) {
                    case 0:
                        doMove(oSon, {left: 311, top: 166},{type:Tween.Linear,time:300});
                        break;
                    case 1:
                        doMove(oSon, {left: 0, top: 250},{type:Tween.Linear,time:300});
                        break;
                    case 2:
                        doMove(oSon, {left: -311, top: 166},{type:Tween.Linear,time:300});
                        break;
                    case 3:
                        doMove(oSon, {left: 0, top: 250},{type:Tween.Linear,time:300});
                        break;
                }


            };
        }
    }
    addEvent(window,'scroll',test);
    test();
});

$(function(){
    var oContact=document.getElementById('contact');
    var oList=document.getElementById('list2');
    var aLi=oList.getElementsByTagName('li');
    var oUl=document.getElementById('info-layer');
    var aP=oUl.getElementsByTagName('li');
    var aI=oUl.getElementsByTagName('i');
    //var clientW=document.documentElement.clientWidth;
    //var clientH=document.documentElement.clientHeight;

    var oLay=document.getElementById('layer');
    //oLay.style.height = clientH+'px';

    oContact.parentNode.style.display='none';


    for (var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aI[i].index=i;

        aLi[i].onclick=function(){
            oLay.style.display='block';
            oLay.style.opacity=1;
            aP[this.index].style.opacity=0;
            aP[this.index].style.display='block';
            doMove(aP[this.index],{opacity:1,top:aP[this.index].offsetTop+50},{type:Tween.Linear,time:200})
        };
        aI[i].onclick=function(){
            var _this=this;
            doMove(aP[this.index],{opacity:0,top:aP[this.index].offsetTop-50},{type:Tween.Linear,time:500,end:function(){
                aP[_this.index].style.display='none';
                doMove(oLay,{opacity:0},{type:Tween.Linear,time:300,end:function(){
                    oLay.style.display='none';
                }});
            }})
        }
    }
});