'use strict';

angular.module('yoSchoolApp')
.directive('formValidationDirective', function ($http, $timeout) {
  // var checking = null;
 //  return {
 //    require: 'ngModel',
 //    link: function(scope, ele, attrs, c) {
 //      scope.$watch(attrs.ngModel, function(newVal) {
 //      console.log(c);
 //        if (!checking) {
 //          checking = $timeout(function() {
 //            $http({
 //              method: 'POST',
 //              url: 'http://project3api.haukurhaf.net/api/v1/login',
 //              data: {'user': c.$modelValue, 'pass': '123456' } // this does not work
 //            }).success(function(data, status, headers, cfg) {
 //              c.$setValidity('unique', data.isUnique);
 //              checking = null;
 //            }).error(function(data, status, headers, cfg) {
 //              checking = null;
 //            });
 //          }, 500);
 //        }
 //      });
 //    }
 //  };

  // var FOCUS_CLASS = 'ng-focused';
  // return {
  //  restrict: 'A',
  //  require: 'ngModel',
  //  link: function(scope, element, attrs, ctrl) {
  //    ctrl.$focused = false;
  //    element.bind('focus', function() {
  //      // console.log(evt);
  //      element.addClass(FOCUS_CLASS);
  //      scope.$apply(function() {ctrl.$focused = true;});
  //    }).bind('blur', function() {
  //      // console.log(evt);
  //      element.removeClass(FOCUS_CLASS);
  //      scope.$apply(function() {ctrl.$focused = false;});
  //    });
  //  }
  // };

      // template: '<div></div>',
      // restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the formValidationDirective directive');
      // }
});
