import { useContext } from "react";
import Cloud from "../../assets/icons/cloud.svg";
import Humidity from "../../assets/icons/humidity.svg";
import TempMax from "../../assets/icons/temp-max.svg";
import TempMin from "../../assets/icons/temp-min.svg";
import Wind from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../contexts";

export default function WeatherCondition() {
  const {
    weatherData: {
      description,
      maxTemp,
      minTemp,
      humidity,
      cloudPercentage,
      windspeed,
    },
  } = useContext(WeatherContext);
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        {description}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{maxTemp}°</p>
            <img src={TempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{minTemp}°</p>
            <img src={TempMin} />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={Humidity} />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={Cloud} />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{windspeed}km/h</p>
            <img src={Wind} />
          </div>
        </li>
      </ul>
    </div>
  );
}
