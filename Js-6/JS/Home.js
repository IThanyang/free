/*var home=angular.module('Home_app', ['ui.router'])
home.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('/index',{
			url:'/index',
			views:{
				'':{
					templateUrl:'paging/Article.html'
				},
				'Sidebar@index':{
					templateUrl:'paging/Sidebar.html',
				},
				'Main@index':{
					templateUrl:'paging/Main.html'
				}
			}
		})
})*/
/*angular.module('Home_app', ['ul.router']).config([function($stateProvider) {
	$stateProvider.state(stateName,stateConfig);
	$stateProvider
		.state('repost',{
			views:{
				'Sidebar':{
					templateUrl: 'Sidebar.html',
					controller: function($scope){ ... controller stuff just for Sidebar view ... }
				},
				'Main':{
					templateUrl:'Main.html',
					controller:function($scope) {...controller stuff just for Main view...}
				}
			}
		})
}])*/
var home=angular.module('Home_app', ['&apos;ui.router&apos;']);
home.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('','/Article');
	$stateProvider
		.state('Article',{
			url:'/Article',
			templateUrl:'Article.html'
		})
		.state('Article.Sidebar',{
			url:'Sidebar',
			templateUrl:'Sidebar.html'
		})
		.state("Article.Main", {
            url:"/Main",
            templateUrl: "Main.html"
        });
});
