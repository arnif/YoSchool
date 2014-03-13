'use strict';

angular.module('yoSchoolApp')
  .directive('NavDirective', function () {
    return {
      template: '<a href=#>{{ name }}</a></li>',
      restrict: 'E',
      scope: {
        'name': '='
      }
    };
  });
