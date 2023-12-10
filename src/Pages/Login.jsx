import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";



function Login() {
  return (
    <div className="login">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color:"white"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color:"white"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/register">You dont have an acount yet? Register now</Link>{" "}
        </Form.Group>
        <Button className="btn-login-bg" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
    </div>
  );
}

export default Login;
