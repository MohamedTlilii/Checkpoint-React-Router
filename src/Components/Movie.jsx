import React from "react";
import { Card } from "react-bootstrap";
import Data from "../Data";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "../App.css";
function Movie() {
  let { id } = useParams();
  let movie = Data.find((movie) => movie.id === id);
  // const videoStyle = {
  //   borderRadius: "30px",
  //   overflow: "hidden",
  //   width: "600px !importent",

  // };
  return (
    <div className="movie">
      <Card className="card-container">
        {/* <Card.Img
          style={{ borderRadius: "30px" }}
          variant="top"
          src={movie.image}
        /> */}

        <ReactPlayer url={movie.trailer} />

        <Card.Body className="titlle-movie">
          <Card.Title>{movie.tittle}</Card.Title>
          <Card.Text>{movie.descrption}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
