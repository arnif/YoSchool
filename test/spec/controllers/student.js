'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var StudentCtrl,
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
        // deferred = q.defer();
        return deferred.promise;
      },
      getMyEval: function() {

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

    StudentCtrl = $controller('StudentCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

   it('should get user sindris12', function() {
    // var obj = {user:'sindris12'};
    spyOn(loginFactory, 'getUser').andCallThrough();

    // deferred.resolve(obj);
    expect(scope.info).toBe('sindris12');
   });



   it('should get all my evaluations', function() {
    // var obj = {status:200, eval:'first'};

    // console.log(scope.getEvals());
    spyOn(studentFactory, 'getMyEval').andCallThrough();
    scope.getEvals();

    deferred.resolve();
    expect(studentFactory.getMyEval).toHaveBeenCalled();
    console.log(scope.allMyEval);

   });

   it('should call getMyEval', function() {
    spyOn(studentFactory, 'getMyEval').andReturn(deferred.promise);
    scope.getEvals();
    scope.$apply();
    expect(scope.allMyEval).toBe('resolveData');
   });


});
