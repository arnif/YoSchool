'use strict';

angular.module('yoSchoolApp')
  .controller('NavCtrl', function ($scope, StudentFactory, LoginFactory, $location, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.username = 'User';

  $scope.$on('$routeChangeSuccess', function() {

    if (LoginFactory.getToken() !== undefined){

      $scope.courses();
      $scope.username = LoginFactory.getUser().Username;

    }

  });

  $scope.logout = function() {

    $scope.username = 'User';

    LoginFactory.setToken('');

    $http.defaults.headers.common.Authorization = '';

    $location.path('/');
    setTimeout(function() {
      location.reload();
    }, 1000);

  };

    $scope.courses = function() {
      console.log('get courses');
      var promise = StudentFactory.getMyCourses();

      promise.then(function(data) {
        $scope.course = data.data;
      });

    };

  });


