import React, { useState } from "react";
import ReactStars from "react-stars";
import { VscDebugRestart } from "react-icons/vsc";
import Btn from "../Components/Btn";
import "../App.css";
import Card from "../Components/Card";
import Data from "../Data"

function ListMovies() {
  const [movies, ] = useState(Data);
  return (
    <div className="List-containr-movies">
      <div>
        <h1>Movies</h1>
        <h4>Genre:</h4>
      </div>
      <input type="text" id="searchInput" placeholder="Search.."></input>
      <div>
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
      </div>
      <div>
        <VscDebugRestart className="restart-btn" color="black" size={"20"} />
      </div>
      <div className="List-containr-btns">
        <Btn content="Action" />
        <Btn content="Adventure" />
        <Btn content="Comedy" />
        <Btn content="Romance" />
        <Btn content="Sci-Fi" />
        <Btn content="Horro" />
        <Btn content="Fantacy" />
      </div>
      <div className="intro-containr">
        <h2>Latest Movies</h2>
        <Btn content="View All" />
      </div>
      <div className="card-lsit">
      {movies.map((movie, i) => (
          <Card key={i} {...movie} />
        ))}

      </div>
    </div>
  );
}

export default ListMovies;
