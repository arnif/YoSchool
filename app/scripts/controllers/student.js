'use strict';

//show list of eval 
angular.module('yoSchoolApp')
  .controller('StudentCtrl', function ($scope, ApiFactory) {
    ApiFactory.getAllEvaluations().then(function(data) {
      console.log('Success data: ', data);
      $scope.evaluations = data;
    }, function(errorMessage) {
      console.log('Error: ' + errorMessage);
    }, function(updateMessage) {
      console.log('Update: ' + updateMessage);
    });
  });
