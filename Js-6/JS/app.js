// var tran= angular.module("transmit", ['ui.router']);
angular.module('transmit',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/Home");

     $stateProvider

        .state("Home", {
            url:"/Home",
            templateUrl: "Home.html"
        })
        .state("Home.Article",{
            url:"/Article",
            templateUrl: "Article.html"
        })
        .state("Home.Student",{
            url:"/Student",
            templateUrl: "Student.html",
            controller:"mycon"
        })
})
.controller('mycon', function($scope,$http) {
    $http({
        method:'GET',
        url:'/carrots-admin-ajax/a/article/search',
    })
    .then(function successCallback(response){
         $scope.a = response.data.data;
         console.log($scope.a);
         console.log(response);
    });
})
.filter("ChangeCode",function () {
    return function (type) {
        var changed = "";
        switch (type){
            case 0:changed = "首页banner";break;
            case 1:changed = "找职位banner";break;
            case 2:changed = "找精英banner";break;
            case 3:changed = "行业大图";break;
        }
         return changed;
    }
})
.filter("Sta",function() {
    return function(status) {
        var sta ="";
        switch(status){
            case 1:sta = "草稿";break;
            case 2:sta = "上线";break;
        }
        return sta;
    }
});

