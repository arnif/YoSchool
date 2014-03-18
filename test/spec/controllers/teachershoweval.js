'use strict';

describe('Controller: TeachershowevalCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeachershowevalCtrl,
    scope, loginFactory, studentFactory, teacherFactory, rootScope, location, httpbak, q, deferred;

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
      resultEval: function() {
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

    TeachershowevalCtrl = $controller('TeachershowevalCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should get done eval by id', function() {
    var obj = {data: 'eval 1'};
    spyOn(teacherFactory, 'resultEval').andCallThrough();
    scope.getDoneEvalByID();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.stuff).toBe('eval 1');

  });

  it('should crunch data', function() {
    var obj = {CourseID: 'wepo'};
    scope.courses = obj;
    scope.crunchData('wepo');
    scope.$apply();
    expect(scope.courses).toBe(obj);

  });

  it('should not crunch data with wrong cId', function() {
    // var obj = {length: 1, CourseID: 'wepo', Questions: {}};
    //scope.courses = [{CourseID: 'wepo', length: 1, Questions: {TeacherSSN: 'abc', length:1}}];
    scope.courses = [{CourseID: 'wepo', Questions: [{TeacherSSN: null}]}];
    // scope.courses.Questions = {TeacherSSN: null};
    scope.crunchData('foo');
    scope.$apply();
    expect(scope.cQuestions).not.toBe(null);
    expect(scope.tQuestions).not.toBe(null);
  });



  it('should crunch data with cId equal and ssn null', function() {
    // var obj = {length: 1, CourseID: 'wepo', Questions: {}};
    //scope.courses = [{CourseID: 'wepo', length: 1, Questions: {TeacherSSN: 'abc', length:1}}];
    scope.courses = [{CourseID: 'wepo', Questions: [{TeacherSSN: null}]}];
    // scope.courses.Questions = {TeacherSSN: null};
    scope.crunchData('wepo');
    scope.$apply();
    expect(scope.cQuestions).not.toBe(null);
    expect(scope.tQuestions).not.toBe(null);
  });

  it('should crunch data with cId equal and ssn NOT null', function() {
    // var obj = {length: 1, CourseID: 'wepo', Questions: {}};
    //scope.courses = [{CourseID: 'wepo', length: 1, Questions: {TeacherSSN: 'abc', length:1}}];
    scope.courses = [{CourseID: 'wepo', Questions: [{TeacherSSN: 'abc'}]}];
    // scope.courses.Questions = {TeacherSSN: null};
    scope.crunchData('wepo');
    scope.$apply();
    expect(scope.tQuestions).not.toBe(null);
    expect(scope.cQuestions).not.toBe(null);

  });

  it('shuld get teacher names', function() {

    var obj = {data: 'wepo'};
    spyOn(studentFactory, 'getCourseInfo').andCallThrough();
    scope.getTeacherNames();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.teacherName).not.toBe(null);
  });

  it('should show results', function() {
    var obj = {OptionsResults: ['yes','no']};
    scope.showResult(obj);
    scope.$apply();
    expect(scope.chart).not.toBe(null);
  });

  it('should show results', function() {
    var obj = {Type: 'text' ,OptionsResults: ['yes','no']};
    scope.showResult(obj);
    scope.$apply();
    expect(scope.chart).toBe(undefined);
  });

  it('should set active', function() {
    scope.courseID = 'wepo';
    scope.isActive('wepo');
    expect(scope.isActive('wepo')).toBe('active');
  });

  it('should not set active', function() {
    scope.courseID = 'wepo';
    scope.isActive('foo');
    expect(scope.isActive('foo')).toBe(undefined);
  });

});
