import React from "react";

const RestaurantCard = (props) => {
  const { resDetails } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
  } = resDetails.info;

  return (
    <div className="res-card">
      <img
        className="res-icon"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />

      {/* <div className='card-'></div> */}
      <h1 ><b>{name}</b></h1>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resDetails.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )

  };
};

export default RestaurantCard;
