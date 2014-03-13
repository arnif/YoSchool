'use strict';

describe('Controller: StudentevalCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var StudentevalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentevalCtrl = $controller('StudentevalCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });


});
