import { useClimate } from "../hooks/useClimate";

const WeatherForecastContainer = () => {
  const { Climate } = useClimate();

  return (
    <div className="WeatherForecastContainer">
      <div className="climate">
        <div className="time-climate">
          {Climate?.forecast.forecastday[0].hour[0].time}
        </div>
      </div>
      <div className="climate"></div>
      <div className="climate">sdas</div>
      <div className="climate">sdas</div>
      <div className="climate">sdas</div>
      <div className="climate">sdas</div>
    </div>
  );
};

export { WeatherForecastContainer };
