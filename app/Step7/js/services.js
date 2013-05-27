'use strict';

/* Services */

angular.module('html5cop.services', ['ngResource']).
    factory('Ninja', function($resource){
        return $resource('../ninjas/:ninjaName.json', {}, {
            query: {method:'GET', params:{ninjaName:'ninjas'}, isArray:true}
        });
    });