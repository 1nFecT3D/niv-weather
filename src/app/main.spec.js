import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, techs and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('weather-header').length).toEqual(1);
    expect(element.find('weather-title').length).toEqual(1);
    expect(element.find('weather-techs').length).toEqual(1);
    expect(element.find('weather-footer').length).toEqual(1);
  }));
});
