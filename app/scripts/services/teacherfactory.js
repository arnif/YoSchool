'use strict';

angular.module('yoSchoolApp')
  .factory('TeacherFactory', function ($http, $q, API) {
    // Service logic
    // ...

    // Public API here
    return {
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
      getAllEval: function() {
        var promise = $http.get(API + '/evaluations').then(function(response) {
          // console.log(response);
          return response;
        }, function(error) {
          // console.log(error);
          return error;
        });
        return promise;
      },
      postEvalTemplate: function(template) {
        console.log('Template to save');
        console.log(template);
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
