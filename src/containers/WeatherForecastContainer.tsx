import { useClimate } from "../hooks/useClimate";
import { RiMoonFill } from "react-icons/ri";

const WeatherForecastContainer = () => {
  const { Climate } = useClimate();

  const getHour = (hour_number: number) => {
    const hour =
      Climate?.forecast.forecastday[0].hour[hour_number].time.split(" ");
    return hour?.[1];
  };

  const fechaComoCadena = Climate?.forecast.forecastday[0].hour[0].time; // día lunes
  const dias = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const numeroDia = new Date(fechaComoCadena).getDay();
  const nombreDia = dias[numeroDia];
  console.log(Climate?.forecast.forecastday[0].hour[0].condition.text);

  return (
    <div className="Container">
      <div className="tittle">
        <h1>Weather Forecast for {nombreDia}</h1>
      </div>
      <div className="WeatherForecastContainer">
        <div className="climate">
          <div className="time-climate">{getHour(0)}</div>
          <div className="body-climate">
            <div className="icon">
              {Climate?.forecast.forecastday[0].hour[0].condition.text ===
                "Clear" && <RiMoonFill size={65} color="#1976d2" />}
            </div>
            <div className="text-climate">
              <h4>{Climate?.forecast.forecastday[0].hour[0].condition.text}</h4>
            </div>
            <div className="temperature-climate">
              <h5>{Climate?.forecast.forecastday[0].hour[0].temp_c} °C</h5>
            </div>
          </div>
        </div>
        <div className="climate"></div>
        <div className="climate">sdas</div>
        <div className="climate">sdas</div>
        <div className="climate">sdas</div>
        <div className="climate">sdas</div>
      </div>
    </div>
  );
};

export { WeatherForecastContainer };
