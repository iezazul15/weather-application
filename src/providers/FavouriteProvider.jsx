import { FavouriteContext } from "../contexts";
import { useLocalStorage } from "../hooks";

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("Favourites", []);
  function addToFavourites(lat, long, location) {
    setFavourites([
      ...favourites,
      {
        id: `${lat}-${long}-${location}`,
        lat,
        long,
        location,
      },
    ]);
  }
  function removeFromFavourites(location) {
    setFavourites(favourites.filter((fav) => fav.location !== location));
  }
  return (
    <FavouriteContext
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext>
  );
}
