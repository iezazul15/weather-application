import { useContext, useState } from "react";
import Search from "../../assets/search.svg";
import { LocationContext } from "../../contexts";
import { getLocationByName } from "../../data/location-data";

export default function HeaderSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  function handleSubmit(e) {
    e.preventDefault();
    const fetchedLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchedLocation });
  }
  return (
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">
          <img src={Search} />
        </button>
      </div>
    </form>
  );
}
