'use strict';

angular.module('yoSchoolApp')
  .controller('CourseCtrl', function ($scope, $routeParams, StudentFactory, LangFactory) {

    $scope.lan = LangFactory.getLang();


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
