'use strict';

angular.module('yoSchoolApp')
  .factory('StudentFactory', function ($http, $q, API) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // var myeval = function() {
    //   $http({method: 'GET', url: '/api/v1/my/evaluations'}).
    //   success(function(data, status, headers, config) {
    //     console.log(data + status + headers + config);
    //     return data;
    //   }).
    //   error(function(data, status, headers, config) {
    //     console.log(data + status + headers + config);
    //   });
    // };

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getMyEval: function() {
        var promise = $http.get(API + '/my/evaluations').then(function(response) {
          //console.log(response);
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },

     getMyCourses: function() {
        var myCourses = $http.get(API + '/my/courses').then(function(response) {
          //console.log(response);
          console.log('FOKK JUU');
          return response;
        }, function(error) {
          return error;
        });
        return myCourses;
      }
    };
  });
