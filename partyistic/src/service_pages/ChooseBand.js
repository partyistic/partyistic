/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import useMusicBands from '../hook/useServicesMusicBands';
import { useState } from 'react';

export default function ChooseBand() {
  const musicbands = useMusicBands().resources;

  const [showMusicBand, setShowMusicBand] = useState(false);
  const [musicBand, setMusicBand] = useState(false);
  const handleClose = () => setShowMusicBand(false);
  const handleShow = (musicBand) => {
    setMusicBand(musicBand);
    setShowMusicBand(true);
  };

  const modalshow = () => {
    if (showMusicBand) {
      return (
        <>
          <Modal show={showMusicBand} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{musicBand.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {musicBand.description}
                  {musicBand.images && (
                    <Carousel>
                      {musicBand.images.images &&
                        musicBand.images.images.map((item) => {
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
                  <Card.Text>Price: {musicBand.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {musicBand.reviews &&
                    musicBand.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {musicBand.booked_dates &&
                    musicBand.booked_dates.dates.map((date) => (
                      <Card.Text>{date}</Card.Text>
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

      <h1>Choose a Music Band</h1>

      <div className='row row-cols-6'>
        {musicbands &&
          musicbands.map((item) => (
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
