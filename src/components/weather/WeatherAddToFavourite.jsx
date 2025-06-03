import { useContext, useEffect, useState } from "react";
import HeartRed from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../contexts";

export default function WeatherAddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const {
    weatherData: { latitude, longitude, location },
  } = useContext(WeatherContext);

  const [isFavourite, setIsFavourite] = useState(false);
  function handleFavourite() {
    if (isFavourite) {
      removeFromFavourites(location);
      setIsFavourite(false);
    } else {
      const found = favourites.find((fav) => fav.location === location);
      if (!found) addToFavourites(latitude, longitude, location);
      setIsFavourite(true);
    }
  }
  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, [location, favourites]);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartRed : Heart} alt="Heart" />
        </button>
      </div>
    </div>
  );
}
