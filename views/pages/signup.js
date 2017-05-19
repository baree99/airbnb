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

angular
    .module('myApp', ['moment-picker'])
    .config(['momentPickerProvider', function (momentPickerProvider) {
        momentPickerProvider.options({
            /* Picker properties */
            locale:        'en',
            format:        'L LTS',
            minView:       'decade',
            maxView:       'minute',
            startView:     'year',
            autoclose:     true,
            today:         false,
            keyboard:      false,

            /* Extra: Views properties */
            leftArrow:     '&larr;',
            rightArrow:    '&rarr;',
            yearsFormat:   'YYYY',
            monthsFormat:  'MMM',
            daysFormat:    'D',
            hoursFormat:   'HH:[00]',
            minutesFormat: moment.localeData().longDateFormat('LT').replace(/[aA]/, ''),
            secondsFormat: 'ss',
            minutesStep:   5,
            secondsStep:   1
        });
    }]);
