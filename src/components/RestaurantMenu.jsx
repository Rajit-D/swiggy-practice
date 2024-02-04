import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantName from "../utils/useRestaurantName";
import RestaturantCategory from "./RestaturantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const resInfo = useRestaurantName(resId);
  const [showIndex, setShowIndex] = useState(null);

  console.log(resMenu);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>{resInfo}</h1>
      <ul>
        {resMenu.map((item, index) => (
          <RestaturantCategory
            cardData={item.card.card}
            showItems={index === showIndex ? true : false}
            setShowItems={() => {
              if (showIndex === null) setShowIndex(index);
              else if (showIndex === index) setShowIndex(null);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
