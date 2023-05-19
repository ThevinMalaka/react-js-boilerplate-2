/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<h2></h2>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../../views/home/container")));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <h2>404</h2>,
    },
  ]);
}
