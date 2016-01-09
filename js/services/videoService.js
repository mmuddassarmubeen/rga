angular = require('angular');

angular.module('rga')
	.factory('videoService', function(){
		
		var store = {
			"videos" : [
			{"title":"First title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":""},
			{"title":"Second title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":""},
			{"title":"Third title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":""}
			]
		};
		return store;
	})