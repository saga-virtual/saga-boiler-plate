
import LoginPage from '../pages/auth/login.f7';
import HomePage from '../pages/home.f7';
import NotFoundPage from '../pages/404.f7';

import AuthMiddleware from './middleware/AuthMiddleware';

var routes = [
  {
    path: '/',
    component: HomePage,
    beforeEnter: [AuthMiddleware]
  },
  {
    path: '/auth/login',
    component: LoginPage,
    beforeEnter: [AuthMiddleware]
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;