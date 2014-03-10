'use strict';

describe('Service: StudentFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var StudentFactory;
  beforeEach(inject(function (_StudentFactory_) {
    StudentFactory = _StudentFactory_;
  }));

  it('should do something', function () {
    expect(!!StudentFactory).toBe(true);
  });

});
