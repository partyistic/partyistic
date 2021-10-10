/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import useResourcephotosessions from '../../hook/UseServicesPhotosessions';
import { useState } from 'react';

export default function BookPhotoSession() {
  const originalPhotosessions = useResourcephotosessions().photoresources;

  const [photosessions, setPhotosessions] = useState(originalPhotosessions);
  const App = () => {
    setPhotosession(useResourcephotosessions().photoresources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };
  console.log(price);

  let date = document.getElementById('date');
  const [selectedDate, setDate] = useState('Available Date');
  const getDateValue = () => {
    setDate(date.options[date.selectedIndex].value);
  };
  console.log(selectedDate);

  function filtering() {
    let lister = [];

    originalPhotosessions.map((item) => {
      if (
        (item.price <= price || price == '') &&
        (item.booked_dates == null ||
          item.booked_dates.dates[0] == selectedDate ||
          item.booked_dates.dates[1] == selectedDate ||
          item.booked_dates.dates[2] == selectedDate ||
          item.booked_dates.dates[3] == selectedDate ||
          item.booked_dates.dates[4] == selectedDate ||
          selectedDate == 'Available Date')
      ) {
        lister.push(item);
        setPhotosessions(lister);
      } else {
        setPhotosessions([]);
      }
    });
  }

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
          <Modal
            size='lg'
            show={showPhotosession}
            onHide={handleClose}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '27px',
                }}>
                {photosession.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  {photosession.description}
                  {photosession.images && (
                    <Carousel
                      fade
                      style={{ borderRadius: '1%', width: '100%' }}>
                      {photosession.images.images &&
                        photosession.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
                                <img
                                  style={{ width: '100%' }}
                                  src={item}
                                  alt={item}
                                />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Price: {photosession.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {photosession.reviews &&
                    photosession.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {photosession.booked_dates &&
                    photosession.booked_dates.dates.map((date) => (
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
      <h1
        style={{
          marginTop: '3%',
          color: 'white',
          marginLeft: '40%',
          fontFamily: "'Dancing Script', cursive",
        }}>
        Book a Photo Session
      </h1>
      <br></br>
      <br></br>
      <div className='row row-cols-6'>
        <div className='col'>
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              borderBlockColor: 'black',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px',
            }}
            variant='primary'
            onClick={filtering}>
            {' '}
            SHOW ALL PHOTOSESSIONS
          </button>
        </div>
        <br></br>

        <div className='col'>
          <Form.Select
            style={{ backgroundColor: 'transparent', color: '#fff' }}
            className='col'
            id='date'
            onChange={getDateValue}
            aria-label='Default select example'>
            <option style={{ color: 'black' }} value='Available Date'>
              Available Date
            </option>
            <option style={{ color: 'black' }} value='2021/19/3'>
              2021/19/3
            </option>
            <option style={{ color: 'black' }} value='2020/10/1'>
              2020/10/1
            </option>
            <option style={{ color: 'black' }} value='2013/31/1'>
              2013/31/1
            </option>
            <option style={{ color: 'black' }} value='32011/24/4'>
              2011/24/4
            </option>
          </Form.Select>
        </div>

        <div className='col'>
          <input
            style={{ backgroundColor: 'transparent', color: '#fff' }}
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>

        <div className='col'>
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              borderBlockColor: 'black',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px',
            }}
            variant='primary'
            onClick={filtering}>
            {' '}
            SEARCH
          </button>
        </div>
      </div>

      <br></br>
      <br></br>

      <div className='row row-cols-6'>
        {photosessions &&
          photosessions.map((item) => (
            <div className='col'>
              <Card
                style={{ height: '20rem', marginTop: '3%' }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img
                  style={{ height: '100%' }}
                  variant='top'
                  src={item.images.images[0]}
                />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}
