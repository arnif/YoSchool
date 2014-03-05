'use strict';

angular.module('yoSchoolApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/student/evaluation/:evaluationID', {
        templateUrl: 'views/evaluation.html',
        controller: 'EvaluationCtrl'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'StudentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
