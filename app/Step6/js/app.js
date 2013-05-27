'use strict';

/* App Module */

angular.module('html5cop', ['html5cop.services', 'html5cop.directives', 'html5cop.controllers']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('', {templateUrl: 'partials/ninja-list.html',   controller: 'NinjaCtrl'}).
        otherwise({redirectTo: ''});
}]);
