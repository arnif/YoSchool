'use strict';

angular.module('yoSchoolApp')
  .factory('TeacherFactory', function ($http, $q, API) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getEvalTemplates: function() {
        var promise = $http.get(API + '/evaluationtemplates').then(function(response) {
          // console.log(response);
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },
      getEvalTemplateById: function(id) {
        var promise = $http.get(API + '/evaluationtemplates/' + id).then(function(response) {
          // console.log(response);
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },
      postEvalTemplate: function(template) {
        var promise = $http.post(API + '/evaluationtemplates', template).then(function(response) {
          return response;
        }, function(error){
          return error;
        });
        return promise;
      },
      publishTemplate: function(template) {
        console.log(template);
        var promise = $http.post(API + '/evaluations', template).then(function(response){
          return response;
        }, function(error){
          return error;
        });
        return promise;
      }
    };
  });
