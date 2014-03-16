'use strict';

describe('Controller: CourseCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

    var CourseCtrl,
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


    // deferred = q.defer();
    // deferred.resolve('resolveData');

    CourseCtrl = $controller('CourseCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('shuld get the course', function() {

    var obj = {data: 'wepo'};
    spyOn(studentFactory, 'getCourseInfo').andCallThrough();
    scope.theCourse();
    deferred.resolve(obj);
    scope.$apply();
    expect(scope.courseInfo).toBe('wepo');
  });

});
