
app.controller('driverController',['$scope','myservices',function($scope,myservices){

var ary=myservices.getary();
$scope.driverList=ary;



}]);
