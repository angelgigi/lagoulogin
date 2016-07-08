/**
 * Created by angelqiqi on 2016/6/16.
 */
$(document).ready(function(){
    $("#btnLogin").click(function(){
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;

        if(password!=""&&username!=""){
            $.ajax({
                type: "POST",
                url: "http://192.168.1.103:8010/api/login",
                data: { "UserName": $("#username").val(), "UserPwd": $("#password").val() },/*参数*/
                //回调函数：调用后回来执行
                success: function (data) {
                    if(data.Code=="Sucess") {
                        window.location.href="../lagoutop/lagoutop.html"
                    }
                    else
                    {
                        checkPasswordResult.innerHTML = data.Message;

                    }

                }
            });
        } if(password==""){
            checkPasswordResult.innerHTML="请输入密码";
        } if(username==""){
            checkUserNameResult.innerHTML="请输入已验证手机/邮箱";
        }

    });

    $("#username").blur(function () {
        checkValue(1);
    });
    $("#password").blur(function () {
        checkValue(2)
    })
});






function checkValue(obj){
    var checkUserNameResult=document.getElementById("checkUserNameResult");
    var checkPasswordResult=document.getElementById("checkPasswordResult");
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(obj==1)
    {
        if(username.trim().length==0){
            checkUserNameResult.innerHTML="请输入已验证手机/邮箱";
        }else{
            checkUserNameResult.innerHTML="";

        }}

    if(obj==2)
    {
        if(password.trim().length==0){
            checkPasswordResult.innerHTML="请输入密码";
        }else{
            checkPasswordResult.innerHTML="";
        }
    }

}

