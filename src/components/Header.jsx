import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setbtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSnrKDj1mVXJ9kyyj-ecCnJBIPl8uhMmbQ_8dohxY&s"
          alt=""
        />
      </div>

      <div className="nav-items">
        <ul className="nav">
          <li>Online Status :{onlineStatus===false?"❌":"✅"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnText === "Login" ? setbtnText("Logout") : setbtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
