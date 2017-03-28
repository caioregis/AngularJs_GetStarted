(function() {

   //chamando o módulo
   var app = angular.module("githubViewer");

   var RepoController = function($scope, github, $routeParams) {

      var onReposDetailsComplete = function(data) {
         $scope.reposDetails = data;
         github.getReposContributors($scope.reposDetails, $scope.reponame)
            .then(onReposDetailsContributors, onError);
      };

      var onReposDetailsContributors = function(data) {
         $scope.contributors = data;
      };

      var onError = function(reason) {
         $scope.error = "Could not fetch the data of repos";
      };

      $scope.username = $routeParams.username;
      $scope.reponame = $routeParams.reponame;
      $scope.repoSortOder = "-contributions";
      github.getReposDetails($scope.username, $scope.reponame)
         .then(onReposDetailsComplete, onError);

   };

   //registrando controller no módulo
   app.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);

}());