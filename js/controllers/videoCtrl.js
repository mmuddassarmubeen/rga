
angular = require('angular');

angular.module('rga')
	.controller('videoCtrl', ['$scope','videoService',function videoCtrl($scope,videoService){
		$scope.videos = videoService.videos;
		$scope.modalShown = false;
		$scope.modal = function(link){
			$scope.modalShown = !$scope.modalShown;
			videoService.setLink(link);
			console.log('set the link');
			console.log(link);
		};
	}]);
