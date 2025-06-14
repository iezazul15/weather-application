import { useState } from "react";
import { LocationContext } from "../contexts";

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  return (
    <LocationContext value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext>
  );
}
