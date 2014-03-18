'use strict';

//show eval statistics
angular.module('yoSchoolApp')
  .controller('TeachershowevalCtrl', function ($scope, $http, $routeParams, TeacherFactory, StudentFactory, LangFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.defaults.headers.common.Authorization = 'Basic c2luZHJpczEyOmFzZGdhc2RnYXM=';

    $scope.oneAtATime = true;

    var id = $routeParams.evaluationID;

    $scope.stuff = '';

    $scope.lan = LangFactory.getLang();

    $scope.getDoneEvalByID = function() {
      var promise = TeacherFactory.resultEval(id);

      promise.then(function(data) {
        console.log(data.data);
        $scope.stuff = data.data;
        $scope.courses = data.data.Courses;

      });
    };


    $scope.crunchData = function(cId) {
      console.log(cId);

      var courseQuestions =[];
      var teacherQuestions = [];

      for (var i = 0; i < $scope.courses.length; i++){
        if (cId === $scope.courses[i].CourseID) {
          console.log('found it');
          for (var j = 0; j < $scope.courses[i].Questions.length; j++) {

            if ($scope.courses[i].Questions[j].TeacherSSN === null) {
              //afanga spurning
              courseQuestions.push($scope.courses[i].Questions[j]);
            } else {
              //kennara sp
              teacherQuestions.push($scope.courses[i].Questions[j]);
            }
          }
        }
      }

      $scope.cQuestions = courseQuestions;
      $scope.tQuestions = teacherQuestions;

      getTeacherNames(teacherQuestions, cId);

      // console.log(courseQuestions);
      // console.log(teacherQuestions);


    };

    function getTeacherNames(tq, cId) {
      console.log('get names');
      $scope.teacherName = [];
      var promise = StudentFactory.getCourseInfo(cId, '20141');

      promise.then(function(data) {
        console.log(data);
        for (var i = 0; i < data.data.length; i++) {
          $scope.teacherName.push({Name : data.data[i].FullName, SSN: data.data[i].SSN});

        }
      });
    }

    $scope.showResult = function(question) {
      console.log('wat');

      if (question.Type !== 'text') {

        console.log(question);

        var svor = [];
        var nidurstada = [];

        for (var i = 0; i < question.OptionsResults.length; i++) {
          svor.push(question.OptionsResults[i].AnswerTextIS);
          nidurstada.push(question.OptionsResults[i].Count);
        }


        $scope.chart = {
          labels : svor,
          datasets : [
          {
            fillColor : 'rgba(151,187,205,0)',
            strokeColor : '#e67e22',
            pointColor : 'rgba(151,187,205,0)',
            pointStrokeColor : '#e67e22',
            data : nidurstada
          }
        // {
        //     fillColor : 'rgba(151,187,205,0)',
        //     strokeColor : '#f1c40f',
        //     pointColor : 'rgba(151,187,205,0)',
        //     pointStrokeColor : '#f1c40f',
        //     data : [8, 3, 2, 5, 4]
        // }
      ],
    };


      }

    };







  });
