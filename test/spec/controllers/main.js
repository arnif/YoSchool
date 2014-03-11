'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var MainCtrl,
  scope, location, rootScope, rout, httpbak;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, $route, $httpBackend, $q) {
    rootScope = $rootScope;
    location = $location;
    rout = $route;
    scope = $rootScope.$new();
    httpbak = $httpBackend;

    // var deferred = $q.defer();
    // deferred.resolve('somevalue');

    // spyOn(LoginFactory, 'login').andReturn(deferred.promise);


    MainCtrl = $controller('MainCtrl', {
      $scope: scope,

    });
  }));

//   it ('should test receive the fulfilled promise', function() {
//    var result;

//     LoginFactory.login().then(function(returnFromPromise) {
//     result = returnFromPromise;
//   });

//   rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle
//   expect(result).toBe('somevalue');
// });


  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should be username of length 9', function() {
    scope.username = 'sindris12';
    scope.password = '654321';
    // scope.signupForm(true);
    // rootScope.$apply();
    expect(scope.username.length).toBe(9);
  });

  it('should be password of length 6', function() {
    scope.person.username = 'sindris12';
    scope.person.password = '654321';
    scope.loginForm(true);
    // rootScope.$apply();
    expect(scope.person.password.length).toBe(6);
  });

  it('should be to short password', function() {
    scope.username = 'sindris12';
    scope.password = '12';
    expect(scope.password.length).toBe(2);
  });

  it('should be username sindris12', function() {
    scope.username = 'sindris12';
    scope.password = '123456';
    expect(scope.username).toBe('sindris12');
  });



  it('should map routes to controllers', function() {

    expect(rout.routes['/'].controller).toBe('MainCtrl');
    expect(rout.routes['/'].templateUrl).
    toEqual('views/main.html');

    // otherwise redirect to
    expect(rout.routes[null].redirectTo).toEqual('/');
  });
});
