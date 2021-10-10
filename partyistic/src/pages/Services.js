/** @format */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CreateService from '../components/forms/CreateService';
import { useState, useEffect } from 'react';

import Place from '../components/services-components/Place';
import Planner from '../components/services-components/Planner';
import MusicBand from '../components/services-components/MusicBand';
import PhotoSession from '../components/services-components/PhotoSession';
import RentCar from '../components/services-components/RentCar';
import BookTrip from '../components/services-components/BookTrip';
import Fashion from '../components/services-components/Fashion';

import useResourcephotosessions from '../hook/UseServicesPhotosessions';
import useResourceCar from '../hook/UseServicesCars';
import useResourceFash from '../hook/UseServicesFashions';
import useResourcemusicbands from '../hook/UseServicesMusicBands';
import useResourceplaces from '../hook/UseServicesPlaces';
import useResourceplanners from '../hook/UseServicesPlanners';
import useResourcetrip from '../hook/UseServicesTrips';

import Button from 'react-bootstrap/Button';
import './Services.css';
import Link from '@material-ui/core/Link';
import useCars from '../hook/UseServicesCars';
import useFashion from '../hook/UseServicesFashions';
import useMusicBands from '../hook/UseServicesMusicBands';
import usePlaces from '../hook/UseServicesPlaces';
import useTrips from '../hook/UseServicesTrips';
import usePlanners from '../hook/UseServicesPlanners';
import usePhotosessions from '../hook/UseServicesPhotosessions';

import { useHistory } from 'react-router-dom';

export default function Services(props) {
  const history = useHistory();

  const cars = useResourceCar().carresources;
  const fashion = useResourceFash().fashresources;
  const planners = useResourceplanners().plannerresources;
  const trips = useResourcetrip().tripresources;
  const photosessions = useResourcephotosessions().photoresources;
  const places = useResourceplaces().placeresources;
  // console.log(places)
  const musicbands = useResourcemusicbands().musicresources;

  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Carousel
          fade
          style={{ borderRadius: '1%', width: '1200px', marginLeft: '15%' }}>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1604654011460-018ae27016cc?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1597&q=80'
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/flagged/photo-1579890122633-1d9ec7cfb277?ixid=MnwxMjA3fDB8[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
              alt='Third slide'
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
              alt='Third slide'
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1571113908007-5d6aae13d73e?ixlib=rb-1.2.1&ixid=MnwxM[…]90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='Third slide'
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://fusionzaffa.com/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-10-at-3.31.12-PM.jpeg'
              alt='Third slide'
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '850px', borderRadius: '1%' }}
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Navbar
        className='middleNav'
        style={{
          textDecoration: 'none',
          marginTop: '5%',
          backgroundColor: 'transparent',
          color: '#fff',
        }}>
        <Container>
          <Nav className='me-auto' style={{ color: '#fff' }}>
            <Link class='aa' href='#reserve_a_place'>
              Reserve a Place
            </Link>
            <Link class='aa' href='#hire_a_planner'>
              Hire a Planner
            </Link>
            <Link class='aa' href='#choose_a_music_band'>
              Choose a Music Band
            </Link>
            <Link class='aa' href='#photo_session'>
              Book a photo session
            </Link>
            <Link class='aa' href='#get_fashion'>
              Get Fashion
            </Link>
            <Link class='aa' href='#rent_car'>
              Rent a Car
            </Link>
            <Link class='aa' href='#book_trip'>
              Book a Trip
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Button
        style={{
          marginLeft: '15%',
          color: '#fff',
          fontSize: '30px',
          fontFamily: "'Open Sans Condensed', sans-serif",
          width: '1200px',
          height: '60px',
        }}
        variant='outline-secondary'
        type='button'
        class='btn btn-primary btn-lg btn-block'
        onClick={handleShow}>
        Create a Service
      </Button>

      <div id='reserve_a_place'>
        {' '}
        <Place places={places} />{' '}
      </div>

      <br></br>
      <br></br>

      <div id='hire_a_planner'>
        {' '}
        <Planner planners={planners} />{' '}
      </div>
      <br></br>
      <br></br>

      <div id='choose_a_music_band'>
        {' '}
        <MusicBand musicbands={musicbands} />{' '}
      </div>
      <br></br>
      <br></br>

      <div id='photo_session'>
        {' '}
        <PhotoSession photosessions={photosessions} />{' '}
      </div>
      <br></br>
      <br></br>

      <div id='get_fashion'>
        {' '}
        <Fashion fashion={fashion} />{' '}
      </div>
      <br></br>
      <br></br>

      <div id='rent_car'>
        {' '}
        <RentCar cars={cars} />{' '}
      </div>
      <br></br>
      <br></br>

      <div name='book_trip' id='book_trip'>
        {' '}
        <BookTrip trips={trips} />{' '}
      </div>

      <br></br>
      <br></br>

      <CreateService show={show} handleClose={handleClose} />
    </>
  );
}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
// style={{color:"#fff" , fontSize:"20px"  , textAlign:"center"}}
