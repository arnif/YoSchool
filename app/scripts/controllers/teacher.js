'use strict';

//show list of eval and status
angular.module('yoSchoolApp')
 .controller('TeacherCtrl', function ($scope, LoginFactory, TeacherFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // console.log(LoginFactory.getToken());

    $scope.getAllTemplates = function() {
      console.log('get it');
      TeacherFactory.getEvalTemplates().then(function(d) {
        // console.log(d);
        $scope.templates = d.data;
      });
    };

    // $scope.getTemplateById = function(id) {
    //   console.log(id);
    //   TeacherFactory.getEvalTemplateById(id).then(function(d) {
    //     console.log(d);
    //   });
    // };

    $scope.getAllEvals = function() {
      var promise = TeacherFactory.getAllEval();

      promise.then(function(data) {
        console.log(data);
        $scope.evaluations = data.data;
      });
    };

  });
