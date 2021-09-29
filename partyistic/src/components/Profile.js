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


      <h1>Personal Profile</h1>
      <img
        style={{ height: '10%', width: '10%' }}
        src='https://images.unsplash.com/photo-1612532479617-71b3a8878565?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        alt='profile pic'
      />
      <h4>Name</h4>
      <h6>email@gmail.com</h6>

     
      <h2>Your Services</h2>
      <UserServices allServices={allServices} />


      <h2>Your Parties</h2>
      <UserParties allParties={allParties} />

    </>
  );
}
