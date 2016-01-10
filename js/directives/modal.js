angular = require('angular');

var myModal = angular.module('rga');
myModal.directive('modal', function () {
    return {
        restrict: 'EA',
        scope: {
            link:'=modalLink',
            handler: '=lolo'
        },
        templateUrl: '/partials/modal.html',
        transclude: true,
        controller: function ($scope) {
            $scope.handler = 'link'; 
        }
    };
});

