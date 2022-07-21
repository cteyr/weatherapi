import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useClimate } from "../hooks/useClimate";

const MainLayout = () => {
  const { Climate } = useClimate();

  return (
    <div className="layout">
      <div className="layout_header">
        <Navbar nameCountry={Climate?.location.region} />
      </div>
      <div className="layout_main-content">
        <Outlet />
      </div>
    </div>
  );
};
export { MainLayout };
