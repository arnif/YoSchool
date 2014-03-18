'use strict';

angular.module('yoSchoolApp')
  .directive('displayTeacher', function () {
    return {
      restrict: 'E',
      scope: {
        teacher: '='
      },
      template: '<span class="pull-left m-right">'+
                '<img class="media-object thumbnail" id="imageClip" ng-src="{{teacher.ImageURL}}" alt="Mynd af kennara">' +
                '</span>' +
                '<div class="media-body">' +
                '<h4 class="media-heading">{{teacher.FullName}}</h4>' +
                '{{teacher.Email}}' +
                '</div>'
    };
  });
