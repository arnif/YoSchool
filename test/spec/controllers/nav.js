'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var NavCtrl,
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

    NavCtrl = $controller('NavCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });


  it('should get courses', inject(function($httpBackend) {

    spyOn(studentFactory, 'getMyCourses').andReturn(deferred.promise);
    // console.log(scope.courses);
    scope.courses();
    scope.$apply();

    expect(scope.course).toBe(undefined);

    // expect(scope.course).toBe(obj);

  }));


});
