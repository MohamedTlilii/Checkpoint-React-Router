import React from "react";
import "../App.css";
// import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const Card = ({ image, tittle, descrption, rating }) => {
  return (
    <div className="card-cadre">
      <div className="card-containr">
        <div>
          <Link to="/movie">
          <img
            style={{ width: "250px", height: "275px" }}
            src={image}
            alt={tittle}
          />
          </Link>
        </div>
        <h6>{tittle}</h6>
        <span className="icon-card">{"⭐".repeat(rating)}</span>
        <p>{descrption}</p>
      </div>
    </div>
  );
};

export default Card;
