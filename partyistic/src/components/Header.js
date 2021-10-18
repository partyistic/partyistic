/** @format */

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../images/logo.png';

export default function Header() {
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    let get = localStorage.getItem('access_token');
    if (get) {
      setAuth(!isAuth);
    }
  }, []);

  return (
    <>
      <Navbar className='navbar'>
        <img
          className='logo'
          style={{ marginTop: '1%' }}
          src={logo}
          alt='logo'></img>
        <Container>
          <Nav className='circle'>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/'>
              Home
            </Link>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/Inspiration'>
              Inspiration
            </Link>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/Services'>
              Services
            </Link>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/Parties'>
              Parties
            </Link>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/Profile'>
              Profile
            </Link>
            <Link
              className='a'
              style={{
                textDecoration: 'none',
                color: '#fff',
                paddingLeft: '20%',
              }}
              href='/AboutUs'>
              AboutUs
            </Link>
            <nav></nav>
          </Nav>
          {isAuth && (
            <Button
              className='logout'
              style={{ color: '#fff' }}
              href='#'
              color='primary'
              variant='outlined'
              component={NavLink}
              to='/Logout'>
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}
