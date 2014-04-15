'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $routeParams, IssueService) {
    IssueService.getAllIssues().then(function(response){
		$scope.awesomeThings = response.data;
	});
    $scope.addIssue = function(issue) {
    	IssueService.addIssue(issue).then(function(response) {
        	$scope.awesomeThings.push(response.data); 
        }); 
    };
  });