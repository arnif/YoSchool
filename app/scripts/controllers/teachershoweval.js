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
    $scope.courseID = '';

    $scope.domText = {
      afangaTextiIS: 'Veldu áfanga til að skoða niðustöður úr',
      afangaTextiEN: 'Please choose course to see results from',
      kennaraTextiIS: '',
      kennaraTextiEN: ''
    };

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

      $scope.active = 'active';

      $scope.courseID = cId;

      $scope.domText = {
        afangaTextiIS: 'Áfanga spurningar',
        afangaTextiEN: 'Course Quesitons',
        kennaraTextiIS: 'Kennara spurningar',
        kennaraTextiEN: 'Teacher questions'
    };

      var courseQuestions =[];
      var teacherQuestions = [];

      for (var i = 0; i < $scope.courses.length; i++){
        if (cId === $scope.courses[i].CourseID) {
          // console.log('found it');
          for (var j = 0; j < $scope.courses[i].Questions.length; j++) {

            if ($scope.courses[i].Questions[j].TeacherSSN === null) {
              //afanga spurning
              courseQuestions.push($scope.courses[i].Questions[j]);
            } else {
              //kennara sp
              teacherQuestions.push($scope.courses[i].Questions[j]);
            }
          }
        } else {
          // console.log('not found');
          var drasl = 0;
          // continue;

        }
      }

      $scope.cQuestions = courseQuestions;
      $scope.tQuestions = teacherQuestions;
      // console.log('down down down');
      // console.log($scope.tQuestions);

      $scope.getTeacherNames(teacherQuestions, cId);

      // console.log(courseQuestions);
      // console.log(teacherQuestions);


    };

    $scope.isActive = function(cId) {
      //set active
      if (cId === $scope.courseID) {
        return 'active';
      } else {
        return '';
      }


    };

    $scope.getTeacherNames = function(tq, cId) {
      // console.log('get names');
      $scope.teacherName = [];
      var promise = StudentFactory.getCourseInfo(cId, '20141');

      promise.then(function(data) {
        // console.log(data);
        for (var i = 0; i < data.data.length; i++) {
          $scope.teacherName.push({Name : data.data[i].FullName, SSN: data.data[i].SSN});

        }
      });
    };

    $scope.showResult = function(question) {

      if (question.Type !== 'text') {

        // console.log(question);

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
            fillColor : 'rgba(151,187,205,0.5)',
            strokeColor : 'rgba(151,187,205,1)',
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


      } else {
        var drasl = 0;
        // continue;
      }

    };







  });
