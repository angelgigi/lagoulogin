/*

function ViewModel() {
    var self = this;
    self.jobsSearch = ko.observableArray();//列表
    self.pageindex=ko.observable(1);
    self.totalpage=ko.observable(0);

    self.pageindexshow=ko.observable(1);
    self.totalpageshow=ko.observable(0);

    self.load=function () {
        self.getJobListPage(1);
    }
    self.getJobListPage= function(pageindex) {
       //console.log(pageindex, self.totalpage);
        $.ajax({
            url: "http://localhost:47253/api/job/GetAllJobsPages?PageIndex="+pageindex,
            type: "Get",
            success: function(data) {
                self.jobsSearch(data.DatList);
                if(pageindex==1) {
                    self.pageindex=data.PageInfo.PageIndex + 0;
                    self.totalpage=data.PageInfo.PageCount;

                    self.pageindexshow(data.PageInfo.PageIndex + 0);
                    self.totalpageshow(data.PageInfo.PageCount);
                }
                 
            }

        });
    };

    self.nextpage=function () {

        if(self.pageindex< self.totalpage) {
            self.pageindex+=1 ;
            self.pageindexshow( self.pageindex)
            self.getJobListPage(self.pageindex);
        }

    };

    self.previouspage=function () {
        if(self.pageindex>1) {
            self.pageindex-=1 ;
            self.pageindexshow( self.pageindex)
            self.getJobListPage(self.pageindex);
        }

    };


    self.load();

}
$(function() {
    ko.applyBindings(new ViewModel());
})*/


(function (win, $) {
    $(function () {
        var vm = new viewModel();
        ko.applyBindings(vm, win.document.body);
        vm.goToFirst();
    });
    var viewModel = function () {
        var self = this;
        self.loading = ko.observable(true);
        self.jobsSearch = ko.observableArray([]);
        paginationViewModel.apply(self, [15, function (page, pageHandler) {
            self.loading(true);
            $.ajax({
                url: "http://192.168.1.103:8083/api/job/GetAllJobsPages",
                cache: false,
                data: {
                    pageIndex: page,
                    pageSize: self.pageSize
                },
                success: function (data) {
                    if (typeof data === "string") {
                        data = $.parseJSON(data);
                    }
                    pageHandler.call(self, data);
                    self.jobsSearch(data.DatList);
                    self.loading(false);
                }
            });
        }]);
    }
})(window, jQuery);