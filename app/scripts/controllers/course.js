'use strict';

angular.module('yoSchoolApp')
  .controller('CourseCtrl', function ($scope, $routeParams, StudentFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var id = $routeParams.id;
    var semester = $routeParams.semester;

    $scope.courseName = StudentFactory.getCourseName();

    $scope.theCourse = function() {
      var promise = StudentFactory.getCourseInfo(id, semester);

      promise.then(function(data) {
        $scope.courseInfo = data.data;

      });
    };


  });
