import { lazy } from "react";

const path = "/product";

const productRoute = {
  key: "product",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./ProductContent")),
};
export default productRoute;
