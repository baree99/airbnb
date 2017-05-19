var app = angular.module('signUp',[]);

  app.controller('UserCreation', function($scope, $http) {

      $scope.data = [];

      var request = $http.get('/databaseQuery');
      request.success(function(data) {
          $scope.data = data;
      });
      request.error(function(data){
          console.log('Error: ' + data);
      });
});

app.controller('Bookings', function($scope, $http) {

    $scope.bookings = [];

    var request = $http.get('/databaseQueryBookings');
    request.success(function(bookings) {
        $scope.bookings = bookings;
    });
    request.error(function(bookings){
        console.log('Error: ' + bookings);
    });
});

