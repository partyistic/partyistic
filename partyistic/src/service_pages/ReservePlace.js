/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Nav, Card, Form } from 'react-bootstrap';
import usePlaces from '../hook/useServicesPlaces';
import { useState } from 'react';

export default function ReservePlace(props) {
  const places = usePlaces().resources;

  const [showPlace, setShowPlace] = useState(false);
  const [place, sePlace] = useState(false);
  const handleClose = () => setShowPlace(false);
  const handleShow = (place) => {
    sePlace(place);
    setShowPlace(true);
  };

  const modalshow = () => {
    if (showPlace) {
      return (
        <>
          <Modal show={showPlace} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{place.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {place.description}
                  {place.images && (
                    <Carousel>
                      {place.images.images &&
                        place.images.images.map((item) => {
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
                  <Card.Text>Place Type: {place.place_type}</Card.Text>
                  <Card.Text>Price: {place.price}</Card.Text>
                  <Card.Text>City: {place.city}</Card.Text>
                  <Card.Link href={place.location_link}>
                    Location Link
                  </Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {place.reviews.reviews.map((review) => (
                    <Card.Text>{review}</Card.Text>
                  ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {place.booked_dates.dates.map((date) => (
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
        <div className='col '>
          <Nav
            activeKey='/home'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link href='#'>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Event Hall</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey='link-2'>Restaurant</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey='link-3'>Farm</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

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

      <h1>Reserve A Place</h1>
      <div className='row row-cols-6'>
        {places &&
          places.map((item) => (
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
