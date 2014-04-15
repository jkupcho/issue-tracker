'use strict';

angular.module('issueApp')
  .controller('IssueCtrl', function($scope, $routeParams, IssueService) {
	  IssueService.getIssue($routeParams.id).then(function(response){
		  $scope.issue = response.data;
	  });
  });