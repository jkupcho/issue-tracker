'use strict';

angular.module('issueApp')
	.provider('markdownConverter', function() {
		var opts = {};
		return {
			config: function(newOpts) {
				opts = newOpts;
			},
			$get: function() {
				return new Showdown.converter(opts);
			}
		};
	});