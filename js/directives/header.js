angular.module('rga')
    .directive('rgaHeader', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: '/partials/header.html'
        };

    });
