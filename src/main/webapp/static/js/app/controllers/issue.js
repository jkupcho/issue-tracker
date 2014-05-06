'use strict';

angular.module('issueApp')
  .controller('IssueCtrl', function($scope, $routeParams, IssueService) {
	  $scope.calOpened = false;
	  
	  $scope.issue = IssueService.getIssue($routeParams.id);
	  
	  $scope.save = function(issue) {
		  $scope.issue = IssueService.updateIssue(issue);
	  };
	  
	  $scope.open = function($event) {
		  $event.preventDefault();
		  $event.stopPropagation();
		  
		  $scope.calOpened = true;
	  };
	  
	  $scope.markdownText = "**Markdown**\n\n" + 
	  "* Testing\n" +
	  "* 1";
	  
	  $scope.secondTest = "testing";
	  
	  $scope.now = new Date();
	  
	  $scope.resolution = {name: 'Resolution', options: ['Fixed', 'Open']};
	  $scope.propertyTry = {name: 'Issue Name', value: 'Some Value'};
  });