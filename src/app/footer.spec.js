import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('weatherFooter', ['app/footer.html'])
      .component('weatherFooter', footer);
    angular.mock.module('weatherFooter');
  });

  it('should render \'Niv BA\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<weather-footer></weather-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('Niv BA');
  }));
});
