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
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'StudentCtrl'
      })
      .when('/student/evaluation', {
        templateUrl: 'views/studenteval.html',
        controller: 'StudentevalCtrl'
      })
      .when('/student/evaluation/:evaluationID', {
        templateUrl: 'views/studenteval.html',
        controller: 'StudentevalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
