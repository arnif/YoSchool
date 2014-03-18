'use strict';

angular.module('yoSchoolApp')
  .directive('displayTeacher', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the displayTeacher directive');
      }
    };
  });
