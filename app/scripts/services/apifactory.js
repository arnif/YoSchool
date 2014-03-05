'use strict';

angular.module('yoSchoolApp')
  .factory('ApiFactory', function ($q) {
    // Service logic
    // ...

    function createEvaluation(id, titleIS, titleEN, introIS, introEN) {
        return {
          ID: id,
          TitleIS: titleIS,
          TitleEN: titleEN,
          IntroTextIS: introIS,
          IntroTextEN: introEN,
          CourseQuestions: [],
          TeacherQuestions: []
        };
      }

    function createQuestion(id, textIS, textEN, imageUrl, type) {
        return {
          ID: id,
          TextIS: textIS,
          TextEN: textEN,
          ImageURL: imageUrl,
          Type: type,
          Answers: []
        };
      }

    function generateEvaluations() {
      var result = [];
      for(var i = 0; i < 5; ++i) {
        var number = i+1;
        var evaluation = createEvaluation(i, 'Kennslumat ' + number, 'Evaluation ' + number, 'Derp', 'Derp');
        for(var j = 0; j < 3; ++j) {
          var qNumber = j+1;
          var question = createQuestion(j, 'Hvad er derp ' + qNumber  +' ?', 'What is derp ' + qNumber + ' ?', '', 'single');
          evaluation.CourseQuestions.push(question);
        }
        result.push(evaluation);
      }
      return result;
    }

    var evaluations = generateEvaluations();

    return {
      getAllEvaluations: function() {
        var deferred = $q.defer();

        deferred.resolve(evaluations);

        return deferred.promise;
      },
      getEvaluationById: function(id) {
        var deferred = $q.defer();
 
        if (evaluations[id]) {
          deferred.resolve(evaluations[id]);
        } else {
          deferred.reject('No evaluation with this id');
        }

        return deferred.promise;
      },
      addEvaluation: function(evaluation) {
        var deferred = $q.defer();

        console.log(evaluation);

        return deferred.promisel;
      }
    };

    // var meaningOfLife = 42;

    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };
  });
