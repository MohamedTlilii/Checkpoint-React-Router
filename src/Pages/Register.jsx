import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <Form className="register-form">
        <Form.Text style={{color:"white"}}>Create an acount</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:"white"}}> Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:"white"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color:"white"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/login">You already have an acount? login now.</Link>{" "}
        </Form.Group>
        <Button className="btn-login-bg" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
