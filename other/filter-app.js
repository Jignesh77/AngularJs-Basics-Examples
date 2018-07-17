var f = angular.module("fill",[]);
f.controller("customFilter",function($scope){
    $scope.emp1 = {name : "Jignesh",gen:"Male"};
    $scope.emp2 = {name : "Mayuree",gen:"Female"};
});
f.filter("namefilter",function(){
    var n1 = function(input){
        var o1 = "";
        o1 = input.toUpperCase();
        return o1;
    };
    return n1;
});
f.filter("genfilter",function(){
    var n2 = function(input){
        var o2 = "";
        if(input=="Male"){o2 = "M";}
        if(input=="Female"){o2 = "F";}
        return o2;
    };
    return n2;
});