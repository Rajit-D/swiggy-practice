import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  function filterList(list) {
    const filterList = filteredList.filter((res) => res.info.avgRating > 4.3);
    setfilteredList(filterList);
    setfilterBtnText("Cancel Filter");
    setshowBtn(true);
  }

  const [list, setlist] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterBtnText, setfilterBtnText] = useState("Filter");
  const [showBtn, setshowBtn] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const body = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4805955&lng=88.41160649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJSON = await body.json();
    // console.log(dataJSON);
    setlist(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredList(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log(list);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline, check your internet connection again</h1>
    );

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            if (searchText.length === 0) {
              alert("Search text cannot be empty");
            } else {
              const filteredRestaurants = list.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilteredList(filteredRestaurants);
              // setfilterBtnText("Cancel Filter");
            }
          }}
        >
          &#128269;
        </button>
        <button onClick={() => filterList(list)} className="login-button">
          {filterBtnText}
        </button>
        {showBtn && (
          <button
            onClick={() => {
              setfilteredList(list);
              setfilterBtnText("Filter");
              setshowBtn(false);
            }}
            class="close-button"
          >
            ✖
          </button>
        )}
      </div>
      <div className="res-container">
        {filteredList.length === 0 ? (
          <h1>Your search for "{searchText}" did not match any results</h1>
        ) : (
          filteredList.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <PromotedRestaurantCard resDetails={restaurant} />
              ) : (
                <RestaurantCard resDetails={restaurant} />
              )}
              {/* <RestaurantCard resDetails={restaurant} /> */}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
