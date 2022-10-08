import { lazy } from "react";

const path = "/";

const homeRoute = {
  key: "home",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./HomeContent")),
};
export default homeRoute;
