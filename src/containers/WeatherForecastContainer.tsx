import { Climate } from "../types/Climate";
import { useEffect } from "react";
import { useClimate } from "../hooks/useClimate";

const WeatherForecastContainer = () => {
  const { getAllClimate, setClimate, Latitud, Climate } = useClimate();

  useEffect(() => {
    getAllClimate();
  }, [Latitud]);
  console.log(Climate);

  return (
    <div className="WeatherForecastContainer">
      <div className="color">{Climate?.location.region}</div>
      <div className="color">sdas</div>
      <div className="color">sdas</div>
      <div className="color">sdas</div>
      <div className="color">sdas</div>
      <div className="color">sdas</div>
    </div>
  );
};

export { WeatherForecastContainer };
