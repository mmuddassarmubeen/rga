/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular = require('angular');

angular.module('rga')
	.controller('mainCtrl', function mainCtrl($scope, $routeParams) {
		'use strict';

		$scope.link = 'https://www.youtube.com/watch?v=IGy2c-XwXgI';

	});
