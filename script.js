(function() {
  
  //chamando o módulo
  var app = angular.module("githubViewer");
  
  var MainController = function($scope, $interval, $location) {
    
    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if($scope.countdown < 1) {
        $scope.search();
      } 
    };
    
    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.search = function() {
      if(countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + $scope.username);
    };
    
    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };
  
  //registrando controller no módulo
  app.controller("MainController", ["$scope", "$interval", "$location", MainController]);

}());