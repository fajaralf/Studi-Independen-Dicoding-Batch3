/* eslint-disable import/named */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import './views/components/index';
import './data/favorite-resto-idb';

import '../scss/style.scss';

import App from './views/app.js';
import { getElement } from './utils/index';
import { swRegister } from './utils/index';

const app = new App({
  appBar: getElement('app-bar'),
  contentContainer: getElement('#content'),
});

window.addEventListener('load', () => {
  app.renderContent();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderContent();
});
