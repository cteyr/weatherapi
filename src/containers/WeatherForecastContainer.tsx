import { useClimate } from "../hooks/useClimate";
import { InfoClimate } from "../components/InfoClimate";

const WeatherForecastContainer = () => {
  const { Climate } = useClimate();

  const getHour = (number: number) => {
    const hour = Climate?.forecast.forecastday[0].hour[number].time.split(" ");

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

  return (
    <div className="Container">
      <div className="tittle">
        <h1>Weather Forecast for {nombreDia}</h1>
      </div>
      <div className="WeatherForecastContainer">
        <InfoClimate time={() => getHour(0)} hour={0} climate={Climate} />
        <InfoClimate time={() => getHour(5)} hour={5} climate={Climate} />
        <InfoClimate time={() => getHour(10)} hour={10} climate={Climate} />
        <InfoClimate time={() => getHour(15)} hour={15} climate={Climate} />
        <InfoClimate time={() => getHour(20)} hour={20} climate={Climate} />
        <InfoClimate time={() => getHour(23)} hour={23} climate={Climate} />
      </div>
    </div>
  );
};

export { WeatherForecastContainer };
