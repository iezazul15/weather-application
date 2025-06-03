import { WeatherContext } from "../contexts";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();
  return (
    <WeatherContext value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext>
  );
}
