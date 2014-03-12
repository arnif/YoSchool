'use strict';

angular.module('yoSchoolApp')
.controller('MainCtrl', function ($scope, $location, $http, LoginFactory) {

  // $scope.userName = LoginFactory.getUsername();

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.person = {'user': '', 'pass': ''};


  $scope.submitted = false;
  $scope.loginForm = function(isValid) {

    if (isValid) {
      // Submit as normal
      // var user = $scope.login_form.username.$modelValue;
      // var pass = $scope.login_form.password.$modelValue;
      // console.log(pass);
      // console.log($scope.login_form.username.$modelValue);

      var status;

      LoginFactory.login($scope.person).then(function(d) {
        // console.log(d);
        $scope.data = d;

        if (d.status === 200) {
          //login success
          $('.loginFail').hide();
          LoginFactory.setToken(d.data.Token);
          LoginFactory.setUser(d.data.User);
          // console.log(LoginFactory.getToken());
          // console.log(LoginFactory.getUser());
          $http.defaults.headers.common.Authorization = 'Basic ' + LoginFactory.getToken();
          // console.log(d.data.User.Role);
          if (d.data.User.Role === 'admin') {
            // console.log('ADMIN!');
            $location.path('/teacher');
          } else {
            $location.path('/student');
          }


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
      $scope.login_form.submitted = true;
      console.log('form something');
    }

  };

});
