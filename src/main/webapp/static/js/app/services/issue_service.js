'use strict';

angular.module('issueApp')
	.service('IssueService', function IssueService($resource) {
		var Issue = $resource('api/issue', {}, {
			get: { method: 'GET', params: {id: '@id'}, url: 'api/issue/:id' },
			saveIssue: { method: 'POST', url: 'api/issue/save' }
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
		this.closeIssue = function(issue) {
			issue.$saveIssue();
			return issue;
		};
		this.updateIssue = function(issue) {
			issue.$saveIssue();
			return issue;
		};
		
	});