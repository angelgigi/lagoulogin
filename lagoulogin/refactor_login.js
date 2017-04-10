/**
 * Created by angelqiqi on 2017/3/29.
 */
//页面Dom对象
var PageElement={
    username:$("#username"),
    password:$("#password"),
    checkUserNameResult:$("#checkUserNameResult"),
    checkPasswordResult:$("#checkPasswordResult"),
    btnLogin:$("#btnLogin")
};
//主对象 闭包模式
var LoginMain=(function () {
    function setCookie(name,value,iDay) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+value+';expires='+oDate;
    }
    function login() {
        $.ajax({
            type: "POST",
            url: "http://192.168.1.103:8010/api/login",
            data: { "UserName": PageElement.username.val(), "UserPwd": PageElement.password.val() },//!*参数*!/
            //回调函数：调用后回来执行
            success: function (data) {
                if(data.Code=="Sucess") {
                   setCookie("username", data.Data.UserName,1);
                    window.location.href="/lagoulogin/lagoutop/lagoutop.html"
                }
                else
                {
                    PageElement.checkPasswordResult.html(data.Message);
                }
            }
        });
    }
    function inputUser() {
        if($.trim(PageElement.username.val()).length==0) {
            PageElement.checkUserNameResult.html("请输入已验证手机/邮箱");
        }else{
            PageElement.checkUserNameResult.html("");
        }
    }
    function inputPsd() {
        if($.trim(PageElement.password.val()).length==0){
            PageElement.checkPasswordResult.html("请输入密码");
        }else{
            PageElement.checkPasswordResult.html("");
        }
    }
    function bindEvent() {
        PageElement.btnLogin.bind("click",function (){
            if(PageElement.username.val()!="" && PageElement.password.val()!=""){
                login();
            }
            else{
                PageElement.checkPasswordResult.html("请输入用户名或密码")
            }
        });
        PageElement.username.bind("blur",function () {
           inputUser();
        });
        PageElement.password.bind("blur",function () {
            inputPsd();
        }).bind("keypress",function (event) {
            if(event.keyCode==13){
                login();
            }
        });
        //回车事件绑定

    }
    return{
        bindEvent:bindEvent
    }
})();
//DOM ready
$(document).ready(function () {
    LoginMain.bindEvent();
});