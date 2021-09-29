/** @format */

import React from 'react';

import UserServices from '../user_profile/userServices';
import UserParties from '../user_profile/userParties';
import useSWR from 'swr';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import updateServiceForm from './updateServiceForm';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



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


      <h1>Personal Profile</h1>
      <img
        style={{ height: '10%', width: '10%' }}
        src='https://images.unsplash.com/photo-1612532479617-71b3a8878565?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt='profile pic'
      />
      <h4>Name</h4>
      <h6>email@gmail.com</h6>

     


    </>
  );
}
