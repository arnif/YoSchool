'use strict';

describe('Controller: StudentCtrl', function () {

  // load the controller's module
  beforeEach(module('yoSchoolApp'));

  var StudentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentCtrl = $controller('StudentCtrl', {
      $scope: scope
    });
  }));


});
