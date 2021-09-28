import React, { useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



export default function Header() {


  const [isAuth,setAuth]=useState(false);
useEffect(()=>{
  let get=localStorage.getItem('access_token')
  if(get){
    setAuth(!isAuth)
  }
},[])

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Inspiration">Inspiration</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Parties">Parties</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <nav>

            </nav>
            {isAuth&&
             <Button
                href="#"
                color="primary"
                variant="outlined"
                component={NavLink}
                to="/logout"
              >
                Logout
              </Button>
            
            }
             
      


          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
