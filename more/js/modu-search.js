console.log('一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入某度，加入网页搜索，你，可以影响世界。');
console.log('请将简历发送至  ps_recruiter@moudu.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）');
window.onload=function(){
    var oTxt=document.getElementById('txt');
    var oUl=document.getElementById('oul');
    var oBtn=document.getElementById('btn');

    function search(){
        window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+oTxt.value+'');
    }
    oBtn.onclick=function(){
        search();
    };

    oTxt.onfocus=function(){
        oTxt.style.borderColor='#2d78f4';
    };

    oTxt.onblur=function(){
        oTxt.style.borderColor='';
    };

    oTxt.oninput=function(){
        jsonp({
            url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
            data:{
                wd:oTxt.value
            },
            fnSucc:function(json){
                var oldValue=oTxt.value;
                oUl.innerHTML='';

                var arr=json.s;

                for (var i=0;i<arr.length;i++){
                    var oLi=document.createElement('li');
                    oLi.innerHTML=arr[i];
                    oUl.appendChild(oLi);
                }

                if (arr.length>0){
                    oUl.style.display='block';
                }else {
                    oUl.style.display='none';
                }

                var iNow=-1;
                oTxt.onkeydown=function(ev){
                    var aLi=oUl.getElementsByTagName('li');
                    var oEvent=ev||event;

                    if (oEvent.keyCode==40){
                        iNow++;
                        for (var i=0;i<aLi.length;i++){
                            aLi[i].className='';
                        }
                        if (iNow>=aLi.length){
                            iNow=-1;
                        }

                        if (iNow==-1){
                            oTxt.value=oldValue;
                        }else {
                            aLi[iNow].className='ac';
                            oTxt.value=aLi[iNow].innerHTML;
                        }
                    }
                    if (oEvent.keyCode==38){
                        iNow--;
                        for (i=0;i<aLi.length;i++){
                            aLi[i].className='';
                        }

                        if (iNow<=0){
                            iNow=aLi.length;
                        }

                        if (iNow==aLi.length){
                            oTxt.value=oldValue;
                        }else {
                            aLi[iNow].className='ac';
                            oTxt.value=aLi[iNow].innerHTML;
                        }

                    }

                    if (oEvent.keyCode==27){
                        oldValue=oTxt.value;
                        oUl.style.display='none';
                    }

                    if (oEvent.keyCode==13){
                        oUl.style.display='none';
                        search();
                    }
                }
            }
        })
    };
}