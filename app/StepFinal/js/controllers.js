'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])

    .controller('NinjaListCtrl', function($scope, Ninja) {
        $scope.ninjas = Ninja.query();
        $scope.orderProp = 'firstname';
    })

    .controller('NinjaCtrl', function($scope, $routeParams, Ninja, NinjaStorage) {

        $scope.editMode = false;

        Ninja.get({ninjaName: $routeParams.ninjaName}, function(ninja){
            $scope.ninja = NinjaStorage.get($routeParams.ninjaName, ninja);
        });

        $scope.save = function(ninja, ninjaBio){
            NinjaStorage.put(ninja, ninjaBio);
        };

        $scope.switchMode = function(editMode){
            $scope.editMode = !editMode;
        }
    });

