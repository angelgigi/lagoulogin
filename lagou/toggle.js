/**
 * Created by angelqiqi on 2016/7/4.
 */
$(document).ready(function () {
    $(".btn-collapse").click(function () {
      /*  $(this).addClass('collapsed');*/
       $("#filterCollapse").slideToggle(500);
        $("#filterBrief").slideToggle(500);
        $(this).toggleClass('collapsed');
       if($(this).attr('title')=="点击收起筛选项")
       {
           $(this).attr('title',"点击展开筛选项")
       }
        else
       {
           $(this).attr('title',"点击收起筛选项")
       }
    });

      $(".btn-more").mouseenter(function () {
         $(".unfolded").show();
      });
      $("#filterCollapse").mouseleave(function () {
        $(".unfolded").hide();
      });

    $(".btn-more-hy").mouseenter(function () {
        $(".more-hy").show();
    });
    $(".btn-more-hy").click(function () {
        $(".more-hy").hide();
    });


    var a = $("#order"),
        c = a.find(".selectUI");
    c.find("li a").click(function () {
        $(this).parent().parent().prev().find("span").html($(this).html()).parent().parent().removeClass("active")
    });
    $(document).on("click", function (a) {
        c.find(".selectUI-text").each(function (c, h) {
            $(a.target).closest(h).length>0?
              $(h).parent().toggleClass("active") :
            $(h).parent().removeClass(
                "active")

        });
    });
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
    function a_a(c) {
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

    }), a_a(0), $(window).resize(function () {
        a_a($("#footer").hasClass("footer_fix") ? 68 : 0)
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
/*});*/

})


/*!search-result/modules/order/main.js*/




/*
$("#filterCollapse").slideDown(500);
$(this).addClass('btn-collapse');
$(this).removeClass('collapsed');


$(".btn-collapse").click(function () {
    $("#filterBrief").slideUp(500);
    $(this).removeClass('btn-collapse');
    $(this).addClass('collapsed');
});*/
