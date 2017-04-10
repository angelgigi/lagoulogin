/**
 * Created by angelqiqi on 2016/6/16.
 */

var CheckValue={
    checkUserNameResult:null,
    checkPasswordResult:null,
    btnLogin:null,
    password:null,
    username:null,

    InitData: function () {
        this.checkUserNameResult=$("#checkUsernameResult");
        this.checkPasswordResult=$("#checkPasswordResult");
        this.password=$("#password");
        this.username=$("#username");
        this.btnLogin=$("#btnLogin");
    },
    setCookie:function (name,value,iDay) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+value+';expires='+oDate;
    },
    login:function () {
        if(username!=""&&password!=""){
            $.ajax({
                type: "POST",
                url: "http://192.168.1.103:8010/api/login",
                data: { "UserName": $("#username").val(), "UserPwd": $("#password").val() },/*参数*/
                //回调函数：调用后回来执行
                success: function (data) {
                    if(data.Code=="Sucess") {
                   CheckValue.setCookie("username", data.Data.UserName,1);
                        window.location.href="/lagoulogin/lagoutop/lagoutop.html"
                    }
                    else
                    {
                       // alert("yong");
                        CheckValue.checkPasswordResult.html(data.Message);
                    }

                }
            });
        }
        if ($.trim(this.username.val())=== ""|| $.trim(this.password.val())=== "")
        {
            this.checkPasswordResult.html("请输入手机号或密码");

        }

    },
    //取输入框值
    inputusername:function () {
        if($.trim(this.username.val()).length==0) {
            checkUserNameResult.innerHTML = "请输入已验证手机/邮箱";
        }else{
            checkUserNameResult.innerHTML =""
        }

    },

    inputpassword:function () {
        if($.trim(this.password.val()).length==0){
            checkPasswordResult.innerHTML="请输入密码";
        }else{
            checkPasswordResult.innerHTML =""
        }
    }


};

$(document).ready(function () {
    CheckValue.InitData();
    CheckValue.btnLogin.click(function () {
        CheckValue.login()

    });
    CheckValue.username.blur(function () {
        CheckValue.inputusername()
    });
    CheckValue.password.blur(function () {
        CheckValue.inputpassword()
    });



    // 回车事件绑定
    CheckValue.password.bind('keypress', function (event) {
        if (event.keyCode == "13") {
            CheckValue.login();
        }
    });
});

