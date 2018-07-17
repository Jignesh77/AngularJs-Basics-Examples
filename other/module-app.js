var emp = angular.module("mod",[]);
emp.controller("personal",function($scope){
    $scope.name = "Jignesh";
    $scope.age = 24;
});

emp.controller("professional",function($scope){
    $scope.sal = 50000;
    $scope.job = "Mean Stack Developer";
});