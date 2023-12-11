import React from "react";
import { Card } from "react-bootstrap";
import Data from "../Data";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function Movie() {
  let { id } = useParams();
  let movie = Data.find((movie) => movie.id === id);
  return (
    <div className="movie">
      <Card className="card-container">
        {/* <Card.Img
          style={{ borderRadius: "30px" }}
          variant="top"
          src={movie.image}
        /> */}

        <ReactPlayer className="trailer-youtube-vedio" url={movie.trailer} />

        <Card.Body>
          <Card.Title>{movie.tittle}</Card.Title>
          <Card.Text>{movie.descrption}</Card.Text>
          {/* <span className="icon-card">{"⭐".repeat(movie.rating)}</span> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
