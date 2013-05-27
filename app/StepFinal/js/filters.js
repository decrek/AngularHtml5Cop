'use strict';

/* Filters */

angular.module('html5cop.filters', [])

    .filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    })
    .filter('imgurl', function() {
        return function(input) {
            return '../img/' + input;
        };
    })
    .filter('markdown',function() {
        var converter = new Showdown.converter();
        return function(value) {
            return converter.makeHtml(value || '');
        };
    });

