'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var StudentCtrl,
    scope, rout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route) {
    scope = $rootScope.$new();
    rout = $route;
    StudentCtrl = $controller('StudentCtrl', {
      $scope: scope
    });
  }));

  it('should map routes to controllers', function() {

    expect(rout.routes['/student'].templateUrl).
    toEqual('views/student.html');
    expect(rout.routes['/student'].controller).
    toEqual('StudentCtrl');

    // otherwise redirect to
    expect(rout.routes[null].redirectTo).toEqual('/');
  });

});
