var s = angular.module("spa",["ngRoute"]);
s.config(function($RouteProvider){
    $RouteProvider.when("/student",{
        templateUrl : "student.html",
        controller : "studController"
    })
    .when("/courses",{
        templateUrl : "courses.html",
        controller : "courseController"
    })
    .when("/contactUs",{
        templateUrl : "contactUs.html",
        controller : "contactController"
    })
    .when("/home",{
        templateUrl : "home.html",
        controller : "homeController"
    })
    .otherwise({
        redirectTo : "/home"   
    });
});
s.controller("studController",function($scope){
    $scope.studs = [
        {sname : "Jignesh",sroll : 1007},
        {sname : "Jonty",sroll : 1008},
        {sname : "Akash",sroll : 2009},
        {sname : "Saurabh",sroll : 309},
        {sname : "Ankur",sroll : 987},
        {sname : "JigE",sroll : 786},
        {sname : "Shubham",sroll : 980}
    ];
});
s.controller("courseControlller",function($scope){
    $scope.courses = ["AngularJs","Java","Python","Big Data","Hadoop","Mean Stack","UI","Hacking","php"];
})