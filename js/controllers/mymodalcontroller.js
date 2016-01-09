angular = require('angular');

var myModal = angular.module('rga');
myModal.controller('mymodalcontroller', function ($scope) {

	'use strict';
    $scope.link = 'Modal body';
    $scope.body = 'Modal body';
});