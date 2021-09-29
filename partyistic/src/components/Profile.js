/** @format */

import React from 'react';


import UserServices from '../user_profile/userServices';
import UserFavorites from '../user_profile/userFavorites';
import UserParties from '../user_profile/userParties';
export default function Profile() {

import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import updateServiceForm from './updateServiceForm';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token')

    if (!get) { history.push('/login') }
  },[])

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

      <h2>Your Services</h2>
      <UserServices />

      <h2>Your Favorites</h2>
      <UserFavorites />

      <h2>Your Parties</h2>
      <UserParties />
    </>
  );
}
