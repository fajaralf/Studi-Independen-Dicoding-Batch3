import 'regenerator-runtime';
import './views/components/index';
import './data/restaurant-idb';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../scss/style.scss';

import App from './views/app';
import { getElement } from './utils/element';
import swRegister from './utils/sw-register';

const app = new App({
  appBar: getElement('app-bar'),
  content: getElement('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
