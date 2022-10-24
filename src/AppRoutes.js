import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Global from "../src/layouts/Global";
import { globalRoutes } from "./Routes";
import _ from "lodash";
export default function AppRoutes() {
  const Home = lazy(() => import("./components/Home/HomeContent"));

  return (
    <Suspense>
      <Routes>
        <Route element={<Global />}>
          {globalRoutes &&
            _.map(globalRoutes, (route, index) => (
              <Route
                key={route.key}
                exact
                path={route.path}
                element={<route.component />}
              />
            ))}
        </Route>
      </Routes>
    </Suspense>
  );
}
