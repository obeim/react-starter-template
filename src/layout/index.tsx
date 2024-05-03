import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";

import Portal from "./Portal";
import { useSelector } from "react-redux";
import { selectCurrentLayout } from "@/store/app/navigationSlice";

export default () => {
  const pageLayout = useSelector(selectCurrentLayout);

  return (
    <div>
      {
        {
          dashboard: <Dashboard />,
          portal: <Portal />,
        }[pageLayout || ""]
      }
      {!pageLayout && <Outlet />}
    </div>
  );
};
