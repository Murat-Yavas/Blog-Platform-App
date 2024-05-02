import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default Root;
