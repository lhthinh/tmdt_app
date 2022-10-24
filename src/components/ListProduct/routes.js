import { lazy } from "react";

const path = "/listproduct";

const listproductRoute = {
  key: "listproduct",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./ListProduct")),
};
export default listproductRoute;
