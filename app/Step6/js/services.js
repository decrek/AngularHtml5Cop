'use strict';

/* Services */

angular.module('html5cop.services', ['ngResource']).
    factory('Ninja', function($resource){
        return $resource('../ninjas/ninjas.json', {}, {
            query: {method:'GET', isArray:true}
        });
    });
