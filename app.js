var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "../templates/main.html"
    })
    .when("/info/:Id", {
      templateUrl: "../templates/info.html"
    })
    .otherwise({
      redirectTo: '/main'
    });
});
