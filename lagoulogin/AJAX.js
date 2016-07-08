/**
 * Created by angelqiqi on 2016/6/17.
 */
 $(document).ready(function(){
     $("#btnLogin").click(function(){
         $.ajax({
            type: "POST",
            url: "http://192.168.1.103:8010/api/login",
            data: { "UserName": $("#userName").val(), "UserPwd": $("#password").val() },

            success: function (data) {
                if(data.Code=="Sucess") {
                    alert(data.Data.UserName);
                }
                else
                {
                    alert(data.Message);
                }

            }
        });

    });
});
