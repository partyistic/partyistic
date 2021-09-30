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
import useResourceCar from '../hook/useServicesCars';
import useResourceFash from '../hook/useServicesFashions';
import useResourcemusicbands from '../hook/useServicesMusicBands';
import useResourcephotosessions from '../hook/useServicesPhotosessions';
import useResourceplaces from '../hook/useServicesPlaces';
import useResourceplanners from '../hook/useServicesPlanners';
import useResourcetrip from '../hook/useServicesTrips';
import useResource from '../hook/uesParties';
import Button from '@restart/ui/esm/Button';



import yahia from './img/yahia.jpg';

export default function Profile() {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/login');
    }
  }, []);
 
  let email = localStorage.getItem('email');
  const { carresources, deletecarResource } = useResourceCar();
  const { fashresources } = useResourceFash();
  const { musicresources } = useResourcemusicbands();
  const { photoresources } = useResourcephotosessions();
  const { placeresources } = useResourceplaces();
  const { plannerresources } = useResourceplanners();
  const { tripresources } = useResourcetrip();
  const { resources } = useResource();
  
  let allServices = []
  let allParties = []
  let car = []
  let fash = []
  let trip = []
  let place = []
  let band = []
  let photo = []
  let planner = []

  carresources && carresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    car.push(item)
  });
  fashresources && fashresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    fash.push(item)
  });
  musicresources && musicresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    band.push(item)
  });
  photoresources && photoresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    photo.push(item)
  });
  placeresources && placeresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    place.push(item)
  });
  plannerresources && plannerresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    planner.push(item)
  });
  tripresources && tripresources.map((item) => {
    item.emailname == email &&
      allServices.push(item)
    trip.push(item)
  });
  resources && resources.map((item) => {
    item.emailname == email &&
      allParties.push(item)
  });



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


       <UserServices allServices={allServices} />



      <h2
      style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    
      >Your Parties</h2>
      <UserParties allParties={allParties} />

    </>
  );
}
