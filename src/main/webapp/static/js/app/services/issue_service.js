'use strict';

angular.module('issueApp')
	.service('IssueService', function IssueService($http){
		this.addIssue = function(issue) {
			return $http.post('api/issue', issue)
				.success(function(data){
					return data;
				});
		};
		this.getAllIssues = function(retVal) {
			return $http.get('api/issue')
				.success(function(data) {
					return data;
				});
		};
		this.getIssue = function(issueId) {
			return $http.get('api/issue/' + issueId)
				.success(function(data){
					return data;
				});
		}
	});