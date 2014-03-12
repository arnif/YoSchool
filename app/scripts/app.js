'use strict';

angular.module('yoSchoolApp', [
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
      .when('/teacher', {
        templateUrl: 'views/teacher.html',
        controller: 'TeacherCtrl'
      })
      .when('/teacher/NewEval', {
        templateUrl: 'views/teacherneweval.html',
        controller: 'TeachernewevalCtrl'
      })
      .when('/teacher/ShowEval', {
        templateUrl: 'views/teachershoweval.html',
        controller: 'TeachershowevalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
