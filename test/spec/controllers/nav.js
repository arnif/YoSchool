'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var NavCtrl,
    scope, loginFactory, studentFactory, langFactory, rootScope, location, httpbak, q, deferred;

  var username = 'sindris12';
  var courseName = 'wepo';
  var token = 'abc';
  var lang = 'is';
  // Initialize the controller and a mock scope
   beforeEach(function(){
    loginFactory = {
      getUser: function() {
        var obj = {
          user: 'sindris12',
          Role: 'student'
        };
        return obj;
    },
      getAdmin: function() {
        return 'admin';
    },
      setUser: function(_User) {
        username = _User;
      },
      setToken: function(_token) {
        token = _token;
      },
      getToken: function() {
        return token;
      }
    };

    studentFactory = {
      getMyCourses: function() {
        // deferred = q.defer();
        return deferred.promise;
      },
      setCourseName: function(cname) {
        courseName = cname;
      },
      getCourseName: function() {
        return courseName;
      }
    };

    langFactory = {
      setLang: function(_lang) {
        lang = _lang;
      },
      getLang: function() {
        return lang;
      }
    };

    module(function($provide){
      $provide.value('LoginFactory', loginFactory);
      $provide.value('StudentFactory', studentFactory);
      $provide.value('LangFactory', langFactory);
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

  it('should not get route changes', function() {
    spyOn(scope, '$on');
    spyOn(loginFactory, 'getToken').andCallThrough();
    loginFactory.setToken(undefined);
    scope.$broadcast('$routeChangeSuccess');

    rootScope.$apply();
    expect(location.path()).toBe('');


  });

  it('should route changes', function() {

    spyOn(scope, '$on');
    location.path('/student');
    loginFactory.setToken('abc');
    spyOn(loginFactory, 'getToken').andCallThrough();
    scope.$broadcast('$routeChangeSuccess');

    rootScope.$apply();
    expect(location.path()).toBe('/student');


  });

  it('should go home to student', function() {
    var user = {
      user: 'sindris12',
      Role: 'student'
    };
    spyOn(loginFactory, 'getUser').andReturn(user);
    scope.goHome();
    scope.$apply();
    expect(location.path()).toBe('/student');
  });

  it('should go home to teacher', function() {
    var user = {
      user: 'admin',
      Role: 'admin'
    };
    spyOn(loginFactory, 'getUser').andReturn(user);
    scope.goHome();
    scope.$apply();
    expect(location.path()).toBe('/teacher');
  });

  it('should go home as noone', function() {
    var user = {
      user: '',
      Role: ''
    };
    spyOn(loginFactory, 'getUser').andReturn(user);
    scope.goHome();
    scope.$apply();
    expect(location.path()).toBe('/');
  });

  it('should logout', function() {
    spyOn(loginFactory, 'setToken').andReturn('');
    scope.logout();
    scope.$apply();
    expect(location.path()).toBe('/');
  });

  it('should set course', function() {
    spyOn(studentFactory, 'setCourseName').andReturn('wepo');
    scope.setCourseName('wepo');
    scope.$apply();
    expect(studentFactory.getCourseName()).toBe('wepo');
  });


  it('should get courses', inject(function($httpBackend) {

    spyOn(studentFactory, 'getMyCourses').andReturn(deferred.promise);
    // console.log(scope.courses);
    scope.courses();
    scope.$apply();

    expect(scope.course).toBe(undefined);

    // expect(scope.course).toBe(obj);

  }));

  it('should change language', function() {

    spyOn(langFactory, 'setLang').andCallThrough();
    scope.changeLang();
    expect(location.path()).toBe('/');
  });


});
