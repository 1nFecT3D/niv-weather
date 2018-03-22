import angular from 'angular';

import {citiesModule} from './app/cities/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.less';

angular
  .module('app', [citiesModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('weatherHeader', header)
  .component('weatherTitle', title)
  .component('weatherFooter', footer);
