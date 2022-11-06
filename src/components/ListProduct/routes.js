import React, { lazy } from "react";

const path = "/all/product";

const listProductRoute = {
  key: "listProduct",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./ListProduct")),
};
export default listProductRoute;
