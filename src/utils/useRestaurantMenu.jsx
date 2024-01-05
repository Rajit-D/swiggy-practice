import { useEffect } from "react";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const [resMenu, setResMenu] = useState([]);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4805955&lng=88.41160649999999&restaurantId=${resId}`
    );


    const datajson = await data.json();
    
    console.log(datajson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]);
    setResMenu(
      datajson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  return resMenu;
};

export default useRestaurantMenu;
