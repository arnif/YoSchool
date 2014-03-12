'use strict';

//empty eval form
angular.module('yoSchoolApp')
  .controller('TeachernewevalCtrl', function ($scope, LoginFactory, $location) {
    var role = LoginFactory.getUser();
    console.log(role.Role);
    // if (role.Role !== 'admin') {
    //   $location.path('/');
    // }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var template = {
      'titleIs': '',
      'titleEn': '',
      'introTextIs': '',
      'introTextEn': '',
      'courseQuestions':[],
      'teacherQuestions':[]
    };

    $scope.addCourseQuestion = function(what) {
      console.log('new question');
    };









  });
