'use strict';

/* App Module */

angular.module('html5cop', ['html5cop.services', 'html5cop.directives', 'html5cop.controllers', 'html5cop.filters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('', {templateUrl: 'partials/ninja-list.html',   controller: 'NinjaListCtrl'}).
      when('/:ninjaName', {templateUrl: 'partials/ninja-detail.html', controller: 'NinjaCtrl'}).
      otherwise({redirectTo: ''});
}]);
