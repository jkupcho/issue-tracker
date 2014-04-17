'use strict';

angular.module('issueApp', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/issues/:id', {
    	  templateUrl: 'views/issues/issue_detail.html',
    	  controller: 'IssueCtrl'
      });
  });
