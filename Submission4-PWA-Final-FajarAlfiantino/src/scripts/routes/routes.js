import Home from '../views/pages/home';
import Detail from '../views/pages/details';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/#': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
