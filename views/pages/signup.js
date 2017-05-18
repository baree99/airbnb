var signup = angular.module('signUp', []);
// var UserModel = require('../../src/User')

signup.controller('UserCreation', [
  '$scope',
  function($scope){
   $scope.test = 'This is some Angular stuff that insures angular is running alright!';
}]);
