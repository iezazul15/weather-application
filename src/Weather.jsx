import WeatherContent from "./components/weather/WeatherContent";
import FavouriteProvider from "./providers/FavouriteProvider";
import LocationProvider from "./providers/LocationProvider";
import WeatherProvider from "./providers/weatherProvider";

export default function Weather() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <WeatherContent />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
