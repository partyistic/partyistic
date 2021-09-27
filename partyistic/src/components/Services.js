import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CreateService from './CreateService';
import { useState } from 'react';
import Place from '../allServices/Place';
import Planner from '../allServices/Planner';
import MusicBand from '../allServices/MusicBand';
import PhotoSession from '../allServices/PhotoSession';
import RentCar from '../allServices/RentCar';
import BookTrip from '../allServices/BookTrip';
import Fashion from '../allServices/Fashion';
export default function Services(props) {
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

      <div className="reserve_a_place">
        {' '}
        <Place />{' '}
      </div>

      <br></br>
      <br></br>

      <div>
        {' '}
        <Planner />{' '}
      </div>
      <br></br>
      <br></br>

      <div>
        {' '}
        <MusicBand />{' '}
      </div>
      <br></br>
      <br></br>

      <div>
        {' '}
        <PhotoSession />{' '}
      </div>
      <br></br>
      <br></br>

      <div>
        {' '}
        <Fashion />{' '}
      </div>
      <br></br>
      <br></br>

      <div>
        {' '}
        <RentCar />{' '}
      </div>
      <br></br>
      <br></br>

      <div name="book_trip">
        {' '}
        <BookTrip />{' '}
      </div>

      <br></br>
      <br></br>

      <CreateService show={show} handleClose={handleClose} />
    </>
  );
}
