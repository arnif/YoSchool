'use strict';

describe('Controller: StudentevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

   var StudentevalCtrl,
    scope, loginFactory, studentFactory, rootScope, location, httpbak, q, deferred;

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
        deferred = q.defer();
        return deferred.promise;
      },
      getMyEval: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      getCourseInfo: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      getEvalById: function() {
        deferred = q.defer();
        return deferred.promise;
      },
      sendAnswers: function() {
        deferred = q.defer();
        return deferred.promise;
      }
    };

    module(function($provide){
      $provide.value('LoginFactory', loginFactory);
      $provide.value('StudentFactory', studentFactory);
    });

    inject(function ($controller, $rootScope, $location, $httpBackend, $q) {
    rootScope = $rootScope;
    location = $location;
    scope = $rootScope.$new();
    httpbak = $httpBackend;
    q = $q;

    deferred = q.defer();
    deferred.resolve('resolveData');

    StudentevalCtrl = $controller('StudentevalCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});


  it('should get the course', function() {

     var obj = {data: 'wepo'};
    spyOn(studentFactory, 'getEvalById').andCallThrough();
    scope.theCourse();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.teachers).toBe('wepo');

  });

  it('should get evaluation', function() {

    var obj = {data: 'eval 1'};
    spyOn(studentFactory, 'getCourseInfo').andCallThrough();
    scope.evaluation();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.evalu).toBe('eval 1');

  });

  it('should send answers', function() {
    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    scope.evalu = {Type: 'text'};
    scope.evalu.CourseQuestions = {sp1: 'yes', sp2: 'no', Type: 'text'};
    scope.evalu.CourseQuestions.Type = 'text';
    scope.send();
    deferred.resolve(data);
    scope.$apply();
    expect(location.path()).toBe('/student');
  });

  it('should send answers', function() {
    var data = {status: 404};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    scope.evalu = {Type: 'text'};
    scope.evalu.CourseQuestions = {sp1: 'yes', sp2: 'no', Type: 'text'};
    scope.evalu.CourseQuestions.Type = 'text';
    scope.send();
    deferred.resolve(data);
    scope.$apply();
    expect(location.path()).toBe('/student');
  });


  it('should send course answers with text', function() {

    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByName').andReturn('abc');
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send course answers with single', function() {

    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'querySelector').andReturn({checked: true});
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: 'single', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send course answers with single and null', function() {

    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'querySelector').andReturn({checked: false});
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: 'single', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send course answers with multiple and null', function() {

    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByName').andReturn('abc');
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: 'multiple', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send course answers with multiple', function() {

    var data = {status: 204};
    var answers = [];
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByName').andReturn([{checked: true}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: 'multiple', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });



  it('should send teacher answers', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn('abc');
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send teacher answers with text', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn([{type: 'textarea'}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send teacher answers with radio', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn([{type: 'radio', checked: true}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send teacher answers with radio unchecked', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn([{type: 'radio', checked: false}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send teacher answers with checkbox', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn([{type: 'checkbox', checked: true}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });

  it('should send teacher answers with checkbox unchecked', function() {

    var data = {status: 204};
    spyOn(studentFactory, 'sendAnswers').andCallThrough();

    spyOn(document, 'getElementsByClassName').andReturn([{type: 'checkbox', checked: false}]);
    scope.evalu = {};
    scope.evalu.CourseQuestions = {First: {Type: '', ID: 'abc'}};

    scope.teachers = {First: {Type: 'text', ID: 'abc'}};

    scope.send();


    deferred.resolve(data);
    scope.$apply();
    // console.log(scope);

    expect(location.path()).toBe('/student');
  });


});
