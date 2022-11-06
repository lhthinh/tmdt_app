import React, { lazy } from "react";

const path = "/get/product";

const ProductGetRoute = {
  key: "productGet",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./ProductGetContent")),
};
export default ProductGetRoute;
