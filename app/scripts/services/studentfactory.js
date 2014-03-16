'use strict';

angular.module('yoSchoolApp')
  .factory('StudentFactory', function ($http, $q, API) {
    // Service logic
    // ...

    var coursename;


    // Public API here
    return {
      getMyEval: function() {
        var promise = $http.get(API + '/my/evaluations').then(function(response) {
          //console.log(response);
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },
      getEvalById: function(courseID, semester, evaluationID) {
        var promise = $http.get(API + '/courses/' + courseID +'/' + semester + '/evaluations/'+ evaluationID).then(function(response){
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },
     getMyCourses: function() {
        var myCourses = $http.get(API + '/my/courses').then(function(response) {
          //console.log(response);
          return response;
        }, function(error) {
          return error;
        });
        return myCourses;
      },
      getCourseInfo: function(id, semester) {
        var promise = $http.get(API + '/courses/' + id + '/' + semester + '/teachers').then(function(response) {
          return response;
        }, function(error) {
          return error;
        });
        return promise;
      },
      setCourseName: function(name) {
        coursename = name;
      },
      getCourseName: function() {
        return coursename;
      }
    };
  });
