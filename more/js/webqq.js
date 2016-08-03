function toDob(n){
    return n<10?'0'+n:''+n;
}

function formatDate(time){          //格式化日期
    var oDate=new Date(time*1000);
    var y=oDate.getFullYear();
    var m=oDate.getMonth()+1;
    var d=oDate.getDate();
    var h=oDate.getHours();
    var sm=oDate.getMinutes();

    return y+'-'+toDob(m)+'-'+toDob(d)+' '+toDob(h)+':'+toDob(sm);
}

window.onload=function(){
    var oLoginBox=document.getElementById('box');
    var oUser=document.getElementById('user');
    var oPass=document.getElementById('pass');
    var oReg=document.getElementById('reg');
    var oLog=document.getElementById('log');
    var oFace=document.getElementById('face');
    var oChar=document.getElementById('chart');
    var oUserLi=document.getElementById('user-list');
    var oMsgBox=document.getElementById('msg');
    var oSendBtn=document.getElementById('send');
    var oT=document.getElementById('text');
    var oExit=document.getElementById('exit');
    var timer=null;
    var url='http://zhinengshe.com/exercise/im/api.php';
    var IDMax=0;

    var iNow=1;

    oFace.onclick=function(){
        iNow%=8;
        iNow++;
        oFace.src='face/'+iNow+'.jpg';
    };
    oReg.onclick=function(){
        jsonp({
            url:url,
            data:{
                a:'reg',
                user:oUser.value,
                pass:oPass.value,
                face:iNow
            },
            fnSucc:function(json){
                if (json.err){
                    alert('注册失败！'+json.msg);
                }else {
                    alert('注册成功！');
                }
            }
        })
    };

    oLog.onclick=function(){
        jsonp({
            url:url,
            data:{
                a:'lgn',
                user:oUser.value,
                pass:oPass.value
            },
            fnSucc:function(json){

                if (json.err){
                    alert('登录失败！'+json.msg);
                }else {
                    alert('登录成功！');
                    oLoginBox.style.display='none';
                    oChar.style.display='block';

                    getAllUser(json.token);
                    getAllMsg(json.token);
                    timer=setInterval(function(){
                        updateMsg(json.token);
                        scrollT(oMsgBox);
                    },1000);
                    sendMsg(json.token);
                    fnExit(json.token);
                }
            }
        });

    };
    function getAllUser(token){
        jsonp({
            url:url,
            data:{
                a:'get_user_list',
                token:token
            },
            fnSucc:function(json){
                if (json.err){
                    alert('获取失败')
                }else {
                    var arr=json.data;

                    for (var i=0;i<arr.length;i++){
                        var oLi=document.createElement('li');
                        oLi.className='clearfix';

                        if (arr[i].face==0||arr[i].face<8){
                            arr[i].face=1;
                        }
                        oLi.innerHTML='<img src="face/'+arr[i].face+'.jpg" alt=""><span>'+arr[i].username+'</span>';
                        oUserLi.appendChild(oLi);
                    }
                }
            }
        });

    }

    function getAllMsg(token){
        jsonp({
            url:url,
            data:{
                a:'get_msg',
                token:token
            },
            fnSucc:function(json){
                if (json.err){
                    alert('获取消息失败');
                }else {
                    var arr=json.data;

                    for (var i=0;i<arr.length;i++){
                        var oLi=document.createElement('li');

                        IDMax=arr[i].ID;
                        oLi.innerHTML='<span>'+arr[i].username+'</span><em>'+formatDate(arr[i].post_time)+'</em><p>'+arr[i].content+'</p>';
                        oMsgBox.appendChild(oLi);
                    }
                }
            }
        })
    }

    function updateMsg(token){
        jsonp({
            url:url,
            data:{
                a:'get_msg_n',
                n:IDMax,
                token:token
            },
            fnSucc:function(json){
                if (json.err){
                    alert('获取更新失败！');
                }else {
                    var arr=json.data;

                    for (var i=0;i<arr.length;i++){
                        IDMax=arr[i].ID;

                        var oLi=createMsg(arr[i].username,arr[i].post_time,arr[i].content);

                        oMsgBox.appendChild(oLi);
                    }
                }
            }
        })
    }

    function createMsg(username,time,content){
        var oLi=document.createElement('li');

        oLi.innerHTML='<span>'+username+'</span><em>'+formatDate(time)+'</em><p>'+content+'</p>';
        return oLi;
    }

    function scrollT(obj){
        obj.scrollTop=obj.scrollHeight;
    }
    function sendMsg(token){
        oSendBtn.onclick=function(){
            jsonp({
                url:url,
                data:{
                    a:'snd_msg',
                    content:oT.value,
                    token:token
                },
                fnSucc:function(json){
                    if (json.err){
                        alert('发送失败！')
                    }else {
                        //var oLi=createMsg(oUser.value,json.time,oT.value);
                        //
                        //oMsgBox.appendChild(oLi);
                        oT.value='';
                        scrollT(oMsgBox);
                    }
                }
            })
        }
    }
    function fnExit(token){
        oExit.onclick=function(){
            jsonp({
                url:url,
                data:{
                    a:'logout',
                    token:token
                },
                fnSucc:function(json){
                    if (json.err){
                        alert('退出失败！');
                    }else {
                        alert(json.msg);
                        clearInterval(timer);
                        oPass.value='';
                        oChar.style.display='none';
                        oLoginBox.style.display='block';
                    }
                }
            })
        }
    }
};