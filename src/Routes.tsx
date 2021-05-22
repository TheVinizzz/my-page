// eslint-disable-next-line
import React, {Component, Fragment, lazy, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./ui/pages/home")),
  }
];

const renderRoutes = (routes: any) => {
  return routes ? (
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route: any, i: number) => {
          const Layout = route.layout || Fragment;
          const Guard = route.guard || Fragment;
          const Component = route.component || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;
};

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
