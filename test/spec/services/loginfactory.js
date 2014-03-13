'use strict';

describe('Service: LoginFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var LoginFactory;
  // var httpbak;
  beforeEach(inject(function (_LoginFactory_) {
    LoginFactory = _LoginFactory_;
    // httpbak = $httpBackend;

  }));

  it('should login successfull', inject(function(LoginFactory, $httpBackend) {
    $httpBackend.expect('POST', 'http://dispatch.ru.is/h06/api/v1/login')
    .respond(200, 'true');

    LoginFactory.login('foo', '123456').then(function(data){
      expect(data).toBeTruthy();
    });
    $httpBackend.flush();
  }));

  it('should not login successfull', inject(function(LoginFactory, $httpBackend) {
    $httpBackend.expect('POST', 'http://dispatch.ru.is/h06/api/v1/login')
    .respond(401, 'false');

    LoginFactory.login('foo', '123456').then(function(data){
      expect(data.status).toBe(401);
    });
    $httpBackend.flush();
  }));


  it('should do something', function () {
    expect(!!LoginFactory).toBe(true);
  });

  it('should set token', function() {
    var t = '12345';
    LoginFactory.setToken(t);
    expect(LoginFactory.getToken()).toBe(t);
  });

  it('should set user', function() {
    var user = { 'user': 'api', 'pass':'123456'};
    LoginFactory.setUser(user);
    expect(LoginFactory.getUser()).toBe(user);
  });





  // it('should get TestSubject', function() {
  //   expect(LoginFactory.getUsername()).toBe('TestSubject');
  // });

  // it('should be foo', function() {
  //   var user = 'foo';
  //   LoginFactory.setUsername(user);
  //   expect(LoginFactory.getUsername()).toBe(user);
  // });

});
