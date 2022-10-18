import { lazy } from "react";

const path = "/contact";

const contactRoute = {
  key: "contact",
  path,
  breadcrumbs: [
    {
      path,
    },
  ],
  component: lazy(() => import("./ContactUs")),
};
export default contactRoute;
