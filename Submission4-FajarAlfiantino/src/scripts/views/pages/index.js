/* eslint-disable implicit-arrow-linebreak */
import RestoListPresenter from '../../presenter/resto-list';
import RestoDetailPresenter from '../../presenter/resto-details';

import RestoDataSource from '../../data/resto-data-source';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

import { createElement } from '../../utils/index';

// Pages entry
import './home-page';
import './detail-page';
import './favorite-page';

const home = () =>
  new RestoListPresenter({
    view: createElement('home-page'),
    model: RestoDataSource,
  });

const detail = () =>
  new RestoDetailPresenter({
    view: createElement('detail-page'),
    model: {
      detail: RestoDataSource,
      // favorite: FavoriteRestoIdb,
    },
  });

const favorite = () =>
  new RestoListPresenter({
    view: createElement('favorite-page'),
    model: FavoriteRestoIdb,
  });

// eslint-disable-next-line import/prefer-default-export
export { home, detail, favorite };
