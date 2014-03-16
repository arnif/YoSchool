'use strict';

describe('Service: TeacherFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var TeacherFactory;
  beforeEach(inject(function (_TeacherFactory_) {
    TeacherFactory = _TeacherFactory_;
  }));

  it('should get all evalTemplates', inject(function (TeacherFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/evaluationtemplates').respond(200, 'OK');

    TeacherFactory.getEvalTemplates().then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should return 401 from fetching evalTemplates', inject(function (TeacherFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/evaluationtemplates').respond(401, 'Unauthorized');

    TeacherFactory.getEvalTemplates().then(function(data) {
      expect(data.status).toBe(401);
    });

    $httpBackend.flush();
  }));

  it('should get all evaluations', inject(function (TeacherFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/evaluations').respond(200, 'OK');

    TeacherFactory.getAllEval().then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should return 401 from fetching evaluations', inject(function (TeacherFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/evaluations').respond(401, 'Unauthorized');

    TeacherFactory.getAllEval().then(function(data) {
      expect(data.status).toBe(401);
    });

    $httpBackend.flush();
  }));

  it('should get eval by ID', inject(function (TeacherFactory, $httpBackend, API) {
    var id = 1;

    $httpBackend.expect('GET', API + '/evaluationtemplates/' + id).respond(200, 'OK');

    TeacherFactory.getEvalTemplateById(1).then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should return 404 from not finding eval by id', inject(function (TeacherFactory, $httpBackend, API) {
    var id = 99;

    $httpBackend.expect('GET', API + '/evaluationtemplates/' + id).respond(404, 'Not Found');

    TeacherFactory.getEvalTemplateById(99).then(function(data) {
      expect(data.status).toBe(404);
    });

    $httpBackend.flush();
  }));

  /*
    it('should post evalTemplates', inject(function (TeacherFactory, $httpBackend, API) {
    var id = 1;

    $httpBackend.expect('POST', API + '/evaluationtemplates/' + id).respond(200, 'OK');

    TeacherFactory.getEvalTemplateById(id).then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should not post', inject(function (TeacherFactory, $httpBackend, API) {
    var id = 99;

    $httpBackend.expect('POST', API + '/evaluationtemplates/' + id).respond(204, 'No Content');

    TeacherFactory.getEvalTemplateById(id).then(function(data) {
      expect(data.status).toBe(204);
    });

    $httpBackend.flush();
  
  }));
*/
});