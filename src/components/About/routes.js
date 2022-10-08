import { lazy } from "react";

const path = "/about";

const aboutRoute = {
  key: "about",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./AboutContent")),
};
export default aboutRoute;
