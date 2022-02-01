import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginUserAction, isStaffAction } from "../../actions/actionsCreator";
import { Form, Button, Container } from 'react-bootstrap';
const Login = () => {
  const datos = useSelector(state=>state.loginReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  }, []);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = () => {
    dispatch(loginUserAction(username, password)); 
    //console.log(datos.authToken);
    navigate('/home');

  };
  return (
    <Container className="mainForm">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>


      </Form>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}

export default Login;
