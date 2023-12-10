import React from "react";
import { Card } from "react-bootstrap";
// import Data from "../Data"

function Movie({ image, title, description, rating, movies }) {
  
  return (
    <div className="movie">
      <Card className="card-container" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <span className="icon-card">{"⭐".repeat(rating)}</span>
        </Card.Body>
      </Card>

    
    </div>
  );
}

export default Movie;