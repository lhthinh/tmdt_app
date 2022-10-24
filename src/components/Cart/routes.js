import { lazy } from "react";

<<<<<<< HEAD
const path = "/cart";

const cartRoute = {
=======
const path = "/Cart";

const homeRoute = {
>>>>>>> 8be89c5da9dd7a56fb5c58574dc50488d2ced8bc
  key: "cart",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./CartContent")),
};
<<<<<<< HEAD
export default cartRoute;
=======
export default homeRoute;
>>>>>>> 8be89c5da9dd7a56fb5c58574dc50488d2ced8bc
