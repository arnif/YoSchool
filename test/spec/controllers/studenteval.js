'use strict';

describe('Controller: StudentevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var StudentevalCtrl,
    scope, rout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route) {
    scope = $rootScope.$new();
    rout = $route;
    StudentevalCtrl = $controller('StudentevalCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });

  it('should map routes to controllers', function() {

    expect(rout.routes['/student/evaluation'].templateUrl).
    toEqual('views/studenteval.html');
    expect(rout.routes['/student/evaluation'].controller).
    toEqual('StudentevalCtrl');

    expect(rout.routes['/student/evaluation/:evaluationID'].templateUrl).
    toEqual('views/studenteval.html');
    expect(rout.routes['/student/evaluation/:evaluationID'].controller).
    toEqual('StudentevalCtrl');

      // otherwise redirect to
    expect(rout.routes[null].redirectTo).toEqual('/');
  });
});
