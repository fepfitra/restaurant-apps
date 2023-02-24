import Main from '../views/pages/main';
import Detail from '../views/pages/detail';

const routes = {
  '/': Main,
  '/main': Main,
  '/detail/:id': Detail,
};

export default routes;
