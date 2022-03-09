import Distribution from '../pages/Distribution';
import Performance from '../pages/Performance';
import Rating from '../pages/Rating';

export const routes = [
  {
    component: Distribution,
    path: '/distribution',
    name: 'Distribution'
  },
  {
    component: Performance,
    path: '/performance',
    name: 'Performance'
  },
  {
    component: Rating,
    path: '/rating',
    name: 'Rating'
  }
];
