'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $routeParams, IssueService) {
	  
    $scope.awesomeThings = IssueService.getAllIssues();
    
    $scope.addIssue = function(issue) {
    	var retVal = IssueService.addIssue(issue);
        $scope.awesomeThings.push(retVal);
    };
    
  });