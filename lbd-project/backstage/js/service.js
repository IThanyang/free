factory('dataService',function(){
    return {
        golbal_sitename:"this is the shared value",
        sayHello:function(msg){
            alert(msg);
        }
    }
});