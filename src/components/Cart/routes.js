import { lazy } from "react";

const path = "/Cart";

const homeRoute = {
  key: "cart",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./CartContent")),
};
export default homeRoute;
