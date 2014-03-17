'use strict';

angular.module('yoSchoolApp')
  .factory('LangFactory', function () {
    // Service logic
    // ...

    var lang = 'is';

    // Public API here
    return {
      getLang: function() {
        return lang;
      },
      setLang: function(l) {
        lang = l;
      }
    };
  });
