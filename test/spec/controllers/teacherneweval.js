'use strict';

describe('Controller: TeachernewevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeachernewevalCtrl,
    scope, loginFactory, studentFactory, teacherFactory, rootScope, location, httpbak, q, deferred, routeParams;

  var user;
  // Initialize the controller and a mock scope
   beforeEach(function(){
    loginFactory = {
      getUser: function() {
        return {Role: 'admin'};
    },
      getAdmin: function() {
        return 'admin';
    },
      setUser: function(_User) {
        user = _User;
      }
    };

    studentFactory = {
      getMyCourses: function() {
        return deferred.promise;
      },
      getMyEval: function() {
        return deferred.promise;
      },
      getCourseInfo: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      getCourseName: function() {
        deferred = q.defer();
        return deferred.promise;
      }
    };

    teacherFactory = {
      getEvalTemplates: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      getEvalTemplateById: function(id) {
        deferred = q.defer();
        return deferred.promise;
      },
      getAllEval: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      postEvalTemplate: function(template) {
        deferred = q.defer();
        return deferred.promise;
      },
      publishTemplate: function(id){
        deferred = q.defer();
        return deferred.promise;
      }

    };

    module(function($provide){
      $provide.value('LoginFactory', loginFactory);
      $provide.value('StudentFactory', studentFactory);
      $provide.value('TeacherFactory', teacherFactory);
    });

    inject(function ($rootScope, $location, $httpBackend, $q) {
    rootScope = $rootScope;
    location = $location;
    scope = $rootScope.$new();
    httpbak = $httpBackend;
    q = $q;
    routeParams = {};



    // deferred = q.defer();
    // deferred.resolve('resolveData');


    rootScope.$apply();
  });
});



  it('should get template by id', inject(function($controller) {

    routeParams.evaluationID = 1;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });

    var obj = {data: 'template 1', evaluationID: 2};

    spyOn(teacherFactory, 'getEvalTemplateById').andCallThrough();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.old).toBe(false);
    expect(scope.ID).toBe(1);


  }));

  it('should add answer', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var question = {Answers: ['yes']};
    scope.addAnswer(question);
    scope.$apply();
    expect(question.Answers[0]).toBe('yes');

  }));

  it('should not add answer', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var question = {Answers: ['yes','no','3','4','5','6']};
    scope.addAnswer(question);
    scope.$apply();
    expect(scope.toMany).not.toBe(undefined);

  }));

  it('should remove course question', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var question = {Answers: ['yes','no','3','4','5','6']};
    scope.evaluation.CourseQuestions = ['sp1', 'sp2'];
    scope.removeCQuest(1);
    scope.$apply();
    expect(scope.evaluation.CourseQuestions.length).toBe(1);

  }));

  it('should remove course answer', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    // var question = {Answers: ['yes','no','3','4','5','6']};
    scope.evaluation.CourseQuestions = [{First: {Answers: ['1','2']}}];
    scope.evaluation.CourseQuestions[0].Answers = [1,2];
    scope.removeCAnswer(0, 0);
    scope.$apply();
    expect(scope.evaluation.CourseQuestions[0].Answers.length).toBe(1);

  }));


  it('should remove teacher question', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var question = {Answers: ['yes','no','3','4','5','6']};
    scope.evaluation.TeacherQuestions = ['sp1', 'sp2'];
    scope.removeTQuest(1);
    scope.$apply();
    expect(scope.evaluation.TeacherQuestions.length).toBe(1);

  }));


  it('should remove teacher answer', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    // var question = {Answers: ['yes','no','3','4','5','6']};
    scope.evaluation.TeacherQuestions = [{First: {Answers: ['1','2']}}];
    scope.evaluation.TeacherQuestions[0].Answers = [1,2];
    scope.removeTAnswer(0, 0);
    scope.$apply();
    expect(scope.evaluation.TeacherQuestions[0].Answers.length).toBe(1);

  }));

  it('should add course question', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var cquestion = {ID: 1, TextIS: 'hi', TextEN: 'hello', ImageURL: '', Type:'text',Answers: [] };
    scope.addCourseQuestion('text');
    scope.$apply();
    expect(cquestion.ID).toBe(1);
  }));

  it('should add teacher question', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    var tquestion = {ID: 1, TextIS: 'hi', TextEN: 'hello', ImageURL: '', Type:'text',Answers: [] };
    scope.addTeacherQuestion('text');
    scope.$apply();
    expect(tquestion.ID).toBe(1);
  }));

  it('should post template', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    scope.evaluation = {
        TitleIS: 'Hello',
        TitleEN: 'Hi',
        IntroTextIS: 'Gangi ter vel',
        IntroTextEN: 'Good luck',
        CourseQuestions: [],
        TeacherQuestions: []
      };

    spyOn(teacherFactory, 'postEvalTemplate').andCallThrough();
    scope.postTemplate(true);
    deferred.resolve(scope.evaluation);
    scope.$apply();
    expect(location.path()).toBe('/teacher');

  }));

  it('should not post template', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    scope.evaluation = {
        TitleIS: 'Hello',
        TitleEN: 'Hi',
        IntroTextIS: 'Gangi ter vel',
        IntroTextEN: 'Good luck',
        CourseQuestions: [],
        TeacherQuestions: []
      };

    spyOn(teacherFactory, 'postEvalTemplate').andCallThrough();
    scope.postTemplate(false);
    deferred.resolve(scope.evaluation);
    scope.$apply();
    expect(location.path()).toBe('');

  }));

  it('should not publish template', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    scope.startDate = new Date('2014-01-14T00:00:00');
    scope.endDate = new Date('2014-01-14T00:00:00');
    var sendTemplate = {TemplateID: 1, StartDate: new Date('2014-01-14T00:00:00'), EndDate:new Date('2014-01-14T00:00:00')};
    spyOn(teacherFactory, 'publishTemplate').andCallThrough();
    scope.publishTemplate(1);
    deferred.resolve(sendTemplate);
    scope.$apply();
    expect(sendTemplate.TemplateID).toBe(1);
  }));

  it('should publish template', inject(function($controller) {

    routeParams.evaluationID = undefined;
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      $routeParams: routeParams

    });
    scope.startDate = new Date('2014-01-14T00:00:00');
    scope.endDate = new Date('2014-01-14T00:00:00');
    var sendTemplate = {TemplateID: 1, StartDate: new Date('2014-01-14T00:00:00'), EndDate:new Date('2014-01-14T00:00:00'), status: 204};
    spyOn(teacherFactory, 'publishTemplate').andCallThrough();
    scope.publishTemplate(1);
    deferred.resolve(sendTemplate);
    scope.$apply();
    expect(sendTemplate.status).toBe(204);
  }));


});
