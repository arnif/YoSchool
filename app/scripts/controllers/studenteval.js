'use strict';

//show Eval to be answerd
angular.module('yoSchoolApp')
.controller('StudentevalCtrl', function ($scope, $routeParams, StudentFactory, LoginFactory) {
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  $scope.courseID = $routeParams.courseID;
  $scope.semester = $routeParams.semester;
  $scope.evaluationID = $routeParams.evalID;

  // console.log(evaluationID)

  $scope.evaluation = function() {
    var promise = StudentFactory.getEvalById($scope.courseID, $scope.semester, $scope.evaluationID);

    promise.then(function(data) {
      // console.log(data);
      $scope.evalu = data.data;
    });
  };


  $scope.send = function() {
    var answers = [];


    angular.forEach($scope.evalu.CourseQuestions, function(v){
       console.log(v);
       var csvar;

       if(v.Type === 'text') {
        csvar = document.getElementsByName(v.ID)[0].value;
       } else if (v.Type === 'single') {
        //virkar fyrir radio
        csvar = document.querySelector('input[name="' + v.ID + '"]:checked').value;

       } else {
        //checkbox
        var checkboxes = document.getElementsByName(v.ID);
        var vals = '';
        for (var i=0, n=checkboxes.length;i<n;i++) {
          if (checkboxes[i].checked) {
            vals += ','+checkboxes[i].value;
          }
        }
        csvar = vals;

       }
       console.log(csvar);
     });


    angular.forEach($scope.evalu.TeacherQuestions, function(v){
       // console.log(v);
       var tsvar;

       if(v.Type === 'text') {
        tsvar = document.getElementsByName(v.ID)[0].value;
       } else if (v.Type === 'single') {
        //virkar fyrir radio
        tsvar = document.querySelector('input[name="' + v.ID + '"]:checked').value;

       } else {
        //checkbox
        var checkboxes = document.getElementsByName(v.ID);
        var vals = '';
        for (var i=0, n=checkboxes.length;i<n;i++) {
          if (checkboxes[i].checked) {
            vals += ','+checkboxes[i].value;
          }
        }
        tsvar = vals;

       }
       console.log(tsvar);
     });

    // console.log('send');
  };

});
