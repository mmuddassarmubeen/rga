
angular = require('angular');

angular.module('rga')
	.controller('videoCtrl', function videoCtrl($scope,videoService){
			$scope.vids = {
			"videos" : [
			{"title":"First title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":"/images/angular.jpg"},
			{"title":"Second title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":"/images/angular.jpg"},
			{"title":"Third title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":"/images/angular.jpg"}
			]
		};
		$scope.modalShown = false;
		$scope.modal = function(){
			$scope.modalShown = !$scope.modalShown;
		}
	});
