import Distribution from "../Pages/Distribution";
import Performance from "../Pages/Performance";
import Rating from "../Pages/Rating";

export const routes = [
  {
    component: Distribution,
    path: "/distribution",
    name: "Distribution",
  },
  {
    component: Performance,
    path: "/performance",
    name: "Performance",
  },
  {
    component: Rating,
    path: "/rating",
    name: "Rating",
  },
];
