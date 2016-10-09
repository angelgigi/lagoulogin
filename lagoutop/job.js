/**
 * Created by angelqiqi on 2016/6/24.
 */

$(function()  {
        //获取登录用户
       if($.cookie("loginname")){
        $("#loginname").html($.cookie('loginname'));
         $(".bl").hide();
       }
       // 最热职位 最新职位 切换
        
        $("#jobTab li").bind("click",
            function () {
                $(this).addClass("current").siblings().removeClass("current");
             

            });
        
        $(".hotTab").bind("click",
            function () {
                $("#jobList").removeClass("dn");
                $("#new_posHotPosition").addClass("dn");

        });

        $(".newTab").bind("click",
            function () {
                $("#jobList").addClass("dn");
                $("#new_posHotPosition").removeClass("dn");

            });

        


/*滚动最底部loginToolBar效果*/
        function a(o, n) {
            if (navigator.userAgent.indexOf("Firefox") > 0) $("#loginToolBar ." + o).html(n);
            else for (var a = $("#loginToolBar ." + o + " i"), c = String(n).length, i = 0; c > i; i++) {
                0 != i && c % 3 == i % 3 && c > 3 && $("#loginToolBar ." + o).append("<b></b>"),
                a.length <= i && $("#loginToolBar ." + o).append("<i></i>");
                var g = String(n).charAt(i),
                    b = 30 * -parseInt(g),
                    v = $("#loginToolBar ." + o + " i").eq(i);
                v.animate({
                        backgroundPositionY: String(b) + "px"
                    },
                    "3000", "swing",
                    function () { })
            }
        }
        var c = $("#cc").val(),
            g = $("#cp").val();
        if (a("companycount", c), a("positioncount", g), $("#loginToolBar")) {
            var b = function () {
                var a = $(this).scrollTop(),
                    c = $(document).height(),
                    g = $(this).height();
                if (a + g >= c - 68) {
                    var b = 68 - (c - a - g);
                    $("#loginToolBar").css("bottom", b);
                    var v = 140 + b;
                    $("#backtop").css("bottom", v);
                    var h = 80 + b;
                    $("#product-fk").css("bottom", h);
                    var T = 80 + b;
                    $("#feedback-con").css("bottom", T)
                } else $("#loginToolBar").css("bottom", 0),
                    $("#backtop").css("bottom", 140),
                    $("#product-fk").css("bottom", 80),
                    $("#feedback-con").css("bottom", 80)
            };
            $(window).scroll(b), $(window).resize(b)
        }
        /*滚动最底部loginToolBar效果*/


/*回到顶部代码*/
        function rt() {
            var d = document,
                dd = document.documentElement,
                db = document.body,
                top = dd.scrollTop || db.scrollTop,
                step = Math.floor(top / 20);
            (function() {
                top -= step;
                if (top > -step) {
                    dd.scrollTop == 0 ? db.scrollTop = top: dd.scrollTop = top;
                    setTimeout(arguments.callee, 20);
                }
            })();
        }



        function c() {
            return $("#backtop").css("background-position-x", "-28px"), window.scrollBy(0, -20), 0 == document.documentElement
                .scrollTop && 0 == document.body.scrollTop ? void $("#backtop").css("background-position-x", "0") : void(
                scrolldelay = setTimeout(c, 2))
        }
        function a(c) {
            $(window).height() - c > $(document.body).height() ? $("#footer").addClass("footer_fix") : $("#footer").removeClass(
                "footer_fix")
        }
        $(".footer_app, .footer_qr").hover(function () {
            $("img", this).stop().fadeIn(200)
        }, function () {
            $("img", this).stop().fadeOut(200)
        }), $(window).scroll(function () {
            (document.documentElement.scrollTop || document.body.scrollTop) > 0 ? $("#backtop").show() : $("#backtop").hide()
        }), $("#backtop").click(function () {


            rt();

        }), a(0), $(window).resize(function () {
            a($("#footer").hasClass("footer_fix") ? 68 : 0)
        })
        /*回到顶部代码*/

        /*反馈弹出框*/

        $("#feedback-icon").bind("click",
            function () {
                $("#feedback-con").css("display","block")

            })

        $("#pfb-close").bind("click",
            function () {
                $("#feedback-con").css("display","none")

            })
    });

