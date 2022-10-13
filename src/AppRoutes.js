import React from "react";
import { Route, Routes } from "react-router-dom";
import Global from "../src/layouts/Global";
import { globalRoutes } from "./Routes";
import _ from "lodash";
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Global />}>
        {globalRoutes &&
          _.map(
            globalRoutes,
            ({ component: Component, children, ...rest }, index) => (
              <Route key={Component?.key} element={<Component />} {...rest} />
            )
          )}
      </Route>
    </Routes>
  );
}
