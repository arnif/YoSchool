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


    angular.forEach($scope.evalu.CourseQuestions, function(v){
       // console.log(v);
       var csvar;

       if(v.Type === 'text') {
        csvar = document.getElementsByName(v.ID)[0].value;

        obj = {};
        obj.QuestionID = v.ID;
        obj.TeacherSSN = '';
        obj.Value = csvar;

        answers.push(obj);

       } else if (v.Type === 'single') {
        //virkar fyrir radio

        if (document.querySelector('input[name="' + v.ID + '"]').checked) {

          csvar = document.querySelector('input[name="' + v.ID + '"]:checked').value;

          obj = {};
          obj.QuestionID = v.ID;
          obj.TeacherSSN = '';
          obj.Value = csvar;

          answers.push(obj);

        } else {

          csvar = null;
        }



       } else if(v.Type === 'multiple') {
        //checkbox
        var checkboxes = document.getElementsByName(v.ID);

        for (var i=0, n=checkboxes.length;i<n;i++) {

          if (checkboxes[i].checked) {

            csvar = checkboxes[i].value;
            obj = {};
            obj.QuestionID = v.ID;
            obj.TeacherSSN = '';
            obj.Value = csvar;

            answers.push(obj);

          } else {

            csvar = null;
          }


        }

       }
     });


    angular.forEach($scope.teachers, function(teacher) {
      var tsvarArr = [];
      var tsvar;
      var ssn = teacher.SSN;
      var ssnElements = document.getElementsByClassName(ssn);

      console.log(ssnElements);

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
          obj.Value = ssnElements[i].value || null;

          answers.push(obj);

        } else if (ssnElements[i].type === 'radio') {
          //athuga hvort checked

          if (ssnElements[i].checked) {
            // console.log(ssnElements[i]);
            obj = {};
            obj.QuestionID = parseInt(ssnElements[i].placeholder); //lolhax
            obj.TeacherSSN = ssn;
            obj.Value = ssnElements[i].value || null;

            answers.push(obj);
          }


        } else if (ssnElements[i].type === 'checkbox') {
          //athuga hvort checked

          if (ssnElements[i].checked) {

            obj = {};
            obj.QuestionID = parseInt(ssnElements[i].name);
            obj.TeacherSSN = ssn;
            obj.Value = ssnElements[i].value || null;

            answers.push(obj);
          }

        }

      }

      console.log(answers);




    }); //teacher foreach endar

     var promise = StudentFactory.sendAnswers($scope.courseID, $scope.semester, $scope.evaluationID, answers);

      promise.then(function(data) {
        console.log(data);
        if (data.status === 204) {
          $location.path('/student');
        }
      });

    // console.log('send');
  };

});
