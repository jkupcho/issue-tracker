'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $routeParams, IssueService) {
	  
    $scope.awesomeThings = IssueService.getAllIssues();
        
    $scope.dataPoints = [25, 23, 12, 15, 15];
        
    $scope.$watch("dataPoints", function() {
    	console.log("First changed.");
    }, true);
    
    $scope.addIssue = function(issue) {
    	var retVal = IssueService.addIssue(issue);
        $scope.awesomeThings.push(retVal);
    };
    
    $scope.isClosed = function(issue) {
    	return issue.closed !== null;
    };
    
    $scope.isOpen = function(issue) {
    	return issue.closed === null;
    };
    
    $scope.closeIssue = function(issue) {
    	return IssueService.closeIssue(issue);
    };
    
  });