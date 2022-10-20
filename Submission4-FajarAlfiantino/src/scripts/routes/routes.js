import { home, detail, favorite } from '../views/pages/index';

const routes = {
  '/': home,
  '/detail/:id': detail,
  '/favorite': favorite,
};

export default routes;
