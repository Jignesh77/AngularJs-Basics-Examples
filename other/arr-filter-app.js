var a = angular.module("arr",[]);
a.controller("arrfilter",function($scope){
    $scope.ar = [10,30,50,47,7,9,11,13,64,874,98,89,45,23];
})
a.filter("evenNumbers",function(){
    var f1 = function(input){
        var o1 = [];
        for(var i=0;i<input.length;i++){
        if(input[i]%2==0){o1.push(input[i]);}
        }
        return o1;
    }
    return f1;
});
a.filter("oddNumbers",function(){
    var f2 = function(input){
        var o2 = [];
        for (var i=0;i<input.length;i++){
            if(input[i]%2!=0){
                o2.push(input[i]);
            }
        }
        return o2;
    }
    return f2;
});