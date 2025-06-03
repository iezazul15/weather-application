import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import FavouriteProvider from "./providers/FavouriteProvider";
import WeatherProvider from "./providers/weatherProvider";

export default function Weather() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="h-screen grid place-items-center">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}
