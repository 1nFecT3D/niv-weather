import angular from 'angular';
import 'angular-mocks';
import {title} from './title';

describe('title component', () => {
  beforeEach(() => {
    angular
      .module('weatherTitle', ['app/title.html'])
      .component('weatherTitle', title);
    angular.mock.module('weatherTitle');
  });

  it('should render BEST WEATHER ON EARTH', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<weather-title></weather-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('BEST WEATHER ON EARTH');
  }));
});
