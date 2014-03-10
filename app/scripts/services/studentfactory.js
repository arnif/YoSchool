'use strict';

angular.module('yoSchoolApp')
  .factory('StudentFactory', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var myeval = function() {
      $http({method: 'GET', url: '/api/v1/my/evaluations'}).
      success(function(data, status, headers, config) {
        console.log(data + status + headers + config);
        return data;
      }).
      error(function(data, status, headers, config) {
        console.log(data + status + headers + config);
      });
    };

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getMyEval: function() {
        var deferred = $http.defer();

        deferred.resolve(myeval);

        return deferred.promise;
      }
    };
  });
