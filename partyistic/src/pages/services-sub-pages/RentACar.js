/* eslint-disable array-callback-return */
/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Form } from 'react-bootstrap';
import useResourceCar from '../../hook/UseServicesCars';
import { useState } from 'react';

export default function RentACar() {
  const originalCars = useResourceCar().carresources;
  const [cars, setCars] = useState(originalCars);

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  let date = document.getElementById('date');
  const [selectedDate, setDate] = useState('Available Date');
  const getDateValue = () => {
    setDate(date.options[date.selectedIndex].value);
  };
  console.log(selectedDate);

  let city = document.getElementById('city');
  const [selectedCity, setCity] = useState('City');
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value);
  };
  console.log(selectedCity);

  function filtering() {
    let lister = [];

    originalCars.map((item) => {
      if (
        (item.price <= price || price === '') &&
        (item.city === selectedCity || selectedCity === 'City') &&
        (item.booked_dates === null ||
          item.booked_dates.dates[0] === selectedDate ||
          item.booked_dates.dates[1] === selectedDate ||
          selectedDate === 'Available Date')
      ) {
        lister.push(item);
        setCars(lister);
      } else {
        setCars([]);
      }
    });
  }

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
          <Modal
            size='lg'
            show={showCar}
            onHide={handleClose}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '27px',
                }}>
                {car.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  {car.description}
                  {car.images && (
                    <Carousel
                      fade
                      style={{ borderRadius: '1%', width: '100%' }}>
                      {car.images.images &&
                        car.images.images.map((item) => {
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
                  <Card.Text>Price: {car.price}</Card.Text>
                  <Card.Text>City: {car.city}</Card.Text>
                  <Card.Link href={car.location_link}>Location</Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {car.reviews &&
                    car.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {car.booked_dates &&
                    car.booked_dates.dates.map((date) => (
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
          fontFamily: "'Dancing Script', cursive",
          fontSize: '40px',
          color: '#fff',
          marginTop: '5%',
          textAlign:'center',
        }}>
        Rent a Car
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
            ShOW ALL CARS
          </button>
        </div>
        <br></br>
        <div className='col'>
          <Form.Select
            style={{ backgroundColor: 'transparent', color: '#fff' }}
            id='city'
            className='col '
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value='City' selected>
              City
            </option>
            <option style={{ color: 'black' }} value='Amman'>
              Amman
            </option>
            <option style={{ color: 'black' }} value='Zarqa'>
              Zarqa
            </option>
            <option style={{ color: 'black' }} value='Irbid'>
              Irbid
            </option>
            <option style={{ color: 'black' }} value='Al-Mafraq'>
              Al-Mafraq
            </option>
            <option style={{ color: 'black' }} value='Jarash'>
              Jarash
            </option>
            <option style={{ color: 'black' }} value='Ajloun'>
              Ajloun
            </option>
            <option style={{ color: 'black' }} value='As-Salt'>
              As-Salt
            </option>
            <option style={{ color: 'black' }} value='Madaba'>
              Madaba
            </option>
            <option style={{ color: 'black' }} value='Karak'>
              Karak
            </option>
            <option style={{ color: 'black' }} value='Tafilah'>
              Tafilah
            </option>
            <option style={{ color: 'black' }} value='Maan'>
              Maan
            </option>
            <option style={{ color: 'black' }} value='Aqaba'>
              Aqaba
            </option>
          </Form.Select>
        </div>

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
            SEARCH
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <div className='row row-cols-6'>
        {cars &&
          cars.map((item) => (
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
