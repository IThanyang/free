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
var studentModule=angular.module("studentModule",[]);
studentModule.controller("studentController",function($scope,$http){
$scope.currentPage=1;
$scope.maxPage=0;
$scope.isLastAble="no-drop";
$scope.isNextAble="pointer";
$scope.searchType="s_name";
$scope.createTable=function(data,curpage){
$scope.students=data;
// console.log(data);
var arr=[];
for(var i=1;i<=data.maxpage;i++){
arr.push(i);
}
$scope.page=arr;
$scope.currentPage=curpage;
$scope.maxPage=data.maxpage;
if($scope.currentPage!=1){
$scope.isLastAble="pointer";
}else{
$scope.isLastAble="no-drop";
}
if($scope.currentPage!=$scope.maxPage){
$scope.isNextAble="pointer";
}else{
$scope.isNextAble="no-drop";
}
};
$scope.searchStu=function(curpage,eachpage){
$scope.maxPage=0;
$http.post("/students/searchStudent",{type:$scope.searchType,val:$scope.searchVal,curpage:curpage,eachpage:eachpage})
.success(function(data){
$scope.createTable(data,curpage);
})
};
$scope.searchStu(1,5);
$scope.toLastPage=function(){
if($scope.currentPage!=1){
$scope.searchStu($scope.currentPage-1,5);
}else{
return 0;
}
};
$scope.toNextPage=function(){
if($scope.currentPage!=$scope.maxPage){
$scope.searchStu($scope.currentPage+1,5);
}else{
return 0;
}
};
$scope.deleteStu=function(id){
$http.get("/students/deleteStudent?id="+id+"").success(function(data){
$scope.searchStu(1,5);
})
};
$scope.addStu=function(){
$http.post("/students/addStudent",{name:$scope.addName,age:$scope.addAge,sex:$scope.addSex})
.success(function(data){
$scope.searchStu($scope.maxPage,5);
})
};
$scope.changeStu=function(){
$http.post("/students/changeStudent",{name:$scope.configName,age:$scope.configAge,sex:$scope.configSex,id:$scope.configId}).success(function(data){
$scope.searchStu($scope.currentPage,5);
})
}
});

