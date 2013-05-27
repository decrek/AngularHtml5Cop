'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])
    .controller('NinjaCtrl', function($scope) {
    $scope.ninjas = [{name:'Thijs'}, {name:'Declan'}];
});

