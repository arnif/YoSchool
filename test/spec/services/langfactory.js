'use strict';

describe('Service: LangFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var LangFactory;
  beforeEach(inject(function (_LangFactory_) {
    LangFactory = _LangFactory_;
  }));

  it('should do something', function () {
    expect(!!LangFactory).toBe(true);
  });

});
