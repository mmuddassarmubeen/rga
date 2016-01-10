angular = require('angular');

angular.module('rga')
	.factory('videoService', function(){
		
		var store = {
			"videos" : [
			{"title":"First title", "link":"https://www.youtube.com/watch?v=IGy2c-XwXgI", "img":"/images/angular.jpg"},
			{"title":"Second title", "link":"https://www.youtube.com/watch?v=ejBkOjEG6F0", "img":"/images/angular.jpg"},
			{"title":"Third title", "link":"https://www.youtube.com/watch?v=f67PFtrldGQ", "img":"/images/angular.jpg"}
			]
		};
		store.currentLink = "";
		store.setLink = function(link)
		{
			store.currentLink = link;
		}
		store.getLink = function()
		{
			return store.currentLink;
		}
		return store;
	})