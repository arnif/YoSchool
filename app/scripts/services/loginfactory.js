'use strict';

angular.module('yoSchoolApp')
  .factory('LoginFactory', function ($http, $q, API) {
    // Service logic
    // ...
    var userName = 'TestSubject';
    var userObj = {};
    var tokenCode;

    var meaningOfLife = 42;

    return {
      login: function(user) {
        var promise = $http.post( API + 'login', user).then(function (response) {
          // console.log(response);
          return response;
        }, function(error) {
          // console.log(error);
          return error;
        });
        return promise;
      },
      getToken: function() {
        return tokenCode;
      },
      setToken: function(t) {
        tokenCode = t;
      },
      getUser: function() {
        return userObj;
      },
      setUser: function(user) {
        userObj = user;
      }
    };

    // Public API here
    // return {
      // someMethod: function () {
      //   return meaningOfLife;
      // },
      // getUsername: function() {
      //   return userObj.User.Username;
      // },
      // // setUsername: function(name) {
      // //   userName = name;
      // // },
      // getUserObj: function() {
      //   return userObj;
      // },
      // loginUser: function(user, pass) {

      // }
    // };
  });
