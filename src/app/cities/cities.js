class citiesController {
  /** @ngInject */
  constructor($http, $window, $scope) {
    $scope.loading = true;
    this.$http = $http;
    this._ = $window._;
    this.idealTemp = 21;
    this.idealHum = 50;
    this.idealTempRank = {
      21: 1,
      22: 2
    };
    this.fetchData($scope);
    $scope.updateWeather = value => {
      $scope.loading = true;
      this.idealTemp = value;
      this.idealTempRank = (value === 21) ? {21: 1, 22: 2} : {21: 2, 22: 1};
      this.cities = this.sortData(this.cities);
      $scope.loading = false;
    };
  }
  fetchData($scope) {
    this.$http
      .get('https://api.openweathermap.org/data/2.5/box/city?bbox=-85,180,85,-180,8&appid=7fa7394eb12864ccf726512e191e10d9')
      .then(response => {
        const cities = response.data.list;
        this.cities = this.sortData(cities);
        $scope.loading = false;
      });
  }
  sortData(cities) {
    return this._(cities).chain().each(city => {
      if (city.main.temp >= this.idealTemp) {
        if (city.main.humidity >= this.idealHum) {
          city.score = (this._.range(this.idealTemp, city.main.temp).length + this._.range(this.idealHum, city.main.humidity).length);
        } else {
          city.score = (this._.range(this.idealTemp, city.main.temp).length + this._.range(city.main.humidity, this.idealHum).length);
        }
      } else if (city.main.temp < this.idealTemp) {
        if (city.main.humidity >= this.idealHum) {
          city.score = (this._.range(city.main.temp, this.idealTemp).length + this._.range(this.idealHum, city.main.humidity).length);
        } else {
          city.score = (this._.range(city.main.temp, this.idealTemp).length + this._.range(city.main.humidity, this.idealHum).length);
        }
      }
      city.score.toString();
    }).sortBy(city => {
      return city.score;
    }).sortBy(city => {
      return this.idealTempRank[city.main.temp];
    }).value();
  }
}

export const cities = {
  template: require('./cities.html'),
  controller: citiesController
};
