'use strict';

/* Directives */

angular.module('html5cop.directives', [])
    .directive('person', function () {
        return {
            restrict:'E',
            require: 'ngModel',
            scope: {
                person: '=ngModel'
            },
            template:
                '<div class="thumbnail">'+
                    '<img ng-src="{{person.imageurl}}"/>'+
                    '<div class="caption">'+
                    '<h3><a href="#/{{person.firstname}}">{{person.firstname}}</a></h3>'+
                    '<p>{{person.firstname}} {{person.lastname}}</p>'+
                    '</div>'+
                    '</div>'
        };
    });