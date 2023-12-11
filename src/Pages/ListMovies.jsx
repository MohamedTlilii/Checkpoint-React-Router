import FooterSection from "../Components/FooterSection/FooterSection";
import Footer from "../Components/Footer/Footer";
import { Button, Form } from "semantic-ui-react";
import React, { useState } from "react";
// import ReactStars from "react-stars";
// import { VscDebugRestart } from "react-icons/vsc";
import Btn from "../Components/Btn";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Card from "../Components/Card";
import Data from "../Data";

function ListMovies({ search, rate, movies, setMovies }) {
  const [newMovie, setnewMovie] = useState({});
  const handleAddNewMovie = () => {
    setMovies([...movies, { ...newMovie, id: uuidv4() }]);
  };

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
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setnewMovie({ ...newMovie, tittle: e.target.value });
            }}
          />
          <Form.Input
            type="text"
            placeholder="Movie poster url"
            onChange={(e) => {
              setnewMovie({ ...newMovie, image: e.target.value });
            }}
          />
          <Form.Input
            type="number"
            min={1}
            max={5}
            onChange={(e) => {
              setnewMovie({ ...newMovie, rating: e.target.value });
            }}
          />
          <Form.Input
            type="text"
            placeholder="Resume"
            onChange={(e) => {
              setnewMovie({ ...newMovie, descrption: e.target.value });
            }}
          />
          <Form.Input
            type="text"
            placeholder="Movie trailer url"
            onChange={(e) => {
              setnewMovie({ ...newMovie, trailer: e.target.value });
            }}
          />
        </Form.Group>
        <Button
          className="btn-btn"
          onClick={() => {
            handleAddNewMovie();
          }}
        >
          Add movie
        </Button>
      </Form>

      <div className="card-lsit">
        {movies
          .filter((movie) =>
            movie.tittle.toLowerCase().includes(search.toLowerCase())
          )
          .filter((movie) => (rate ? movie.rating === rate : movie))
          .reverse()
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
