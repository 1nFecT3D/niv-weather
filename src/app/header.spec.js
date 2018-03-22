import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('weatherHeader', ['app/header.html'])
      .component('weatherHeader', header);
    angular.mock.module('weatherHeader');
  });

  it('should render \'Niv\'s Best Weather On Earth APP\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<weather-header></weather-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Niv\'s Best Weather On Earth APP');
  }));
});
