/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import useTrips from '../hook/useServicesTrips';
import { useState } from 'react';

export default function BookATrip() {
  const trips = useTrips().resources;

  const [showtrip, setShowtrip] = useState(false);
  const [trip, setBd] = useState(false);
  const handleClose = () => setShowtrip(false);
  const handleShow = (trip) => {
    setBd(trip);
    setShowtrip(true);
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
              <Card style={{ width: '18rem' }}>
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
                  {trip.reviews.reviews.map((review) => (
                    <Card.Text>{review}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };
  return (
    <>
      <div className='row row-cols-4'>
        <div className='col '></div>

        <div className='col'>
          <input type='text' placeholder='Maximum Price'></input>
        </div>
      </div>

      <h1>Book a Trip</h1>

      <div className='row row-cols-6'>
        {trips &&
          trips.map((item) => (
            <div className='col'>
              <Card
                style={{ width: '18rem' }}
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
