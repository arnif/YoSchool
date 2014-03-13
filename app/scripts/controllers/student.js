'use strict';

//show list of eval
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, $http, StudentFactory, LoginFactory) {


    $scope.info = LoginFactory.getUser();

    $scope.courses = function() {
      var promise = StudentFactory.getMyCourses();

      promise.then(function(data) {

        $scope.course = data.data;
      });

    };


    $scope.getEvals = function() {

      StudentFactory.getMyEval().then(function(d) {
        // console.log(d);
        $scope.allMyEval = d;
      });
    };


  });
