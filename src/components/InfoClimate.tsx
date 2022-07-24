import { Climate } from "../types/Climate";
import { RiMoonFill } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";
import { IoMdPartlySunny } from "react-icons/io";

const InfoClimate = ({ time, climate, hour }: IProps) => {
  return (
    <div className="climate">
      <div className="time-climate">{time()}</div>
      <div className="body-climate">
        <div className="icon">
          {climate?.forecast.forecastday[0].hour[hour].condition.text ===
            "Clear" && <RiMoonFill size={65} color="#bdbdbd" />}
          {climate?.forecast.forecastday[0].hour[hour].condition.text ===
            "Sunny" && <IoMdSunny size={65} color="#ffea00" />}
          {climate?.forecast.forecastday[0].hour[hour].condition.text ===
            "Partly cloudy" && <IoMdPartlySunny size={65} color="#ffea00" />}
        </div>
        <div className="text-climate">
          <h4>{climate?.forecast.forecastday[0].hour[hour].condition.text}</h4>
        </div>
        <div className="temperature-climate">
          <h5>{climate?.forecast.forecastday[0].hour[hour].temp_c} °C</h5>
        </div>
      </div>
    </div>
  );
};

type IProps = {
  climate: Climate;
  hour: number;
  time: () => string;
};

export { InfoClimate };
