'use strict';

//show list of eval and status
angular.module('yoSchoolApp')
 .controller('TeacherCtrl', function ($scope, LoginFactory, TeacherFactory, LangFactory) {

    $scope.lan = LangFactory.getLang();

    // var role = LoginFactory.getUser();

    // if (role.Role !== 'admin') {
    //   $location.path('/');
    // }

    $scope.getAllTemplates = function() {
      console.log('get it');
      TeacherFactory.getEvalTemplates().then(function(d) {
        // console.log(d);
        $scope.templates = d.data;
      });
    };


    $scope.getAllEvals = function() {
      var promise = TeacherFactory.getAllEval();

      promise.then(function(data) {
        // console.log(data);
        $scope.evaluations = data.data;
      });
    };

  });
