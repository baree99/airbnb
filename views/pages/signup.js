var app = angular.module('signUp',[]);

  app.controller('UserCreation', function($scope, $http) {

      $scope.data = [];

      var request = $http.get('/test');
      request.success(function(data) {
          $scope.data = data;
      });
      request.error(function(data){
          console.log('Error: ' + data);
      });
});
