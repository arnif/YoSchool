'use strict';

describe('Service: StudentFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var StudentFactory;
  beforeEach(inject(function (_StudentFactory_) {
    StudentFactory = _StudentFactory_;
  }));


  // it('should get my eval',inject(function(StudentFactory, $httpBackend){
  //   $httpBackend.expect('GET', 'http://project3api.haukurhaf.net/api/v1/my/evaluations')
  //   .respond(200);

  //   StudentFactory.getMyEval().then(function(data){
  //     expect(data).toBeTruthy();
  //   });
  //   $httpBackend.flush();
  // }));

});
