'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var MainCtrl,
  scope,rout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $route) {
    scope = $rootScope.$new();
    rout = $route;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });


  it('should map routes to controllers', function() {

    expect(rout.routes['/'].controller).toBe('MainCtrl');
    expect(rout.routes['/'].templateUrl).
    toEqual('views/main.html');

    // otherwise redirect to
    expect(rout.routes[null].redirectTo).toEqual('/');
  });
});
