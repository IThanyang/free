
//ForTheLichKing路由
    app.config(["$stateProvider","$urlRouterProvider",routeFn]);
    function routeFn($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when("","homepage/sidebar/welcome");
        $stateProvider
            //首页
            .state("homepage", {
                url: '/homepage',
                templateUrl: "homepage.html"
            })
            //侧边栏
            .state("homepage.sidebar",{
                url: '/sidebar',
                templateUrl: "sidebar.html"
            })
            //欢迎页
            .state("homepage.sidebar.welcome",{
                url: '/welcome',
                templateUrl: "welcome.html"
            })
            //公司信息
            .state("homepage.sidebar.company", {
                url: '/company',
                templateUrl: "company.html",
                cnotroller: "Company",
                controllerAs:"vm",
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load(["../js/company.js"]); //路径相对于HTML
                    }]
                }
            })
/*            //(article管理)列表页
            .state("homepage/list", {
                url: "",
                templateUrl: '',
                controller: ""
            })*/
/*
            //(article管理)新增页
            .state("homepage/add", {
                url: "",
                params: {data: null},
                templateUrl: " ",
                controller: ""
            })
            //公司列表页
            .state("homepage/company", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //(公司列表)新增页
            .state("homepage/companyAdd", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //职位列表页
            .state("homepage/position", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //(职位列表)新增页
            .state("homepage/positionAdd", {
                url: '',
                templateUrl: "",
                controller:""
            })
             //账号管理页
            .state("homepage/ID", {
                url: '',
                templateUrl: "",
                controller:""
            })

            //(账号管理)新增页
            .state("homepage/IDadd", {
                url: "",
                templateUrl: '',
                controller: ""
            })
            //角色管理页
            .state("homepage/role", {
                url: "",
                params: {data: null},
                templateUrl: " ",
                controller: ""
            })
            //(角色管理)新增页
            .state("homepage/roleAdd", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //密码修改页
            .state("homepage/changecode", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //模块管理页
            .state("homepage/management", {
                url: '',
                templateUrl: "",
                controller:""
            })
            //(模块管理)新增页
            .state("homepage/managementAdd", {
                url: '',
                templateUrl: "",
                controller:""
            })
            ;*/
        }
