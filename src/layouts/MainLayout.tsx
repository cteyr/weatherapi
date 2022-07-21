import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import { useClimate } from "../hooks/useClimate";

const MainLayout = () => {
  const { getAllClimate, setClimate, Latitud, Climate } = useClimate();
  useEffect(() => {
    getAllClimate();
  }, [Latitud]);

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
