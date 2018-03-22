import angular from 'angular';

import {cities} from './cities';

export const citiesModule = 'cities';

angular
  .module(citiesModule, [])
  .component('weatherCities', cities);
