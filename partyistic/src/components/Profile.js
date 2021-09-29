/** @format */

import React from 'react';

import UserServices from '../user_profile/userServices';
import UserFavorites from '../user_profile/userFavorites';
import UserParties from '../user_profile/userParties';

import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import updateServiceForm from './updateServiceForm';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import yahia from './img/yahia.jpg';
export default function Profile() {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/login');
    }
  }, []);

  return (
    <>
      <h1
      style={{ marginTop:"3%", color:"white",marginLeft:"39%", fontFamily: "'Dancing Script', cursive"}}
    
      >Personal Profile</h1>
      <img
        style={{ height: '10%', width: '10%' , marginLeft:"40%", borderRadius:"5%" , display:"inline-block"}}
        src={yahia}
        alt='profile pic'
      />
      <h4
      style={{ marginLeft:"41%", color:"white" , fontFamily: "'Dancing Script', cursive"}}
      >Yahia Al-Qous</h4>
     

      <h2
      style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    
      >Your Services</h2>
      <UserServices />

      <h2
      style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    
      >Your Favorites</h2>
      <UserFavorites />

      <h2
      style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    
      >Your Parties</h2>
      <UserParties />
    </>
  );
}
