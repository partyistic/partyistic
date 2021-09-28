/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import usePhotosessions from '../hook/useServicesPhotosessions';
import { useState } from 'react';

export default function BookPhotoSession() {
  const photosessions = usePhotosessions().resources;

  const [showPhotosession, setShowPhotosession] = useState(false);
  const [photosession, setPhotosession] = useState(false);
  const handleClose = () => setShowPhotosession(false);
  const handleShow = (photosession) => {
    setPhotosession(photosession);
    setShowPhotosession(true);
  };

  const modalshow = () => {
    if (showPhotosession) {
      return (
        <>
          <Modal show={showPhotosession} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{photosession.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {photosession.description}
                  {photosession.images && (
                    <Carousel>
                      {photosession.images.images &&
                        photosession.images.images.map((item) => {
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
                  <Card.Text>Price: {photosession.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {photosession.reviews.reviews.map((review) => (
                    <Card.Text>{review}</Card.Text>
                  ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {photosession.booked_dates.dates.map((date) => (
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

      <h1>Book a Photo Session</h1>

      <div className='row row-cols-6'>
        {photosessions &&
          photosessions.map((item) => (
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
