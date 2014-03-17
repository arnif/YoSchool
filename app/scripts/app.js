'use strict';

angular.module('yoSchoolApp', [
  'ngRoute', 'angles', 'ui.bootstrap'
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
      .when('/student/evaluation/:courseID/:semester/:evalID', {
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
      .when('/teacher/NewEval/:evaluationID', {
        templateUrl: 'views/teacherneweval.html',
        controller: 'TeachernewevalCtrl'
      })
      .when('/teacher/ShowEval/:evaluationID', {
        templateUrl: 'views/teachershoweval.html',
        controller: 'TeachershowevalCtrl'
      })
      .when('/student/course/:semester/:id', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
