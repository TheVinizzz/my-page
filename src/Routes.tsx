// eslint-disable-next-line
import React, {Component, Fragment, lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./ui/components/Layout/Default"

const routesConfig = [
  {
    layout: NavBar,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("./ui/pages/home")),
      }
    ]
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
