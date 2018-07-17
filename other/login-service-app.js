var s = angular.module("serv",[]);
s.controller("createService",function($scope,loginService){
    $scope.t1 = "";
    $scope.p1 = "";
    $scope.x = "";
    $scope.login = function(){
        $scope.x = loginService
        .isValidUser($scope.t1,$scope.p1);
    };
});

//s.service("loginService",function(){
//    this.isValidUser = function(u,p){
//        var status = false;
//        if(u=="user" && p=="test"){
//            status = true;
//        }
//        return status;
//    };
//});
s.factory("loginService",function(){
    var fac = {};
    fac.isValidUser = function(u,p){
        alert("Message From Factory");
        var s = false;
        if(u=="jignesh" && p=="j22i05g96"){
            s = true;
        }
        return s;
    }
    return fac;
})