import { createContext } from "react";

const WeatherContext = createContext(null);
const FavouriteContext = createContext(null);
const LocationContext = createContext(null);

export { FavouriteContext, LocationContext, WeatherContext };
