/**
 * Created by angelqiqi on 2016/7/8.
 */
$(document).ready(function () {

    $(".input_item > .btn_outline").each(function(){$(this).click(function(){$(this).addClass("btn_active").siblings().removeClass("btn_active")})});



    var F = $(".form_head > li"),
        c = $(".form_body");
   // F.parent().append('<span class="tab_active"></span>');
    F.each(function (i) {
        $(this).click(function () {
            $(this).not(":visible") ? ($(this).addClass("active").siblings().removeClass("active"), $(this).siblings(
                ".tab_active").stop().animate({
                left: $(this).offsetParent().context.offsetLeft
            }, 400), c.eq(i).show().siblings(".form_body").hide(), g.setClear(), v.setClear()) : ($(this).addClass(
                "active").siblings().removeClass("active"), c.eq(i).show().siblings(".form_body").hide())
        })
    });

});