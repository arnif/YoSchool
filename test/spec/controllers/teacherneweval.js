'use strict';

describe('Controller: TeachernewevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var TeachernewevalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeachernewevalCtrl = $controller('TeachernewevalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
