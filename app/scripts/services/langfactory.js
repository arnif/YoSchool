'use strict';

angular.module('yoSchoolApp')
  .factory('LangFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var lang = 'is';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getLang: function() {
        return lang;
      },
      setLang: function(l) {
        lang = l;
      }
    };
  });
