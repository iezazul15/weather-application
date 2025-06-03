import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

export default function useWeather() {
  // State to hold the weather data
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    description: "",
    temperature: "",
    time: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloudPercentage: "",
    windspeed: "",
    latitude: "",
    longitude: "",
  });

  // use location context
  const { selectedLocation } = useContext(LocationContext);

  // Loading state to indicate whether the data is being fetched
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  // Error state to handle any errors during the fetch
  const [error, setError] = useState(null);

  //   Function to fetch weather data based on latitude and longitude
  async function fetchWeatherData(lat, long) {
    try {
      setLoading({
        state: true,
        message: "Fetching weather data...",
      });
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!res.ok) {
        const errorMessage = `Fetching weather data failed with status: ${res.status}`;
        throw new Error(errorMessage);
      }
      const data = await res.json();
      const updatedWeatherData = {
        location: data?.name,
        climate: data?.weather[0].main,
        description: data?.weather[0].description,
        temperature: data?.main.temp,
        time: data?.dt,
        maxTemp: data?.main.temp_max,
        minTemp: data?.main.temp_min,
        humidity: data?.main.humidity,
        cloudPercentage: data?.clouds.all,
        windspeed: data?.wind.speed,
        latitude: lat,
        longitude: long,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
      });
    }
  }

  // useEffect to fetch weather data when the component mounts
  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding location...",
    });
    if (selectedLocation?.latitude && selectedLocation?.longitude) {
      // If a location is selected, fetch weather data for that location
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  // return the weather data, loading state and error state
  return {
    weatherData,
    loading,
    error,
  };
}
