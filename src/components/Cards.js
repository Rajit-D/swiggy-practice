import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Card Image"
      />
      <Link to="/about">
        <button>Click</button>
      </Link>
    </div>
  );
};

export default Cards;
