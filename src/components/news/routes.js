import { lazy } from "react";

const path = "/blog";

const newsRoute = {
  key: "blog",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./NewsContent")),
};
export default newsRoute;
