
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import useTrips from "../hook/useServicesTrips";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function BookATrip() {
  const originalTrips = useTrips().resources;

  const [trips, setTrips] = useState(originalTrips);
  const App = () => {
    setTrips(useTrips().resources);
  };

  function filtering() {
    let lister = [];

    originalTrips.map((item) => {
      if (item.price <= price || price=="") {
        lister.push(item);
        console.log(lister, "trippeieirer");
        setTrips(lister);
      } else {
        setTrips([]);
      }
    });
  }

  const addtoFavorite = (item) => {
    console.log(item);
    console.log(item.id);

    const access_token = localStorage.getItem('access_token');
    console.log('access_token', access_token);

    async function fetchFavorite() {
      const response = await axios.get(
        'https://partyistic.herokuapp.com/ ........ '
      );
    }
  };

  const [showtrip, setShowtrip] = useState(false);
  const [trip, setBd] = useState(false);
  const handleClose = () => setShowtrip(false);
  const handleShow = (trip) => {
    setBd(trip);
    setShowtrip(true);
  };

  const [price, setPrice] = useState(200000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  const modalshow = () => {
    if (showtrip) {
      return (
        <>
          <Modal show={showtrip} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{trip.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {trip.description}
                  {trip.images && (
                    <Carousel>
                      {trip.images.images &&
                        trip.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
                                <img src={item} alt={item} />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Price: {trip.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {trip.reviews &&
                    trip.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                </Card.Body>
                <Button
                  variant='secondary'
                  onClick={() => {
                    addtoFavorite(trip);
                  }}>
                  Add to Favorite
                </Button>
              </Card>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };

  const [renderer, setRenderer] = useState(false);
  const pricerRender = () => {
    setRenderer(true);
  };

  return (
    <>
      <div className='row row-cols-5'>

        <div className='col'></div>
        <div className='col'>
          <Button variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL TRIPS
          </Button>
        </div>

        <div className='col'>
          <input
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>

        <div>
          <Button variant='primary' onClick={filtering}>
            {" "}
            SEARCH TRIPS
          </Button>
        </div>
         
      </div>

      <h1>Book a Trip</h1>

      <div className='row row-cols-6'>
        {trips &&
          trips.map((item) => (
            <div className='col'>
              <Card
                style={{ width: "18rem" }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img variant='top' src={item.images.images[0]} />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}
