angular = require('angular');
require('angular-route');
require('ng-youtube-embed')

angular.module('rga', ['ngRoute','ngYoutubeEmbed'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'mainCtrl',
			templateUrl: '/partials/main-index.html'
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});

require('mainCtrl');
require('videoService');
require('header');
require('footer');
require('videoCtrl');
require('suggestedvideos');
require('modal');
require('mymodalcontroller');
