import { lazy } from "react";

const path = "/cart";

const cartRoute = {
  key: "cart",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./CartContent")),
};
export default cartRoute;
