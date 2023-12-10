// import { useParams } from "react-router-dom";
// import Data from "../Data";
import { Card} from "react-bootstrap";
// import ReactPlayer from "react-player";

function Movie({ image, tittle, descrption, rating }) {
  return (
    <div className="movie">
      <Card className="card-containar" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image}  />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text>
          {descrption}
          </Card.Text>
          <span className="icon-card">{"⭐".repeat(rating)}</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
