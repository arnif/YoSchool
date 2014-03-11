'use strict';

angular.module('yoSchoolApp')
.controller('MainCtrl', function ($scope, $location, $http, LoginFactory) {

  // $scope.userName = LoginFactory.getUsername();

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];


  $scope.submitted = false;
  $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // Submit as normal
      var user = $scope.signup_form.username.$modelValue;
      var pass = $scope.signup_form.password.$modelValue;
      // console.log(pass);
      // console.log($scope.signup_form.username.$modelValue);

      var status;

      LoginFactory.login(user, pass).then(function(d) {
        console.log(d);
        $scope.data = d;

        if (d.status === 200) {
          //login success
          $('.loginFail').hide();
          LoginFactory.setToken(d.data.Token);
          LoginFactory.setUser(d.data.User);
          // console.log(LoginFactory.getToken());
          // console.log(LoginFactory.getUser());
          $http.defaults.headers.common.Authentication = 'Basic ' + LoginFactory.getToken();
          $location.path('/student');

        } else {
          //login fail
          // alert('NO');
          // console.log('nei');
          $scope.loginFail = 'Failed to login';
          $('.loginFail').show();
        }



      });

      // console.log(status);

      // LoginFactory.setUsername(user);

      // $scope.userName = user;

    } else {
      $scope.signup_form.submitted = true;
      console.log('form something');
    }
  };

});
