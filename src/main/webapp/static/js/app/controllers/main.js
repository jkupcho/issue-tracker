'use strict';

angular.module('issueApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.awesomeThings = $http.get('api/issue')
      .success(function(data) {
        $scope.awesomeThings = data;
      });
  });