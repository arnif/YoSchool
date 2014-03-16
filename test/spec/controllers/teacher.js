'use strict';

describe('Controller: TeacherCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeacherCtrl,
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

    TeacherCtrl = $controller('TeacherCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('should get all templates', function() {
    var obj = {data: 'template1'};
    spyOn(teacherFactory, 'getEvalTemplates').andCallThrough();
    scope.getAllTemplates();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.templates).toBe('template1');
  });

  // it('should get template 1', function() {
  //   var obj = {data: 'template1'};
  //   spyOn(teacherFactory, 'getEvalTemplateById').andCallThrough();

  //   scope.getTemplateById('template1');
  //   deferred.resolve(obj);
  //   scope.$apply();
  //   expect(??).toBe('template1');
  // });

  it('should get all evaluations', function() {
    var obj = {data: 'eval'};
    spyOn(teacherFactory, 'getAllEval').andCallThrough();
    scope.getAllEvals();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.evaluations).toBe('eval');
  });

});
