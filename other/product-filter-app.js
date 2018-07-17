var p = angular.module("prod",[]);
p.controller("productfilter",function($scope){
    $scope.items =[
        {name : "Galaxy J7 Pro",brand : "Samsung",price :21000},
        {name : "Iphone 7",brand : "Apple",price : 50000},
        {name : "Xiomee Note 4",brand : "Redmi",price : 8000},
        {name : "1100",brand : "Nokia",price : 1000},
        {name : "F7",brand : "Oppo",price : 25000},
        {name : "Galaxy Y",brand : "Samsung",price : 12000},
        {name : "I6873",brand : "Intex",price : 3000},
        {name : "V9",brand : "Vivo",price : 21000}
    ];
})
p.filter("product",function(){
    var f1 = function(input,min,max){
        var o = [];
        for (var i=0;i<input.length;i++){
            if(input[i].price>=min && input[i].price<=max)
                {
                    o.push(input[i]);
                }
        }
        return o;
    }
    return f1;
});