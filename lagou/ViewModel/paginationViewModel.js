function paginationViewModel(pageSize, goToPageHandler) {
    var self = this;
    self.pagerCount = 6;//如果分页的页面太多，截取部分页面进行显示，默认设置显示9个页面
    self.pageSize = pageSize;//每页显示的记录数
    self.currentPage = ko.observable(1);//当前页面Index
    self.jumpPage = ko.observable(1);//需要跳转的页面的Index
    self.pageCount = ko.observable(0);//总页数
    self.showStartPagerDot = ko.observable(false);//页面开始部分是否显示点号
    self.showEndPagerDot = ko.observable(false);//页面结束部分是否显示点号
    self.pages = ko.observable([]);//需要显示的页面数量
    self.total = ko.observable();//记录总数
    //计算需要显示的页面的页码
    self.caculatePages = function () {
        var result = [], pagerCount = self.pagerCount, start = 1, end = pagerCount;
        if (self.currentPage() >= pagerCount) {
            start = self.currentPage() - Math.floor(pagerCount / 2);
            self.showStartPagerDot(true);
        } else {
            self.showStartPagerDot(false);
        };
        end = start + pagerCount - 1;
        if (end > self.pageCount()) {
            end = self.pageCount();
            self.showEndPagerDot(false);
        } else {
            self.showEndPagerDot(true);
        };
        result.push(1);
        for (var i = start+1; i <= end; i++) {
            result.push(i);
        };
        self.pages(result);
    }
    //总页数
    self.formatedPageCount = ko.computed(function () {
        return "共" + self.pageCount() + "页";
    });
    //总记录数
    self.formatedItemCount = ko.computed(function () {
        return "共" + self.total() + "条数据";
    });
    //页面跳转
    self.goToPageHandler = goToPageHandler;
    self.goToPage = function (page) {
        if (typeof self.goToPageHandler == "function") {
            self.goToPageHandler.call(self, page , function (data) {
                self.pageCount(data.PageInfo.PageCount);
                self.currentPage(page);
                self.jumpPage(null);
                self.caculatePages();
                self.total(data.count);
            });

        };
    };
    //回到首页
    self.goToFirst = function () {
        self.goToPage(1);
    };
    //跳转到最后一页
    self.goToLast = function () {
        self.goToPage(self.pageCount());
    };
    //上一页
    self.goToPrev = function () {
        var cur = self.currentPage();
        if (cur > 1) {
            self.goToPage(cur - 1);
        };
    };
    //下一页
    self.goToNext = function () {
        var cur = self.currentPage();
        if (cur < self.pageCount()) {
            self.goToPage(cur + 1);
        };
    };
    //跳转
    self.jump = function () {
        var page = self.jumpPage();
        if (page > 0 && page <= self.pageCount()) {
            self.goToPage(page);
        };
    };
};