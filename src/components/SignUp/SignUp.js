import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postRequest } from "../../services";
import { Form, Button } from 'react-bootstrap';
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const SignUpUser = () => {
    const userCreation = postRequest('auth/users/', { email, username, password });
    userCreation.then((response) => {
      const status = response.status;
      if (response.status == 200) {
          alert("Succesfully created new user!")
      }
      }).catch(err=> {
      if(err.response){
          alert("Error during user creation!")
      }
  });


  };
  const handleSignUp = () => {
    SignUpUser();
    navigate("/login");
  };
  return (
    <div>
      <Form className="mainForm">

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

      </Form>

      <Button onClick={handleSignUp} variant="primary" type="submit">
        Create user
      </Button></div>
  );
}

export default SignUp;
