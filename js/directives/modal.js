angular = require('angular');

var myModal = angular.module('rga');
myModal.directive('modal', function () {
    return {
        restrict: 'E',
        scope: {
            link: '=modalLink'
        },
        templateUrl: '/partials/modal.html',
        transclude: true,
        controller: function ($scope) {
            
        }
    };
});

