'use strict';

//empty eval form
angular.module('yoSchoolApp')
  .controller('TeachernewevalCtrl', function ($scope, LoginFactory, $location, TeacherFactory, $routeParams, LangFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.lan = LangFactory.getLang();

    var role = LoginFactory.getUser();
    // console.log(role.Role);

    // if (role.Role !== 'admin') {
    //   $location.path('/');
    // }

    $scope.old = true;


    var evaluationID = $routeParams.evaluationID;

    if (evaluationID !== undefined) {
      TeacherFactory.getEvalTemplateById(evaluationID).then(function(data) {
        // console.log(data);
        $scope.evaluation = data.data;
        $scope.old = false;
        $scope.ID = evaluationID;
      });

    } else {

      $scope.evaluation = {
        TitleIS: '',
        TitleEN: '',
        IntroTextIS: '',
        IntroTextEN: '',
        CourseQuestions: [],
        TeacherQuestions: []
      };

    }



    $scope.addAnswer = function(question, is, en) {
      if (question.Answers.length > 4) {
        console.log('to many');
      } else {
       var aObj = {
          ID: question.Answers.length,
          TextIS: '',
          TextEN: '',
          ImageURL: '',
          Weight: question.Answers.length + 1
        };
        question.Answers.push(aObj);
      }
      console.log(question);
    };


    // $scope.updateAnswer = function(answer) {
    //   console.log('update this');
    //   console.log(answer);
    // };


    $scope.addCourseQuestion = function(what) {
      console.log('new course question ' + what);
      // console.log($scope.evaluation);

      $scope.evaluation.CourseQuestions.push({
        ID: $scope.evaluation.CourseQuestions.length,
        TextIS: '',
        TextEN: '',
        ImageURL: '',
        Type: what,
        Answers: []
      });



    };


    $scope.addTeacherQuestion = function(what) {
      // console.log('new teacher question ' + what);
      $scope.evaluation.TeacherQuestions.push({
        ID: $scope.evaluation.TeacherQuestions.length,
        TextIS: '',
        TextEN: '',
        ImageURL: '',
        Type: what,
        Answers: []
      });
    };

    $scope.removeCQuest = function(qId) {
      // console.log(qId);
      // console.log($scope.evaluation.CourseQuestions);
      for (var i = 0; i < $scope.evaluation.CourseQuestions.length; i++) {
        if (qId === $scope.evaluation.CourseQuestions[i].ID) {
          console.log('REMOVE');
          // $scope.evaluation.CourseQuestions[i] = '';
          $scope.evaluation.CourseQuestions.splice(i, 1);

        }
      }
      // console.log($scope.evaluation.CourseQuestions);
    };

    $scope.removeTQuest = function(qId) {
      console.log(qId);
      // console.log($scope.evaluation.CourseQuestions);
      for (var i = 0; i < $scope.evaluation.TeacherQuestions.length; i++) {
        if (qId === $scope.evaluation.TeacherQuestions[i].ID) {
          console.log('REMOVE');
          // $scope.evaluation.CourseQuestions[i] = '';
          $scope.evaluation.TeacherQuestions.splice(i, 1);

        }
      }
      console.log($scope.evaluation.TeacherQuestions);
    };



    $scope.postTemplate = function(isValid) {

      if(isValid) {
        var pormise = TeacherFactory.postEvalTemplate($scope.evaluation);

          pormise.then(function(data){
          console.log(data);

          $location.path('/teacher');

      });
      }
      else {
        console.log('not valid');
      }
    };

    $scope.publishTemplate = function(id) {
      // console.log('publish ' + id);
      var startDate = new Date($scope.startDate);

      var endDate = new Date($scope.endDate);
      var sendTemplate = {
        TemplateID: id,
        StartDate: startDate.toISOString(),
        EndDate: endDate.toISOString()
      };

      // console.log(sendTemplate);
      var promise = TeacherFactory.publishTemplate(sendTemplate);

      promise.then(function(data){
        console.log(data);
        if (data.status === 204) {
          $location.path('/teacher');
        } else {
          $location.path('/');
          console.log('failed');
          return;
        }
      });
    };








  });
