import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const isAuth = true;

const GuestRoute = ({ children }) => {
  return isAuth ? (
    <Navigate to={{ pathname: "/", state: { from: "" } }} />
  ) : (
    children
  );
};

const ProtectedRoutes = ({ children }) => {
  return isAuth ? (
    children
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: "" } }} />
  );
};

const routes = [
  {
    path: "/login",
    element: (
      <GuestRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <div>login page</div>
        </Suspense>
      </GuestRoute>
    ),
  },

  {
    path: "/signup",
    element: <GuestRoute>{/* <Signup /> */}</GuestRoute>,
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <div>dashboard</div>
          </Suspense>
        </Layout>
      </ProtectedRoutes>
    ),
  },

  {
    path: "*",
    element: (
      <ProtectedRoutes>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <div>Page not found</div>
          </Suspense>
        </Layout>
      </ProtectedRoutes>
    ),
  },
];

export default routes;
