(function() {

   //chamando o módulo
   var app = angular.module("githubViewer");

   var UserController = function($scope, github, $routeParams) {

      var onUserComplete = function(data) {
         $scope.user = data;
         github.getRepos($scope.user).then(onRepos, onError);
      };

      var onRepos = function(data) {
         $scope.repos = data;
      };

      var onError = function(reason) {
         $scope.error = "Could not fetch the data";
      };

      $scope.username = $routeParams.username;
      $scope.repoSortOder = "-stargazers_count";
      github.getUser($scope.username).then(onUserComplete, onError);

   };

   //registrando controller no módulo
   app.controller("UserController", ["$scope", "github", "$routeParams", UserController]);

}());