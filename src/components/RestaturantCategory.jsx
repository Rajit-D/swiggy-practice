import React from "react";
import ItemsList from "./ItemsList";

const RestaturantCategory = (props) => {
  const handleClick = () => {
    props.setShowItems();
  }
  return (
    <div className="mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between flex-col w-[800px]">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <h1 className="font-bold">{props.cardData.title}</h1>
        <p>⬇️</p>
      </div>
      {props.showItems && <ItemsList itemData={props.cardData.itemCards}/>}
    </div>
  );
};

export default RestaturantCategory;
