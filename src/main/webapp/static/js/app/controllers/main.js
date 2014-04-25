'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $routeParams, IssueService) {
	  
    $scope.awesomeThings = IssueService.getAllIssues();
    
    $scope.textValue = 'testing';
        
    $scope.dataPoints = {
   		values : [25, 23, 12, 15, 15, 23, 100]
    };
    
    $scope.$watch('dataPoints.values', function(data) {
    	
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