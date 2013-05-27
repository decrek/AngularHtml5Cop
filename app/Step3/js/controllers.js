'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])
    .controller('NinjaCtrl', function($scope) {
        $scope.ninjas = [{firstname:'Thijs',lastname:'Louisse' }, {firstname:'Declan', lastname:'Rek'}, {firstname:'Peter', lastname:'Peerdeman'}, {firstname:'Willem', lastname:'Mulder'}, {firstname:'Matijs', lastname:'Moest'}];

        //initial order
        $scope.orderProp = 'lastname';
    });

