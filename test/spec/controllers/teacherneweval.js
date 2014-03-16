'use strict';

describe('Controller: TeachernewevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeachernewevalCtrl,
    scope, loginFactory, studentFactory, teacherFactory, rootScope, location, httpbak, q, deferred, routeParamsStub;

  var username = 'sindris12';
  // Initialize the controller and a mock scope
   beforeEach(function(){
    loginFactory = {
      getUser: function() {
        return 'sindris12';
    },
      getAdmin: function() {
        return 'admin';
    },
      setUser: function(_User) {
        username = _User;
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

    inject(function ($controller, $rootScope, $location, $httpBackend, $q) {
    rootScope = $rootScope;
    location = $location;
    scope = $rootScope.$new();
    httpbak = $httpBackend;
    q = $q;


    // deferred = q.defer();
    // deferred.resolve('resolveData');

    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope,
      // $routeParams: routeParamsStub
    });
    rootScope.$apply();
  });
});

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  // it('should get Eval template by id', function() {
  //   // console.log(TeachernewevalCtrl.evaluationID);
  //   // TeachernewevalCtrl.evaluationID = 3;
  //   var obj = {data: 'eval1'};
  //   spyOn(teacherFactory, 'getEvalTemplateById').andCallThrough();
  //   deferred.resolve(obj);
  //   scope.$apply();
  //   expect(scope.templates).toBe('eval1');
  // });

  it('should add answer', function() {
    var question = {Answers: ['yes']};
    scope.addAnswer(question);
    scope.$apply();
    expect(question.Answers[0]).toBe('yes');

  });

  it('should add course question', function() {
    var cquestion = {ID: 1, TextIS: 'hi', TextEN: 'hello', ImageURL: '', Type:'text',Answers: [] };
    scope.addCourseQuestion('text');
    scope.$apply();
    expect(cquestion.ID).toBe(1);
  });

  it('should add teacher question', function() {
    var tquestion = {ID: 1, TextIS: 'hi', TextEN: 'hello', ImageURL: '', Type:'text',Answers: [] };
    scope.addTeacherQuestion('text');
    scope.$apply();
    expect(tquestion.ID).toBe(1);
  });

  it('should post template', function() {
    scope.evaluation = {
        TitleIS: 'Hello',
        TitleEN: 'Hi',
        IntroTextIS: 'Gangi ter vel',
        IntroTextEN: 'Good luck',
        CourseQuestions: [],
        TeacherQuestions: []
      };

    spyOn(teacherFactory, 'postEvalTemplate').andCallThrough();
    scope.postTemplate();
    deferred.resolve(scope.evaluation);
    scope.$apply();
    expect(location.path()).toBe('/teacher');

  });

  it('should publish template', function() {
    scope.startDate = new Date('2014-01-14T00:00:00');
    scope.endDate = new Date('2014-01-14T00:00:00');
    var sendTemplate = {TemplateID: 1, StartDate: new Date('2014-01-14T00:00:00'), EndDate:new Date('2014-01-14T00:00:00')};
    spyOn(teacherFactory, 'publishTemplate').andCallThrough();
    scope.publishTemplate(1);
    deferred.resolve(sendTemplate);
    scope.$apply();
    expect(sendTemplate.TemplateID).toBe(1);
  });


});
