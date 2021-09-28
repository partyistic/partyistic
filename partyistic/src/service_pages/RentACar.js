/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import useCars from '../hook/useServicesCars';
import { useState } from 'react';

export default function RentACar() {
  const cars = useCars().resources;

  const [showCar, setShowCar] = useState(false);
  const [car, setCar] = useState(false);
  const handleClose = () => setShowCar(false);
  const handleShow = (car) => {
    setCar(car);
    setShowCar(true);
  };

  const modalshow = () => {
    if (showCar) {
      return (
        <>
          <Modal show={showCar} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{car.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {car.description}
                  {car.images && (
                    <Carousel>
                      {car.images.images &&
                        car.images.images.map((item) => {
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
                  <Card.Text>Price: {car.price}</Card.Text>
                  <Card.Text>City: {car.city}</Card.Text>
                  <Card.Link href={car.location_link}>Location Link</Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {car.reviews.reviews.map((review) => (
                    <Card.Text>{review}</Card.Text>
                  ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {car.booked_dates.dates.map((date) => (
                    <Card.Text>{date}</Card.Text>
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
          <Form.Select className='col ' aria-label='Default select example'>
            <option>City</option>
            <option value='1'>Amman</option>
            <option value='2'>Zarqa</option>
            <option value='3'>Irbid</option>
            <option value='3'>Jarash</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select className='col ' aria-label='Default select example'>
            <option>Available Month</option>
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='3'>April</option>
          </Form.Select>
        </div>

        <div className='col'>
          <input type='text' placeholder='Maximum Price'></input>
        </div>
      </div>

      <h1>Rent a Car</h1>
      <div className='row row-cols-6'>
        {cars &&
          cars.map((item) => (
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
