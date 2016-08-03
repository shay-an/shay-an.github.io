function rnd(m,n) {
	return parseInt(Math.random()*(m-n)+n);
}
function creatLi(){
	var aLi = document.createElement('li');
	var oDdVal='';
	for (var i=0;i<rnd(1,4);i++){
		oDdVal+='<dd><strong>评论'+(i+1)+'：</strong>Lorem ipsum dolor</dd>';
	}
	aLi.innerHTML='<a href="javascript:;">'
			+'<img src="image/weterfall/img%20('+rnd(1,16)+').jpg" alt="">'
			+'</a>'
			+'<h3>我是随机标题'+rnd(1,30)+'</h3>'
			+'<p>我是随机内容'+rnd(1,30)+' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus exercitationem incidunt.</p>'
			+'<dl>'
			+'<dt>评论:</dt>'+oDdVal;
			+'</dl>';
	return aLi;
}
function create35(){
	var oBox = document.getElementById('box');
	var aUl = oBox.children;
	var i = 0;
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function(){
		i++;
		if (i>=10) {
			clearInterval(timer);
		}
		var arr = [];
		var oLi = creatLi();
		for (var i = 0; i < aUl.length; i++) {
			arr[i] = aUl[i];
		}
		arr.sort(function(aUl1,aUl2){
			return aUl1.offsetHeight - aUl2.offsetHeight;
		});
		arr[0].appendChild(oLi);
	},30);
}
$(function(){

	create35();

	function getVal(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		var clientH = document.documentElement.clientHeight || document.body.clientHeight;
		var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;

		if (scrollH<scrollT+clientH) {
			create35();
		}
		if (bSys){
			clearInterval(timer);
		}
		bSys=true;
		if (scrollT>0){
			oBtn.style.display='block';
		}else{
			oBtn.style.display='none';
		}
	}
	addEvent(window,'scroll',getVal);
	var oBtn=document.getElementById('btn');
	var timer=null;
	var bSys=false;

	oBtn.onclick=function(){
		clearInterval(timer);
		var start=document.documentElement.scrollTop||document.body.scrollTop;
		var dis=0-start;
		var iCount=parseInt(1000/30);
		var n=0;

		timer=setInterval(function(){
			bSys=false;
			n++;
			var a=1-n/iCount;
			var cur=start+dis*(1-a*a*a);
			document.documentElement.scrollTop=document.body.scrollTop=cur;
			if (n==iCount){
				clearInterval(timer);
			}
		},30)
	}
})
$(function(){
	var oTxt = document.getElementById('text');
	var oTopbar=document.getElementById('topbar');
	var oIco = document.getElementById('ico');
	var oCue = document.getElementById('cue');
	var oTop = document.getElementById('top');

	oTxt.onkeydown = function(){
		oIco.style.display = 'none';
		oCue.style.display = 'none';
	}

	oTxt.onblur = function(){
		if(oTxt.value.length ==0){
			oIco.style.display = 'block';
			oCue.style.display = 'block';
		}
	}

	function tagBar(){
		var scorollT = document.documentElement.scrollTop || document.body.scrollTop;
		if(window.navigator.userAgent.toLowerCase().indexOf('msie 7.0')==-1){
			if (scorollT>0){
				oTop.style.position = 'fixed';
				oTop.style.boxShadow='0 2px 5px #ccc';
				oTopbar.style.display='block';
			}else{
				oTop.style.position = 'static';
				oTop.style.boxShadow='';
				oTopbar.style.display='none';
			}
		}else{
			if (scorollT>0){
				oTop.style.position = 'absolute';
				oTop.style.top = scorollT+'px';
			}else{
				oTop.style.position = 'static';
			}
		}
	}
	addEvent(window,'scroll',tagBar);
})