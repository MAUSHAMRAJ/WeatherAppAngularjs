  angular.module('weatherApp')
  .controller('WeatherController', function($scope, $http) {
    $scope.search = function() {
      var city = $scope.city;
      var apiKey = 'YOUR_API_KEY'; // Replace with your API key
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

      $http.get(url)
        .then(function(response) {
          $scope.weatherData = response.data;
        })
        .catch(function(error) {
          console.error('Error fetching weather data:', error);
        });
    };
  });
