var signup = angular.module('signUp', []);
// var SpaceModel = require('../../src/getsSpaces')

signup.controller('UserCreation', [
  '$scope',
  function($scope){
   $scope.test = 'This is some Angular stuff that insures angular is running alright!'
   $scope.spaces = 'hello';
   $scope.listspace = function(space) {
     return space
   };

  //  };
}]);
