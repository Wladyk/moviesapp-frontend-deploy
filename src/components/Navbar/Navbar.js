import React from 'react';
import {useSelector} from 'react-redux';
import {  Link, useNavigate } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';
import { Button } from '@mui/material';
const Navbar = () =>{
  const navigate = useNavigate();
  const goTo = (route) => {
    navigate(route);
  
  }
  const GuestNavbar = () => {
    return (
      <Row>
      <Col><Button variant="outlined" onClick={() => goTo('/home')}>Home</Button></Col>
      <Col><Button variant="outlined" onClick={() => goTo('/movies')}>Movies</Button></Col>
      <Col><Button variant="outlined" onClick={() => goTo('/signup')}>Sign up</Button></Col>
      <Col><Button variant="outlined" onClick={() => goTo('/login')}>Login</Button></Col>
    </Row>  
    );
  }
  const PrivateNavbar = () => {
    return (
      <Row>
      <Col><Button variant="outlined" onClick={() => goTo('/home')}>Home</Button></Col>
      <Col><Button variant="outlined" onClick={() => goTo('/movies')}>Movies</Button></Col>
      <Col><Button variant="outlined" onClick={() => goTo('/watchlist')}>My watchlist</Button></Col>
      <Col><Button variant="outlined" color="error" onClick={() => goTo('/logout')}>Logout</Button></Col>
      {datos.isStaff
      ? <Col><Button variant="outlined" color="success" onClick={() => goTo('/admin')}>Admin panel</Button></Col>
      : ""
      }
    </Row>  
    );  
  }

  const datos = useSelector(state => state.loginReducer);
  return (
  <Container>
    {!datos.loggedIn
    ? <GuestNavbar />
    : <PrivateNavbar />
    }
  </Container>
  );
}
export default Navbar;