import { Outlet } from "react-router-dom";
const Portal = () => {
  return (
    <div>
      <div>portal layout</div>
      <Outlet />
    </div>
  );
};

export default Portal;
