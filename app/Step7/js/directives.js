'use strict';

/* Directives */

angular.module('html5cop.directives', [])
    .directive('person', function () {
        return {
            restrict:'E',
            template:
                '<div class="thumbnail">'+
                    '<h3><a href="#/{{ninja.firstname}}">{{ninja.firstname}} {{ninja.lastname}}</a></h3>'+
                    '</div>'
        };
    });
