/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Card, Form, Nav } from 'react-bootstrap';
import { useState } from 'react';
import useFashion from '../hook/useServicesFashions';

export default function GetFashion() {
  const fashions = useFashion().resources;

  const [showFashion, setShowFashion] = useState(false);
  const [fashion, setFashion] = useState(false);
  const handleClose = () => setShowFashion(false);
  const handleShow = (trip) => {
    setFashion(trip);
    setShowFashion(true);
  };

  const modalshow = () => {
    if (showFashion) {
      return (
        <>
          <Modal show={showFashion} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{fashion.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {fashion.description}
                  {fashion.images && (
                    <Carousel>
                      {fashion.images.images &&
                        fashion.images.images.map((item) => {
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
                  <Card.Text>Price: {fashion.price}</Card.Text>
                  <Card.Text>City: {fashion.city}</Card.Text>
                  <Card.Link href={fashion.location_link}>
                    Location Link
                  </Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {fashion.reviews.reviews.map((review) => (
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
        <div className='col'></div>
        <div className='col '>
          <Nav
            activeKey='/home'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link href='#'>Man</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Woman</Nav.Link>
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
          <input type='text' placeholder='Maximum Price'></input>
        </div>
      </div>

      <h1>Get Fashion</h1>
      <div className='row row-cols-6'>
        {fashions &&
          fashions.map((item) => (
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
