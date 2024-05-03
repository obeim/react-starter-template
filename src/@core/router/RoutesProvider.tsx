import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import routes from "@/configs/routes";
import { useAuthContext } from "@/auth/AuthContext";
import utils from "@/utils";
import SetCurrentLayout from "./SetCurrentLayout";
import { useCallback } from "react";
import { RouteType } from "@/types";
import BrowserNavigate from "@/components/BrowserNavigate";
import Layout from "@/layout";

const RoutesProvider = () => {
  const { user, isAuthenticated } = useAuthContext();

  const checkRoutePermissions = useCallback(
    (route: RouteType, userPermissions?: string[]) =>
      utils.hasPermission(
        route?.permissions?.filter((value) => value !== "auth"),
        userPermissions || []
      ) ? (
        <SetCurrentLayout
          children={route.component}
          route={{ path: route.path, layout: route.layout }}
        />
      ) : (
        <Navigate to="/notAuthorized" />
      ),
    []
  );

  const router = createBrowserRouter([
    {
      // pareant route component
      element: <Layout />,
      // child route components
      children: routes.map((route) => {
        if (route?.permissions?.includes("auth")) {
          return {
            element: isAuthenticated ? (
              checkRoutePermissions(route, user?.permissions)
            ) : (
              <BrowserNavigate url={`/login`} />
            ),
            path: route.path,
          };
        } else {
          return {
            element: checkRoutePermissions(route, user?.permissions),
            path: route.path,
          };
        }
      }),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
