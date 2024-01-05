import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantName from "../utils/useRestaurantName";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId)
  const resInfo = useRestaurantName(resId)

  console.log(resMenu);

  return (
    <div>
      <h1>{resInfo}</h1>
      <ul>
        {resMenu.map((item) => (
          <li>
            {item.card.info.name}- Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
