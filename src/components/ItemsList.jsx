import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ itemData }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemData.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item.card.info.imageId
            }
            alt=""
            className="w-[10%]"
          />
          <div className="">
            <h1>{item.card.info.name}</h1>
            <h1>{item.card.info.price}</h1>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          <button
            className="bg-slate-500 text-white py-1 px-4 rounded-lg"
            onClick={()=>handleAddItems(item)}
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
