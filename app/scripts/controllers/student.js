'use strict';

//show list of eval
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, $http, StudentFactory, LoginFactory, LangFactory) {


    $scope.info = LoginFactory.getUser();

    $scope.lan = LangFactory.getLang();

    $scope.getEvals = function() {

      StudentFactory.getMyEval().then(function(d) {
        // console.log(d);
        $scope.allMyEval = d.data;
      });
    };


  });
