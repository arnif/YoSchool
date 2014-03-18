'use strict';

describe('Directive: displayTeacher', function () {

  // load the directive's module
  beforeEach(module('yoSchoolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<display-teacher></display-teacher>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the displayTeacher directive');
  }));
});
