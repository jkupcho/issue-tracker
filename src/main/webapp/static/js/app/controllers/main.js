'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $routeParams, IssueService) {
	  
    $scope.awesomeThings = IssueService.getAllIssues();
    
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