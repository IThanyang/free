'use strict';//严格模式
angular.module('transmit',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
//渲染页面
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
        .state("Home.Upload",{
            url:"/Upload",
            templateUrl:"upload.html",
            controller:"upload"
        })
})
.controller('mycon', function($scope,$http) {
    $scope.page="1";
    $scope.size="6";
    $scope.papes=1;
    $scope.StartDate='';
    $scope.EndDate='';
    $scope.type='';
    $scope.status='';
    $scope.Determine=function() {
        if ($scope.StartDate=='') {
            $scope.Start=''
        }else{
            $scope.Start=new Date($scope.StartDate).getTime()
        };
        if ( $scope.EndDate=='') {
            $scope.End=''
        }else {
             $scope.End=new Date($scope.EndDate).getTime()
        }
        console.log("page="+$scope.page+"&size="+$scope.size+'&startAt='+$scope.Start+'&endAt='+$scope.End+'&type='+$scope.type+'&status='+$scope.status);
        $http({
            method:'GET',
            url: "/carrots-admin-ajax/a/article/search?page="+$scope.page+"&size="
            +$scope.size+'&startAt='+$scope.Start+'&endAt='+$scope.End+'&type='+$scope.type+'&status='+$scope.status
            })
         .then(function successCallback(response){
            $scope.a = response.data.data;  //向后台取值
            $scope.size= response.data.data.size;
            $scope.Num=response.data.data.total;
            $scope.total_page=Math.ceil($scope.Num/$scope.size);
            $scope.pages =new Array($scope.total_page);
            /* $scope.page=response.data.data.page;*/ //page 不会返回。 直接请求就可以
            for (var i =0;i<$scope.total_page;i++) {
                $scope.pages[i]=i+1;
            };
            console.log($scope.a);
            console.log($scope.Num);
            console.log($scope.total_page);
            console.log($scope.pages);
            //分页按钮
            $scope.page_x=function() {
                $scope.page= Number(event.target.innerText);
                $scope.Determine();
            }
        })
    }
    //默认加载一次请求页面函数
    $scope.Determine();
    //搜索
    $scope.search=function() {
        $scope.Determine();
    }
    //清空
    $scope.Eliminate=function() {
        $scope.StartDate='';
        $scope.EndDate='';
        $scope.type='';
        $scope.status='';
        $scope.Determine();
    }

})
//过滤
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
})
.filter("Sta_edit",function() {
    return function(status) {
        var Sta_edit="";
        switch(status){
            case 1: Sta_edit= "上线";break;
            case 2: Sta_edit="下线";break;
        }
        return Sta_edit;
    }
})
//upload的controller控制器
.controller('upload', function($scope,$http){
    $scope.reader = new FileReader(); //FileReader接口提供了一个异步的APl
    //访问不同的文件 必须重新调用FileReader的函数构造 也就是重新new一个FileREader对象
    //因为每调用一次，FileReader对象都将返回一个新的FileReader实例，只有这样，才能实现访问不同文件的数据
    $scope.upload = function(files) {
        document.getElementById('td_tr').style.display='table-row-group';
        $scope.reader.readAsDataURL(files[0]); //获取API异步读取的文件数据，另存为数据URL，并将URL绑定到IMG的src
        $scope.reader.onload = function(e) {
            document.getElementById("showHere").src=e.target.result;
        };
        $scope.show1 = 'true';
        $scope.picData= document.getElementById('file').files[0];
        $scope.$apply();
        console.log($scope.picData.name);
    };
    $scope.Upload_immediately=function() {
        var form = document.getElementById('form1');
        var xhr = new XMLHttpRequest();
        var formData =new FormData('form1');
        var filenInput = document.getElementById('file');
        var file =filenInput.files[0];
        formData.append('file',file);
        xhr.open('POST','/carrots-admin-ajax/a/u/img/task');

        xhr.onload=function() {
            if(this.status===200)
                alert('上传成功')
        }

        xhr.send(formData);
        xhr = null;//手动制空 防止内存泄漏！！！！ JS垃圾回收装置。
        document.getElementById('myProgress').value="100";

    };

    $scope.Delete=function() {
        $('.td_tr').css('display','none');
    };

    $scope.change=function() {
        $('.change').css('display','block')
    }
    $scope.Submit=function() {

    }
})