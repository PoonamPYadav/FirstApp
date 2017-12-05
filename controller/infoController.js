app.controller("infoController", function($location,$scope, $routeParams) {
  var ResultId = $routeParams.Id;
  //console.log(ResultId);
  var data = [
    {
      Id: 1,
      round: 6,
        team:"red bull",
      Results: [{
        grid: 'Austrilia Grand Prix',
        position: 2
      }]
    },{
      Id: 1,
      round: 3,
        team:"red bull",
      Results: [{
        grid: 'India Grand Prix',
        position: 3
      }]
    },{
      Id: 1,
      round: 2,
      team:"red bull",
      Results: [{
        grid: 'German Grand Prix',
        position: 1
      }]
    },
    {
      Id: 2,
      round: 3,
        team:"ferrari bull",
      Results: [{
        grid: 'German Grand Prix',
        position: 3

      }]
    },
    {
      Id: 3,
      round: 4,
        team:"lotus bull",
      Results: [{
        grid: 'India Grand Prix',
        position: 4
      }]
    }
  ];

var ary2=[];

for(var i=0;i<data.length;i++)
{
  if(ResultId==data[i].Id)
  {
  ary2.push(data[i]);
  }
}

$scope.races=ary2;

$scope.goback=function() {
    $location.path('/in');
}


});
