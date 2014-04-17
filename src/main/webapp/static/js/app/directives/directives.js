'use strict';

angular.module('issueApp')
	.directive('itCalendar', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/templates/it-calendar.html',
			scope: {
				inputDate: '=date'
			}
		};
	})
	.directive('itBarChart', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/templates/bar-chart.html',
			scope: {
				data: '=',
				width: '@',
				height: '@'
			},
			compile: function(element, attrs) {
				return {
					pre: function preLink(scope, element, attrs, controller) { 
						if(!attrs.width) { attrs.width = 420; }
						if(!attrs.height) { attrs.height = 20; }
					},
					post: function postLink(scope, element, attrs) {
						scope.$watch('data', function(data) {
							var x = d3.scale.linear()
								.range([0, attrs.width]);
					
							var chart = d3.select(element[0])
								.append("svg")
									.attr("width", attrs.width)
									.attr("class", "chart");
							
							x.domain([0, d3.max(data, function(d) { return d; })]);
							
							chart.attr("height", attrs.height * data.length);
							
							var bar = chart.selectAll("g")
									.data(data)
								.enter().append("g")
									.attr("transform", function(d,i) { return "translate(0," + i * attrs.height + ")"; });
							
							bar.append("rect")
								.attr("width", function(d) { console.log(x(d)); return x(d); })
								.attr("height", attrs.height - 1);
								
							bar.append("text")
								.attr("x", function(d) { return x(d) - 3; })
								.attr("y", attrs.height / 2)
								.attr("dy", ".35em")
								.text(function(d) { return d; });
						}, true);
					}					
				};
			}
		};
	});