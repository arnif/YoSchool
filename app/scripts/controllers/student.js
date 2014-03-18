'use strict';

//show list of eval
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, $http, StudentFactory, LoginFactory, LangFactory) {

    // var role = LoginFactory.getUser();

    // if (role.Role !== 'student' || role.Role !== 'admin') {
    //   $location.path('/');
    // }

    $scope.info = LoginFactory.getUser();

    $scope.lan = LangFactory.getLang();

    $scope.getEvals = function() {

      StudentFactory.getMyEval().then(function(d) {
         console.log(d);
        $scope.allMyEval = d.data;
      });
    };


  });
