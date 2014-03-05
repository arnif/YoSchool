'use strict';

describe('Service: ApiFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var ApiFactory;
  beforeEach(inject(function (_ApiFactory_) {
    ApiFactory = _ApiFactory_;
  }));

  it('should do something', function () {
    expect(!!ApiFactory).toBe(true);
  });

});
