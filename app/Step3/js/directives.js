'use strict';

/* Directives */

var app = angular.module('html5cop.directives', [])
    .directive('person', function () {
        return {
            restrict:'E',
            template:
                '<div>'+
                    '<h3>{{ninja.firstname}} {{ninja.lastname}}</h3>'+
                '</div>'
        };
    });
