'use strict';

//show Eval to be answerd
angular.module('yoSchoolApp')
.controller('StudentevalCtrl', function ($scope, $routeParams, $location, StudentFactory, LoginFactory, LangFactory) {
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.lan = LangFactory.getLang();


  $scope.courseID = $routeParams.courseID;
  $scope.semester = $routeParams.semester;
  $scope.evaluationID = $routeParams.evalID;


  $scope.theCourse = function() {
      var promise = StudentFactory.getCourseInfo($scope.courseID, $scope.semester);

      promise.then(function(data) {
        // console.log('course info');
        // console.log(data.data);
        $scope.teachers = data.data;

      });
    };

  $scope.evaluation = function() {
    var promise = StudentFactory.getEvalById($scope.courseID, $scope.semester, $scope.evaluationID);

    promise.then(function(data) {
      // console.log(data);
      $scope.evalu = data.data;
    });
  };


  $scope.send = function() {
    var answers = [];
    var obj = {};
    // console.log(answers);



      // console.log('vvvv');
       // console.log(v);
       var csvar;

       var cqElements = document.getElementsByClassName('cq-question');
       // console.log(cqElements);

       for(var i = 0; i < cqElements.length; i++) {
        console.log(cqElements[i]);

        if (cqElements[i].type === 'textarea') {

          csvar = cqElements[i].value;

          obj = {};
          obj.QuestionID = cqElements[i].name;
          obj.TeacherSSN = '';
          obj.Value = csvar;

          answers.push(obj);

        } else if(cqElements[i].type === 'radio') {


          if (cqElements[i].checked) {
            // console.log(ssnElements[i]);
            obj = {};
            obj.QuestionID = parseInt(cqElements[i].name);
            obj.TeacherSSN = '';
            obj.Value = cqElements[i].value;

            answers.push(obj);
          }

        } else if (cqElements[i].type === 'checkbox') {

          console.log('radio');
          console.log(cqElements[i]);

          if (cqElements[i].checked) {

            obj = {};
            obj.QuestionID = parseInt(cqElements[i].name);
            obj.TeacherSSN = '';
            obj.Value = cqElements[i].value;

            answers.push(obj);
          }


        }


       }


    angular.forEach($scope.teachers, function(teacher) {

      var ssn = teacher.SSN;
      var ssnElements = document.getElementsByClassName(ssn);

      for (var i=0; i < ssnElements.length; i++){
        // console.log(ssnElements[i].type);
        // .name == quesitonId
        // ssn = teacher ssn
        // .value == svar

        if (ssnElements[i].type === 'textarea') {
          //adda textanum asamt
          obj = {};
          obj.QuestionID = parseInt(ssnElements[i].name);
          obj.TeacherSSN = ssn;
          obj.Value = ssnElements[i].value;

          answers.push(obj);

        } else if (ssnElements[i].type === 'radio') {
          //athuga hvort checked

          if (ssnElements[i].checked) {
            // console.log(ssnElements[i]);
            obj = {};
            obj.QuestionID = parseInt(ssnElements[i].placeholder); //lolhax
            obj.TeacherSSN = ssn;
            obj.Value = ssnElements[i].value;

            answers.push(obj);
          }


        } else if (ssnElements[i].type === 'checkbox') {
          //athuga hvort checked

          if (ssnElements[i].checked) {

            obj = {};
            obj.QuestionID = parseInt(ssnElements[i].name);
            obj.TeacherSSN = ssn;
            obj.Value = ssnElements[i].value;

            answers.push(obj);
          }

        }

      }




    }); //teacher foreach endar

    console.log(answers);

     var promise = StudentFactory.sendAnswers($scope.courseID, $scope.semester, $scope.evaluationID, answers);

      promise.then(function(data) {
        console.log(data);
        if (data.status === 204) {
          $location.path('/student');
        } else {
          console.log('failed to submit data');
          $location.path('/student');
        }
      });

    // console.log('send');
  };

});
