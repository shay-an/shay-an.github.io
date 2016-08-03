$(function(){
			var oBox=document.getElementById('box');
			var aLi=oBox.getElementsByTagName('li');
			var aSpan=oBox.getElementsByTagName('span');
            var arr=[];
            var oW=620;

			for(var i=1;i<aLi.length;i++){
				aLi[i].index=i;
				aLi[i].style.zIndex=aLi[i].index;
				aLi[i].style.left=i*50+oW+'px';
			}

            for (var k=0;k<aLi.length;k++){
                arr.push({left:aLi[k].offsetLeft})
            }
			for (var j=0;j<aLi.length;j++){
                    ;(function(index){
                    aLi[j].onmouseover=function(){
                        for(var i=0;i<aLi.length;i++){
							if (i<=index){
								doMove(aLi[i],{left:i*50},{time:200,type:Tween.Linear});
							}else {
								doMove(aLi[i],{left:i*50+oW},{time:200,type:Tween.Linear});
							}
                        }
                    };
                })(j);
			}
		})