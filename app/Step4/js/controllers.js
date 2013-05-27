'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])
    .controller('NinjaCtrl', function($scope, $http) {
//    $scope.ninjas = [{firstname:'Thijs',lastname:'Louisse' }, {firstname:'Declan', lastname:'Rek'}, {firstname:'Peter', lastname:'Peerdeman'}, {firstname:'Willem', lastname:'Mulder'}, {firstname:'Matijs', lastname:'Moest'}];

    $http({method: 'GET', url: '../ninjas/ninjas.json'}).
        success(function(data, status, headers, config) {
            $scope.ninjas = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

    //initial order
    $scope.orderProp = 'lastname';
});

