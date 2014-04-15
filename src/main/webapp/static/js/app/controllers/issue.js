'use strict';

angular.module('issueApp')
  .controller('IssueCtrl', function($scope, $routeParams, $http) {
    $scope.issue = $http.get('api/issue/' + $routeParams.id)
		.success(function(data) {
			return data;
		});
    
    console.log($scope.issue);
  });