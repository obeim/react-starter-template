import { useAppDispatch } from "@/store";
import {
  selectCurrentLayout,
  setCurrentLayout,
} from "@/store/app/navigationSlice";
import { RouteType } from "@/types/navigation";
import { FC, PropsWithChildren, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SetCurrentLayout: FC<
  PropsWithChildren<{ route: Omit<RouteType, "component"> }>
> = ({ children, route }) => {
  const { pathname } = useLocation();
  const currentLayout = useSelector(selectCurrentLayout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentLayout !== route.layout)
      dispatch(setCurrentLayout(route.layout));
  }, [pathname]);

  return <Suspense>{children}</Suspense>;
};

export default SetCurrentLayout;
