import { RouteType } from "@/types/navigation";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/dashboard/home"));

const routes: RouteType[] = [
  {
    path: "/",
    layout: "portal",
    component: <Home />,
    permissions: [],
  },
];

export default routes;
