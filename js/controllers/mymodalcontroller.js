angular = require('angular');

var myModal = angular.module('rga');
myModal.controller('mymodalcontroller', ['$scope','videoService',function ($scope,videoService) {

	'use strict';
    $scope.currentlink = videoService.getLink();
    console.log('get the link');
	console.log($scope.currentlink);
}]);