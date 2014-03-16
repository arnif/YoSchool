'use strict';

//show eval statistics
angular.module('yoSchoolApp')
  .controller('TeachershowevalCtrl', function ($scope, $routeParams, TeacherFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var id = $routeParams.evaluationID;

    $scope.getDoneEvalByID = function() {
      var promise = TeacherFactory.resultEval(id);

      promise.then(function(data) {
        console.log(data);
      });
    };



  });
