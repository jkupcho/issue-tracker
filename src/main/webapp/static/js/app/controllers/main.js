'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.awesomeThings = $http.get('api/issue')
      .success(function(data) {
        $scope.awesomeThings = data;
      });
    $scope.addIssue = function(issue) {
    	$http.post('api/issue', issue)
    		.success(function(data) {
    		$scope.awesomeThings.push(data);
    	});
    };
  });