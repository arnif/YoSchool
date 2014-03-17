'use strict';

describe('Service: StudentFactory', function () {

  // load the service's module
  beforeEach(module('yoSchoolApp'));

  // instantiate service
  var StudentFactory;
  beforeEach(inject(function (_StudentFactory_) {
    StudentFactory = _StudentFactory_;
  }));

  it('should get myEval', inject(function (StudentFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/my/evaluations').respond(200, 'OK');

    StudentFactory.getMyEval().then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should get myEval', inject(function (StudentFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/my/evaluations').respond(404, 'Error');

    StudentFactory.getMyEval().then(function(data) {
      expect(data.status).toBe(404);
    });

    $httpBackend.flush();
  }));

  it('should getMyCourses', inject(function (StudentFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/my/courses').respond(200, 'OK');

    StudentFactory.getMyCourses().then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should getMyCourses', inject(function (StudentFactory, $httpBackend, API) {
    $httpBackend.expect('GET', API + '/my/courses').respond(404, 'Error');

    StudentFactory.getMyCourses().then(function(data) {
      expect(data.status).toBe(404);
    });

    $httpBackend.flush();
  }));

  it('should get EvalByID', inject(function(StudentFactory, $httpBackend, API) {
    var courseID = 'T-427-WEPO';
    var semester = '20141';
    var evaluationID = 1;

    $httpBackend.expect('GET', API + '/courses/' + courseID +'/' + semester + '/evaluations/'+ evaluationID).respond(200, 'OK');

    StudentFactory.getEvalById(courseID, semester, evaluationID).then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should get EvalByID', inject(function(StudentFactory, $httpBackend, API) {
    var courseID = 'T-427-WEPO';
    var semester = '20141';
    var evaluationID = 1;

    $httpBackend.expect('GET', API + '/courses/' + courseID +'/' + semester + '/evaluations/'+ evaluationID).respond(404, 'Error');

    StudentFactory.getEvalById(courseID, semester, evaluationID).then(function(data) {
      expect(data.status).toBe(404);
    });

    $httpBackend.flush();
  }));

  it('should get CourseInfo', inject(function(StudentFactory, $httpBackend, API) {
    var id = 'T-427-WEPO';
    var semester = '20141';

    $httpBackend.expect('GET', API + '/courses/' + id + '/' + semester + '/teachers').respond(200, 'OK');
    StudentFactory.getCourseInfo(id, semester).then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should get CourseInfo', inject(function(StudentFactory, $httpBackend, API) {
    var id = 'T-427-WEPO';
    var semester = '20141';

    $httpBackend.expect('GET', API + '/courses/' + id + '/' + semester + '/teachers').respond(404, 'Error');
    StudentFactory.getCourseInfo(id, semester).then(function(data) {
      expect(data.status).toBe(404);
    });

    $httpBackend.flush();
  }));

  it('should set and get CourseName', function() {
    var name = 'T-999-VINE';

    StudentFactory.setCourseName(name);
    expect(StudentFactory.getCourseName()).toBe('T-999-VINE');
  });

  it('should send answer', inject(function(StudentFactory, $httpBackend, API) {
    var answers = {'QuestionID': 1,
    'TeacherSSN': 'sample string 2',
    'Value': 'sample string 3' };

    var courseID = 1;
    var semester = 20141;
    var evalID = 5;

    $httpBackend.expect('POST', API + '/courses/' + courseID + '/' + semester + '/evaluations/' + evalID, answers).respond(200, 'OK');
    StudentFactory.sendAnswers(courseID, semester, evalID, answers).then(function(data) {
      expect(data.status).toBe(200);
    });

    $httpBackend.flush();
  }));

  it('should not send answer', inject(function(StudentFactory, $httpBackend, API) {
    var answers = {'QuestionID': 1,
    'TeacherSSN': 'sample',
    'Value': 'sample1' };

    var courseID = 1;
    var semester = 20141;
    var evalID = 5;

    $httpBackend.expect('POST', API + '/courses/' + courseID + '/' + semester + '/evaluations/' + evalID, answers).respond(404, 'Error');
    StudentFactory.sendAnswers(courseID, semester, evalID, answers).then(function(data) {
      expect(data.status).toBe(404);
    });
    
    $httpBackend.flush();
  }));
});
