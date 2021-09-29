import React, { useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import "./Header.css";
import logo from "./pics/logo.png"

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
      <Navbar className="navbar">
      <img className="logo" style={{  height:"160%", marginTop:"1%" }}src={logo} alt="logo"></img>
        <Container>
          <Nav className="me-auto">

             <Link id="me-auto2" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/">Home</Link>
            <Link id="me-auto21" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/Inspiration">Inspiration</Link>
            <Link id="me-auto22" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/Services">Services</Link>
            <Link id="me-auto23" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/Parties">Parties</Link>
            <Link id="me-auto24" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/Profile">Profile</Link>
            <Link id="me-auto25" style={{ textDecoration: "none", color: '#fff', paddingLeft:"20%" }}  href="/About">AboutUs</Link>
            <nav>

            </nav>
            {isAuth&&
             <Button
                         style={{ color: '#fff', paddingLeft:"20%" }} 
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
