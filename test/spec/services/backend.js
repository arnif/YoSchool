'use strict';

describe('Service: backend', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var backend;
  beforeEach(inject(function (_backend_) {
    backend = _backend_;
  }));

  // it('should do something', function () {
  //   expect(!!backend).toBe(true);
  // });

  // it('should contain url', function() {
  //   expect(backend.API).toBe('http://project3api.haukurhaf.net/api/v1/');
  // });

});
