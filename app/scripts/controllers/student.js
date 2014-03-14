'use strict';

//show list of eval
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, $http, StudentFactory, LoginFactory) {


    $scope.info = LoginFactory.getUser();



    $scope.getEvals = function() {

      StudentFactory.getMyEval().then(function(d) {
        console.log(d);
        $scope.allMyEval = d;
      });
    };


  });
