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
	.directive('spMarkdown', function($sanitize, markdownConverter) {
		return {
			restrict: 'E',
			templateUrl: 'directives/templates/sp-markdown.html',
			scope: {
				data: '=',
				edit: '@',
				showEditButton: '@'
			},
			compile: function(element, attrs) {
				return {
					pre: function preLink(scope, element, attrs, controller) {
						scope.edit = false;
						scope.showEditButton = false;
						
						var editButton = element.find('button.edit');
						var descriptionHeader = element.find('h4');
						
						editButton.css('top', descriptionHeader.position().top + 5);
						editButton.css('left', 100);
					},
					post: function postLink(scope, element, attrs) {
						
						function updateEditButton() {
							scope.showEditButton = true;
							element.find('button.edit').css('opacity', '1.0');
						}
						
						function removeEditButton() {
							if(!scope.edit) { scope.showEditButton = false; }
							else {
								element.find('button.edit').css('opacity', '0.25');
							}
						}
						
						element.on('mouseover', function(event) {
							scope.$apply(updateEditButton());
						});
						
						element.on('mouseleave', function(event) {
							scope.$apply(removeEditButton());
						});
						
						scope.$watch('edit', function(data) {
							if(!data) {
								var html = $sanitize(markdownConverter.makeHtml(scope.data));
								element.find(".description-text").html(html);
							}
						});
						
					}
				};
			}
		};
	})
	.directive('propertyEdit', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/templates/property-edit.html',
			scope: {
				model: '=',
				edit: '@',
				showEditButton: '@'
			},
			link: function(scope, element, attrs) {
				
				function updateEditButton() {
					scope.showEditButton = true;
					element.find('button.edit').css('opacity', '1.0');
				}
				
				function removeEditButton() {
					if(!scope.edit) { scope.showEditButton = false; }
					else {
						element.find('button.edit').css('opacity', '0.25');
					}
				}

				element.on('mouseover', function(event) {
					scope.$apply(updateEditButton());
				});
				
				element.on('mouseleave', function(event) {
					scope.$apply(removeEditButton());
				});
				
			}
		};
	})
	.directive('itBarChart', function() {
		
		var convertArrayToInt = function(data) {
			for(var i = 0; i < data.length; i++) {
				data[i] = parseInt(data[i]);
			}
		};
		
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
						if(!attrs.width) { attrs.width = 40; }
						if(!attrs.height) { attrs.height = 420; }
					},
					post: function postLink(scope, element, attrs) {
						
						var chart = d3.select(element[0])
							.append("svg")
								.attr("width", attrs.width)
								.attr("height", attrs.height)
								.attr("class", "chart");
						
						scope.$watch('data', function(data) {
							
							chart.selectAll("*").remove();
							
							if(!data) {
								return;
							}
							
							convertArrayToInt(data);
							
							var x = d3.scale.linear()
								.range([attrs.height, 0]);
							
							x.domain([0, d3.max(data, function(d) { return d; })]);
							
							chart.attr("width", attrs.width * data.length);
							
							var bar = chart.selectAll("g")
									.data(data)
								.enter().append("g")
									.attr("transform", function(d,i) { return "translate(" + i * attrs.width + ", 0)"; });
							
							bar.append("rect")
								.attr("y", function(d) { return x(d); })
								.attr("width", attrs.width - 1 )
								.attr("height", function(d) { return attrs.height - x(d); });
								
							bar.append("text")
								.attr("x", attrs.width / 2 )
								.attr("y", function(d) { return x(d) + 3; })
								.attr("dy", ".75em")
								.text(function(d) { return d; });
							
						}, true);
					}					
				};
			}
		};
	});