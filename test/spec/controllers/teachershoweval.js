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

  });

});
