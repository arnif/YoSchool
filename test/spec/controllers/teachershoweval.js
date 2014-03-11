'use strict';

describe('Controller: TeachershowevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeachershowevalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeachershowevalCtrl = $controller('TeachershowevalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
