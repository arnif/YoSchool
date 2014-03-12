'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var MainCtrl,
  scope, location, rootScope, rout, httpbak, testService;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, $route, $httpBackend) {
    rootScope = $rootScope;
    location = $location;
    rout = $route;
    scope = $rootScope.$new();
    httpbak = $httpBackend;

    testService = {
      getUser: function() {
        return 'sindris12';
    },
      getAdmin: function() {
        return 'admin';
    },
      login: function(user) {
        if (user === testService.getUser()) {
          return 200;
        } else {
          return 401;
        }
      }
    };

    // $httpBackend.expect('POST', 'http://project3api.haukurhaf.net/api/v1/login')
    // .respond(200, 'true');
    // var deferred = $q.defer();
    // deferred.resolve('somevalue');

    // spyOn(testService, 'login').andReturn(deferred.promise);


    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      // service: testService

    });
  }));

  it('should login successfull', inject(function($httpBackend) {

    $httpBackend.expect('POST', 'http://project3api.haukurhaf.net/api/v1/login')
    .respond(200, 'true');

    scope.person.user = 'sindris12';
    scope.person.pass = '123456';

    scope.loginForm(true);
    // scope.loginForm(true).then(function(data){
    //   expect(data).toBeTruthy();
    // });
    $httpBackend.flush();
    // expect(scope.person.user).toBe('sindris12');
  }));

//   it ('should test receive the fulfilled promise', function() {
//    var result;

//     testService.login().then(function(returnFromPromise) {
//     result = returnFromPromise;
//   });

//   // rootScope.$apply(); // promises are resolved/dispatched only on next $digest cycle
//   expect(result).toBe('somevalue');
// });


  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should be user of length 9', function() {
    scope.person.user = 'sindris12';
    scope.person.pass = '654321';
    scope.loginForm(true);
    // rootScope.$apply();
    expect(scope.person.user.length).toBe(9);
  });

  it('should be pass of length 6', function() {
    scope.person.user = 'sindris12';
    scope.person.pass = '654321';
    // httpbak.whenPOST('http://project3api.haukurhaf.net/api/v1/login')
    // .respond(200, 'true');
    scope.loginForm(true);
    // rootScope.$apply();
    expect(scope.person.pass.length).toBe(6);
  });

  it('should be to short pass', function() {
    scope.user = 'sindris12';
    scope.pass = '12';
    expect(scope.pass.length).toBe(2);
  });

  it('should be user sindris12', function() {
    scope.user = 'sindris12';
    scope.pass = '123456';
    expect(scope.user).toBe('sindris12');
  });



  it('should map routes to controllers', function() {

    expect(rout.routes['/'].controller).toBe('MainCtrl');
    expect(rout.routes['/'].templateUrl).
    toEqual('views/main.html');

    // otherwise redirect to
    expect(rout.routes[null].redirectTo).toEqual('/');
  });
});
