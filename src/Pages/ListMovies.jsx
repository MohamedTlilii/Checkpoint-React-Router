import FooterSection from "../Components/FooterSection/FooterSection";
import Footer from "../Components/Footer/Footer";

import React, { useState } from "react";
// import ReactStars from "react-stars";
// import { VscDebugRestart } from "react-icons/vsc";
import Btn from "../Components/Btn";
import "../App.css";
import Card from "../Components/Card";
import Data from "../Data";

function ListMovies({ search,rate }) {
  const [movies] = useState(Data);
  return (
    <div className="List-containr-movies">
      <div>
        <h1>Movies</h1>
        <h4>Genre:</h4>
      </div>
      
      <div className="search-movies"></div>
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
        {movies
          .filter((movie) =>
            movie.tittle.toLowerCase().includes(search.toLowerCase())
          ).filter((movie)=> (rate?movie.rating === rate:movie))

          .map((movie, i) => (
            <Card key={i} {...movie} />
          ))}
      </div>
      <FooterSection id="footer-movies-section" />
      <Footer />
    </div>
  );
}

export default ListMovies;
