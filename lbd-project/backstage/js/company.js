
app.controller('Company',function ($http,$scope) {
    console.log(123123)
    var vm = this;
    $http({
        method:'GET',
        url:"/carrots-admin-ajax/a/company/search"
    })
    .then(function successCallback(data){
        vm.a = data.data
        console.log($scope.a);
    })
})