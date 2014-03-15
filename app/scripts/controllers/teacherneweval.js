'use strict';

//empty eval form
angular.module('yoSchoolApp')
  .controller('TeachernewevalCtrl', function ($scope, LoginFactory, $location, TeacherFactory, StudentFactory, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var role = LoginFactory.getUser();
    // console.log(role.Role);

    // if (role.Role !== 'admin') {
    //   $location.path('/');
    // }

    $scope.old = true;


    var evaluationID = $routeParams.evaluationID;
    console.log(evaluationID);

    if (evaluationID !== undefined) {
      TeacherFactory.getEvalTemplateById(evaluationID).then(function(data) {
        // console.log(data);
        $scope.evaluation = data.data;
        $scope.old = false;
        $scope.ID = evaluationID;
      }, function(error) {
        console.log('failed to fetch');
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
      console.log(question);
      var aObj = {
        ID: question.Answers.length,
        TextIS: '',
        TextEN: '',
        ImageURL: '',
        Weight: question.Answers.length + 1
      };
      question.Answers.push(aObj);
    };

    $scope.updateAnswer = function(answer) {
      console.log('update this');
      console.log(answer);
    };



    //array of edited fields (optional)

    //handle method for field1 blur
    $scope.doneEditing = function () {
      // console.log(question);
      // $scope.countedValue = 'Blur from field1:  ' + $scope.value1 + ' * ' + $scope.value2 + ' = ' + $scope.value1 * $scope.value2;
    };



    $scope.addCourseQuestion = function(what) {
      // console.log('new course question ' + what);
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



    $scope.postTemplate = function(publish) {
      var pormise = TeacherFactory.postEvalTemplate($scope.evaluation);

      pormise.then(function(data){
        console.log(data);
        if (publish) {
          console.log('save and publish');
          // $scope.publishTemplate(data.ID);
        }
        $location.path('/teacher');

      });
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
      });
    };








  });
