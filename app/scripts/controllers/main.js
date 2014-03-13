'use strict';

angular.module('yoSchoolApp')
.controller('MainCtrl', function ($scope, $location, $http, LoginFactory) {

  // $scope.userName = LoginFactory.getUsername();

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.person = {'user': 'sindris12', 'pass': 'asdgasdgas'};


  $scope.loginForm = function(isValid) {

    if (isValid) {
      // Submit as normal

      var status;

      var promise = LoginFactory.login($scope.person);

      promise.then(function(d) {
        // console.log(d);
        $scope.data = d;

        if (d.status === 200) {
          //login success
          // $('.loginFail').hide();
          LoginFactory.setToken(d.data.Token);
          LoginFactory.setUser(d.data.User);
          $http.defaults.headers.common.Authorization = 'Basic ' + LoginFactory.getToken();

          if (d.data.User.Role === 'admin') {

            $location.path('/teacher');

          } else {

            $location.path('/student');
          }


        } else {
          //login fail

          $scope.loginFail = 'Username or password incorrect';
          // $('.loginFail').show();
        }

      });


    } else {
      $scope.loginFail = 'Failed to login';
    }

  };

});
