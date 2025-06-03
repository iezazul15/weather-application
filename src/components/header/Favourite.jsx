import { useState } from "react";
import Favourite from "../../assets/heart.svg";
import FavouriteModal from "./FavouriteModal";

export default function HeaderFavourite() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal((prev) => !prev)}
        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      >
        <img src={Favourite} alt="Favourite" />
        <span>Favourite Locations</span>
      </div>
      {showModal && <FavouriteModal />}
    </>
  );
}
