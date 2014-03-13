'use strict';

//show list of eval
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, $http, StudentFactory, LoginFactory) {


    $scope.info = LoginFactory.getUser();



    $scope.courses = function() {
      console.log('get courses');
      var promise = StudentFactory.getMyCourses();

      promise.then(function(data) {
        console.log(data);
        $scope.course = data.data;
      });

    };


    $scope.getEvals = function() {

      StudentFactory.getMyEval().then(function(d) {
        console.log(d);
        $scope.allMyEval = d;
      });
    };


  });
