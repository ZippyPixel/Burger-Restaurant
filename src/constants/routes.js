import Home from '../pages/Home';
import Burger from '../pages/Burger';
import CheckOut from '../pages/CheckOut';
import * as urls from './app-urls';

export default [
  {
    label: 'HOME PAGE',
    path: urls.HOME,
    Element: Home,
  },
  {
    label: 'BURGER BUILDER',
    path: urls.BURGER,
    Element: Burger,
  },
  {
    label: 'CHECK OUT',
    path: urls.CHECKOUT,
    Element: CheckOut,
  },
];
