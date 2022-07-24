import { useClimate } from "../hooks/useClimate";
import { InfoClimate } from "../components/InfoClimate";

const WeatherForecastContainer = () => {
  const { Climate } = useClimate();

  const getHour = (number: number) => {
    const hour = Climate?.forecast.forecastday[0].hour[number].time.split(" ");
    if (number === 0) {
      return `12:00 AM`;
    }
    if (number === 12) {
      return `12:00 PM`;
    }
    if (number < 12) {
      const hora_number = parseInt(hour?.[1].substring(0, 2));
      return `${hora_number.toString()}:00 AM`;
    }
    const hora_number = parseInt(hour?.[1].substring(0, 2)) - 12;
    return `${hora_number.toString()}:00 PM`;
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
        <InfoClimate time={() => getHour(4)} hour={4} climate={Climate} />
        <InfoClimate time={() => getHour(8)} hour={8} climate={Climate} />
        <InfoClimate time={() => getHour(12)} hour={12} climate={Climate} />
        <InfoClimate time={() => getHour(16)} hour={16} climate={Climate} />
        <InfoClimate time={() => getHour(20)} hour={20} climate={Climate} />
      </div>
    </div>
  );
};

export { WeatherForecastContainer };
