'use strict';

/* Directives */

var app = angular.module('html5cop.directives', []);

app.directive('person', function () {
    return {
        restrict:'E',
        template:
            '<div>'+
                '<h3>{{ninja.name}}</h3>'+
            '</div>'
    };
});
