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
            get: function (ninjaName, ninja) {
                if(!localStorage.getItem(ninjaName)){
                    localStorage.setItem(ninjaName, JSON.stringify(ninja));
                    return JSON.parse(localStorage.getItem(ninjaName) || '[]');
                } else {
                    return JSON.parse(localStorage.getItem(ninjaName) || '[]');
                }
            },

            put: function (ninja, ninjaBio) {
                ninja.bio = ninjaBio;
                localStorage.setItem(ninja.firstname, JSON.stringify(ninja));
            }
        };
    });
