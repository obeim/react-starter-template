import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" select-none p-5">
      <div>dashboard layout</div>
      <Outlet /> {/* content */}
    </div>
  );
};

export default Dashboard;
