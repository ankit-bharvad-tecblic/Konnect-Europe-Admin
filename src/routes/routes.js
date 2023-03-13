import { Suspense } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import TravelAgentList from "../pages/TravelAgentList/";

let isAuth = true;

const ROLES = {
  Admin: 1001,
  Hr: 2002,
  User: 2334,
};

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

const RequireAuth = ({ allowedRoles, children }) => {
  // Admin: 1001,
  // Hr: 2002,
  let location = useLocation();
  const history = useNavigate();

  const auth = {
    user: "ankit",
    roles: [1001],
  };

  console.log("RequireAuth ===> ", allowedRoles);

  // only Admin can access this routes
  if (auth.roles[0] === ROLES.Admin)
    return onlyAdminCanAccess(allowedRoles, children);

  // only HR can access this routes
  if (auth.roles[0] === ROLES.Hr)
    return onlyHrCanAccess({ auth, children, allowedRoles, location, history });
};

const removeToken = (location, history) => {
  console.log("remove token call");
  isAuth = false;
  history.push("/login");
  // <Navigate to="/login" state={{ from: location }} replace />;
};

const onlyAdminCanAccess = (allowedRoles, children) => {
  console.log("only-Admin-Can-Access ---> ", allowedRoles);
  return children;
};

const onlyHrCanAccess = ({
  auth,
  children,
  allowedRoles,
  location,
  history,
}) => {
  console.log("only-HR-Can-Access ---> ", auth, allowedRoles);
  return auth?.roles?.find((role) => allowedRoles?.includes(role)) === undefined
    ? removeToken(location, history)
    : children;
};

const PageNotFound = () => {
  return <div>404</div>;
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
    path: "/test",
    element: (
      <RequireAuth allowedRoles={[ROLES.User]}>
        <div>dashboard test</div>
      </RequireAuth>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <Dashboard />
            </RequireAuth>
          </Suspense>
        </Layout>
      </ProtectedRoutes>
    ),
  },

  {
    path: "/travel-agent-list",
    element: (
      <ProtectedRoutes>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <RequireAuth allowedRoles={[ROLES.Admin]}>
              <TravelAgentList />
            </RequireAuth>
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
            <PageNotFound />
          </Suspense>
        </Layout>
      </ProtectedRoutes>
    ),
  },
];

export default routes;
