import { DetailsPage } from './../pages/DetailsPage';
import { AUTH_ROUTE, ADMIN_ROUTE, REGISTER_ROUTE, DETAILS_ROUTE } from './../utils/index';
import { TypeRoutes } from './../types/index';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from './../pages/HomePage';
import { RegiserPage } from '../pages/RegisterPage';

export const authRoutes:TypeRoutes[] = [
  {
    path:ADMIN_ROUTE,
    Element:HomePage
  }
]

export const publicRoutes:TypeRoutes[] = [
  {
    path:AUTH_ROUTE,
    Element: AuthPage
  },
  {
    path:REGISTER_ROUTE,
    Element: RegiserPage
  },
  {
    path:ADMIN_ROUTE,
    Element:HomePage
  },
  {
    path:DETAILS_ROUTE + '/:id',
    Element:DetailsPage
  },
]

