import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CreateService from './CreateService';
import { useState,useEffect } from 'react';
import Place from '../allServices/Place';
import Planner from '../allServices/Planner';
import MusicBand from '../allServices/MusicBand';
import PhotoSession from '../allServices/PhotoSession';
import RentCar from '../allServices/RentCar';
import BookTrip from '../allServices/BookTrip';
import Fashion from '../allServices/Fashion';

import useResourcephotosessions from '../hook/useServicesPhotosessions';
import useResourceCar from '../hook/useServicesCars';
import useResourceFash from '../hook/useServicesFashions';
import useResourcemusicbands from '../hook/useServicesMusicBands';
import useResourceplaces from '../hook/useServicesPlaces';
import useResourceplanners from '../hook/useServicesPlanners';
import useResourcetrip from '../hook/useServicesTrips';


import { useHistory } from 'react-router-dom';


export default function Services(props) {
  const history = useHistory();

  const cars = useResourceCar().carresources
  const fashion = useResourceFash().fashresources
  const planners = useResourceplanners().plannerresources
  const trips = useResourcetrip().tripresources
  const photosessions = useResourcephotosessions().photoresources
  const places = useResourceplaces().placeresources
  // console.log(places)
  const musicbands  = useResourcemusicbands().musicresources

  console.log(cars,fashion,planners,trips,photosessions,places,musicbands);
  
  useEffect(() => {
    let get = localStorage.getItem('access_token')

    if (!get) { history.push('/login') }
  },[])
  
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1>Services</h1>

      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="row row-cols-3 ">
            <div className="col">
              <img
                className="d-block w-100"
                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                alt="First slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="row row-cols-3 ">
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                alt="First slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="row row-cols-3 ">
            <div className="col">
              <img
                className="d-block w-100"
                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                alt="First slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
            <div className="col">
              <img
                className="d-block w-100"
                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#reserve_a_place">Reserve a Place</Nav.Link>
            <Nav.Link href="#hire_a_planner">Hire a Planner</Nav.Link>
            <Nav.Link href="#choose_a_music_band">Choose a Music Band</Nav.Link>
            <Nav.Link href="#photo_session">Book a photo session</Nav.Link>
            <Nav.Link href="#get_fashion">Get Fashion</Nav.Link>
            <Nav.Link href="#rent_car">Rent a Car</Nav.Link>
            <Nav.Link href="#book_trip">Book a Trip</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        onClick={handleShow}
      >
        Create a Service
      </button>

      <div id="reserve_a_place">
        {' '}
        <Place 
        places={places}
        />{' '}
      </div>

      <br></br>
      <br></br>

      <div id="hire_a_planner">
        {' '}
        <Planner 
        planners={planners}
        />{' '}
      </div>
      <br></br>
      <br></br>

      <div id="choose_a_music_band">
        {' '}
        <MusicBand 
        musicbands={musicbands}
        />{' '}
      </div>
      <br></br>
      <br></br>

      <div id="photo_session">
        {' '}
        <PhotoSession 
        photosessions={photosessions}
        />{' '}
      </div>
      <br></br>
      <br></br>

      <div id="get_fashion">
        {' '}
        <Fashion 
        fashion={fashion}
        />{' '}
      </div>
      <br></br>
      <br></br>

      <div id="rent_car">
        {' '}
        <RentCar 
        cars={cars}
        />{' '}
      </div>
      <br></br>
      <br></br>

      <div name="book_trip" id="book_trip">
        {' '}
        <BookTrip 
        trips={trips}
        />{' '}
      </div>

      <br></br>
      <br></br>

      <CreateService show={show} handleClose={handleClose} />
    </>
  );
}
