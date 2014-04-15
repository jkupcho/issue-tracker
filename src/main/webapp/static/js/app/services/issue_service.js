'use strict';

angular.module('issueApp')
	.service('IssueService', function IssueService($resource) {
		var Issue = $resource('api/issue', {}, {
			get: { method: 'GET', params: {id: '@id'}, url: 'api/issue/:id' }
		});
		
		this.addIssue = function(issue) {
			issue = new Issue(issue);
			issue.$save();
			return issue;
		};
		this.getAllIssues = function(retVal) {
			return Issue.query();
		};
		this.getIssue = function(issueId) {
			return Issue.get({id: issueId});
		};
		
	});