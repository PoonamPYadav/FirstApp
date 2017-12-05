app.controller('mainctrl',['$scope','$routeParams','myservices',function($scope,$routeParams,myservices){

var ResultId = $routeParams.Id;
//console.log(ResultId);
  var factary=myservices.getary();

  //console.log(factary);

  var aryres=[];

  for(var i=0;i<factary.length;i++)
  {
    if(ResultId==factary[i].Id)
    {
    aryres.push(factary[i]);
    }
  }

  $scope.driverList=aryres;



  //console.log($scope.driverList);
}]);
