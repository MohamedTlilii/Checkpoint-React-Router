import React from "react";
import "../App.css";
// import ReactStars from "react-stars";

const Card = ({ image, tittle, descrption, rating }) => {
  return (
    <div className="card-cadre">
      <div className="card-containr">
        <div>
          <img
            style={{ width: "250px", height: "275px" }}
            src={image}
            alt={tittle}
          />
        </div>
        <h6>{tittle}</h6>
        <span className="icon-card">{"⭐".repeat(rating)}</span>
        <p>{descrption}</p>
        {/* <link rel="stylesheet" href="" /> */}
      </div>
    </div>
  );
};

export default Card;
