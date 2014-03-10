'use strict';

angular.module('yoSchoolApp')
.directive('formValidationDirective', function ($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			$http({
				method: 'POST',
				url: '/api/v1/login',
				data: {'field': attrs.ensureUnique}
			}).success(function(data, status, headers, cfg) {
				console.log(data + status + headers + cfg);
				c.$setValidity('unique', data.isUnique);
			}).error(function(data, status, headers, cfg) {
				console.log(data + status + headers + cfg);
				c.$setValidity('unique', false);
			});
		}


      // template: '<div></div>',
      // restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the formValidationDirective directive');
      // }
  };
});
