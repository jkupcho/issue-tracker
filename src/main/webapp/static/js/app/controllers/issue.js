'use strict';

angular.module('issueApp')
  .controller('IssueCtrl', function($scope, $routeParams, IssueService) {
	  $scope.issue = IssueService.getIssue($routeParams.id);
  });