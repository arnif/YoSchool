'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var MainCtrl,
  scope, location, rootScope, httpbak, testService, deferred, q, swag;

  var token = 'abcd';
  var username = 'dabs';

  // Initialize the controller and a mock scope
  beforeEach(function(){
    testService = {
      getUser: function() {
        return 'sindris12';
    },
      getAdmin: function() {
        return 'admin';
    },
      login: function(user) {
       deferred = q.defer();
       return deferred.promise;
      },
      setToken: function(_Token) {
        token = _Token;
      },
      getToken: function() {
        return token;
      },
      setUser: function(_User) {
        username = _User;
      }
    };

    module(function($provide){
      $provide.value('LoginFactory', testService);
    });
    inject(function ($controller, $rootScope, $location, $httpBackend, $q) {
    rootScope = $rootScope;
    location = $location;
    scope = $rootScope.$new();
    httpbak = $httpBackend;
    q = $q;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });
    rootScope.$apply();
  });
});

  it('should login successfull', inject(function($httpBackend) {
    var obj = {status: 200, user:'sindris12', pass:'123456', data : { Token: 'abcd', User: 'sindris12', Role: 'student' } };

    spyOn(testService, 'login').andCallThrough();

    scope.person.user = 'sindris12';
    scope.person.pass = '123456';

    scope.loginForm(true);
    deferred.resolve(obj);
    expect(testService.login).toHaveBeenCalledWith({user: 'sindris12', pass:'123456'});
    rootScope.$apply();

    expect(location.path()).toBe('/student');

  }));

  it('should login admin successfull', inject(function($httpBackend) {
    var obj = {status: 200, user:'admin', pass:'123456', data : { Token: 'abcd', User: { Role : 'admin'} } };

    spyOn(testService, 'login').andCallThrough();

    scope.person.user = 'admin';
    scope.person.pass = '123456';

    scope.loginForm(true);
    deferred.resolve(obj);
    expect(testService.login).toHaveBeenCalledWith({user: 'admin', pass:'123456'});
    rootScope.$apply();

    expect(location.path()).toBe('/teacher');

  }));

  it('should NOT login successfull', inject(function($httpBackend) {
    var obj = {status: 401, user:'sindris12', pass:'123456', data : { Token: 'abcd', User: 'sindris12', Role: 'admin' } };

    spyOn(testService, 'login').andCallThrough();

    scope.person.user = 'sindris12';
    scope.person.pass = '123456';

    scope.loginForm(true);
    deferred.resolve(obj);
    expect(testService.login).toHaveBeenCalledWith({user: 'sindris12', pass:'123456'});
    rootScope.$apply();

    expect(scope.loginFail).toBe('Username or password incorrect');

  }));

  it('should NOT login successfull', inject(function($httpBackend) {
    var obj = {status: 401, user:'', pass:'123456', data : { Token: 'abcd', User: '', Role: 'admin' } };

    spyOn(testService, 'login').andCallThrough();

    scope.person.user = 'sindris12';
    scope.person.pass = '123456';

    scope.loginForm(false);
    deferred.resolve(obj);
    // expect(testService.login).toHaveBeenCalledWith({user: '', pass:'123456'});
    rootScope.$apply();

    expect(scope.loginFail).toBe('Failed to login');

  }));


  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  // it('should be user of length 9', function() {
  //   scope.person.user = 'sindris12';
  //   scope.person.pass = '654321';
  //   scope.loginForm(true);
  //   // rootScope.$apply();
  //   expect(scope.person.user.length).toBe(9);
  // });

  // it('should be pass of length 6', function() {
  //   scope.person.user = 'sindris12';
  //   scope.person.pass = '654321';
  //   // httpbak.whenPOST('http://project3api.haukurhaf.net/api/v1/login')
  //   // .respond(200, 'true');
  //   scope.loginForm(true);
  //   // rootScope.$apply();
  //   expect(scope.person.pass.length).toBe(6);
  // });

  // it('should be to short pass', function() {
  //   scope.user = 'sindris12';
  //   scope.pass = '12';
  //   expect(scope.pass.length).toBe(2);
  // });

  // it('should be user sindris12', function() {
  //   scope.user = 'sindris12';
  //   scope.pass = '123456';
  //   expect(scope.user).toBe('sindris12');
  // });



});
