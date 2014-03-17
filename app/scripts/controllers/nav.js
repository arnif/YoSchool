'use strict';

angular.module('yoSchoolApp')
  .controller('NavCtrl', function ($scope, StudentFactory, LoginFactory, $location, $http, LangFactory, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.lan = LangFactory.getLang();

  $scope.username = 'User';

  $scope.$on('$routeChangeSuccess', function() {

    if (LoginFactory.getToken() !== undefined){

      $scope.courses();
      $scope.lan = LangFactory.getLang();
      $scope.username = LoginFactory.getUser().Username;

    }

  });

  $scope.goHome = function() {
     var role = LoginFactory.getUser();
    // console.log(role.Role);

    // if (role.Role !== 'admin') {
    //   $location.path('/');
    // }

    if (role.Role === 'admin') {
      $location.path('/teacher');
    } else if (role.Role === 'student') {
      $location.path('/student');
    } else {
      $location.path('/');
    }
  };

  $scope.logout = function() {

    $scope.username = 'User';

    LoginFactory.setUser('');
    LoginFactory.setToken('');

    $http.defaults.headers.common.Authorization = '';

    $location.path('/');

  };

  $scope.setCourseName = function(course) {
    StudentFactory.setCourseName(course);
  };

    $scope.courses = function() {
      // console.log('get courses');
      var promise = StudentFactory.getMyCourses();

      promise.then(function(data) {
        // console.log(data);
        $scope.course = data.data;
      });

    };

    $scope.changeLang = function(lang) {
      console.log(lang);
      LangFactory.setLang(lang);
      console.log($location.path());
      // $route.reload();
      $location.path($location.path() + '/');


    };

  });


