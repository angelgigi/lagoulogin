
function ViewModel() {
    var self = this;
    self.jobsHot = ko.observableArray();//列表
    self.jobsNew = ko.observableArray();//列表
    self.menus = ko.observableArray();//列表

    //鼠标划过展开菜单
var menuhover=function () {
    $("#sidebar .menu_box").each(function (i) {
        $(this).hoverDelay({
            hoverDuring: 200,
            hoverEvent: function () {
                switch (i) {
                    case 1:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).prev().position().top + 120
                        }).removeClass("dn");
                        break;
                    case 2:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).prev().position().top
                        }).removeClass("dn");
                        break;
                    case 3:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).position().top + $(this).height() - $(this).children(".menu_sub").height() + 64
                        }).removeClass("dn");
                        break;
                    case 4:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).position().top + $(this).height() - $(this).children(".menu_sub").height() + 24
                        }).removeClass("dn");
                        break;
                    case 5:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).position().top + $(this).height() - $(this).children(".menu_sub").height() + 30
                        }).removeClass("dn");
                        break;
                    case 6:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).position().top + $(this).height() - $(this).children(".menu_sub").height() - 24
                        }).removeClass("dn");
                        break;
                    default:
                        $(this).addClass("current").children(".menu_sub").css({
                            top:
                            $(this).position().top
                        }).removeClass("dn")
                }
            },
            outEvent: function () {
                $(this).removeClass("current").children(".menu_sub").addClass("dn")
            }
        })
    });
}

    self.load= function() {
        $.ajax({
            url: "http://192.168.1.103:8083/api/job/GetAllJobsPages?PageIndex=2",
            type: "Get",
            success: function(data) {
                self.jobsHot(data.DatList);
                
                
            }

        });
        $.ajax({
            url: "http://192.168.1.103:8083/api/job/GetAllJobsPages?PageIndex=3",
            type: "Get",
            success: function(data) {
                self.jobsNew(data.DatList);
            }

        });

        ///加载菜单
        $.ajax({
            url: "http://192.168.1.103:8083/api/menu/GetAllMenus",
            type: "Get",
            success: function(data) {
                self.menus(data.DatList);

                menuhover();
            }

        });

    };




    self.load();

}
$(function() {
    ko.applyBindings(new ViewModel());



});
