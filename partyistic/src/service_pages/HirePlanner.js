/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import usePlanners from '../hook/useServicesPlanners';
import { useState } from 'react';

export default function HirePlanner() {
  const planners = usePlanners().resources;

  const [showPlanner, setShowPlanner] = useState(false);
  const [planner, setPlanner] = useState(false);
  const handleClose = () => setShowPlanner(false);
  const handleShow = (planner) => {
    setPlanner(planner);
    setShowPlanner(true);
  };

  const modalshow = () => {
    if (showPlanner) {
      return (
        <>
          <Modal show={showPlanner} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{planner.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {planner.description}
                  {planner.images && (
                    <Carousel>
                      {planner.images.images &&
                        planner.images.images.map((item) => {
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
                  <Card.Text>Price: {planner.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {planner.reviews &&
                    planner.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                </Card.Body>
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
          <input type='text' placeholder='Maximum Price'></input>
        </div>
      </div>

      <h1>Hire a Planner</h1>

      <div className='row row-cols-6'>
        {planners &&
          planners.map((item) => (
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
