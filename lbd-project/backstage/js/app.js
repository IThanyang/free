
var app=angular.module('app',['ui.router',"oc.lazyLoad"]);
    //懒加载
    app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }]);
    // 按模块化加载其他的脚本文件
    app.constant('Modules_Config', [
        {
            name: 'treeControl',
            serie: true,
            files: []
        }
    ]);
    app.config(["$ocLazyLoadProvider","Modules_Config",routeFn]);
    function routeFn($ocLazyLoadProvider,Modules_Config){
        $ocLazyLoadProvider.config({
            debug:false,
            events:false,
            modules:Modules_Config
        });
    };