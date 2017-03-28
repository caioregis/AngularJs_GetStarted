(function() {
  
   var github = function($http) {
    
      var getUser = function(username) {
         return $http.get("https://api.github.com/users/" + username)
                     .then(function(response){
                        return response.data;
                     });
      };
    
      var getRepos = function(user) {
         return $http.get(user.repos_url)
                     .then(function(response) {
                       return response.data;
                     });
      };
    
      var getReposDetails = function(username, reposname) {
         return $http.get("https://api.github.com/repos/" + username + "/" + reposname)
                     .then(function(response) {
                        return response.data;
                     });
      };
                  
      var getReposContributors = function(repos) {
         return $http.get(repos.contributors_url)
                     .then(function(response) {
                        return response.data;
                     });
      };
    
      return {
         getUser: getUser,
         getRepos: getRepos,
         getReposDetails: getReposDetails,
         getReposContributors: getReposContributors
      };
  };
  
  //chamando o módulo
  var module = angular.module("githubViewer");
  //registrando o serviço
  module.factory("github", github);
   
}());