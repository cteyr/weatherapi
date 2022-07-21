import { useClimate } from "../hooks/useClimate";

const WeatherForecastContainer = () => {
  const { Climate } = useClimate();

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
