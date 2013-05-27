'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])

    .controller('NinjaCtrl', function($scope, Ninja, $routeParams) {
        $scope.ninja = Ninja.get({ninjaName: $routeParams.ninjaName});
    })

    .controller('NinjaListCtrl', function($scope, Ninja) {
        $scope.ninjas = Ninja.query();
        //initial order
        $scope.orderProp = 'lastname';
    });

