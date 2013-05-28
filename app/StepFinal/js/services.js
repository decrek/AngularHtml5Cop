'use strict';

/* Services */

angular.module('html5cop.services', ['ngResource']).
    factory('Ninja', function($resource){
        return $resource('../ninjas/:ninjaName.json', {}, {
            query: {method:'GET', params:{ninjaName:'ninjas'}, isArray:true}
        }

        );
    })
    .factory('NinjaStorage', function(){
        return {
            get: function (ninja) {
                if(!localStorage.getItem(ninja.firstname)){
                    localStorage.setItem(ninja.firstname, JSON.stringify(ninja));
                    return JSON.parse(localStorage.getItem(ninja.firstname) || '[]');
                } else {
                    return JSON.parse(localStorage.getItem(ninja.firstname) || '[]');
                }
            },

            put: function (ninja) {
                localStorage.setItem(ninja.firstname, JSON.stringify(ninja));
            }
        };
    });
