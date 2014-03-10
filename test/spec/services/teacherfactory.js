'use strict';

describe('Service: TeacherFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var TeacherFactory;
  beforeEach(inject(function (_TeacherFactory_) {
    TeacherFactory = _TeacherFactory_;
  }));

  it('should do something', function () {
    expect(!!TeacherFactory).toBe(true);
  });

});
