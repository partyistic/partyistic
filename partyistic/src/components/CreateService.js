
/** @format */

import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col, Card, Dropdown } from 'react-bootstrap';
import ImageBrowserForm from './ImageBrowserForm';
import Services from './Services'

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


import axios from 'axios';

export default function CreateService(props) {
    const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token')

    if (!get) { history.push('/login') }
  },[])
  
  async function createPlace(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/places/',
      info
    );
  }

  async function createCar(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/cars/',
      info
    );
  }


  async function createFashion(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/fashion/',
      info
    );
  }

  async function createMusicBand(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/musicbands/',
      info
    );
  }

  async function createPhotosession(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/photosessions/',
      info
    );
  }

  async function createPlanner(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/planners/',
      info
    );
  }

  async function createTrip(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/trips/',
      info
    );
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // SERVICE NAME
  const [serviceName, setServiceNameChange] = useState('');
  const getServiceNameChange = (event) => {
    setServiceNameChange(event.target.value);
  };

  // SERVICE Type
  const [serviceType, setServiceTypeChange] = useState('');
  const getServiceTypeChange = (event) => {
    setServiceTypeChange(event.target.value);
  };

  // DESCRIPTION
  const [serviceDescription, setDescriptionChange] = useState('');
  const getDescriptionChange = (event) => {
    setDescriptionChange(event.target.value);
  };

  // LOCATION
  const [serviceLocation, setLocationChange] = useState('');
  const getLocationChange = (event) => {
    setLocationChange(event.target.value);
  };

  // City
  const [serviceCity, setCityChange] = useState('');
  const getCityChange = (event) => {
    setCityChange(event.target.value);
  };

  // EMAIL
  const [serviceEmail, setEmailChange] = useState('');
  const getEmailChange = (event) => {
    setEmailChange(event.target.value);
  };

  // PHONE NUMBER
  const [serviceNumber, setPhoneNumberChange] = useState('');
  const getPhoneNumberChange = (event) => {
    setPhoneNumberChange(event.target.value);
  };

  // PRICE
  const [servicePrice, setPriceChange] = useState('');
  const getPriceChange = (event) => {
    setPriceChange(event.target.value);
  };

  // Placee Type
  const [servicePlaceType, setPlaceTypeChange] = useState('');
  const getPlaceTypeChange = (event) => {
    setPlaceTypeChange(event.target.value);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Create a service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                serviceType == 'places' &&
                  createPlace({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    location_link: serviceLocation,
                    city: serviceCity,
                    price: servicePrice,
                    reviews: null,
                    place_type: servicePlaceType,
                    booked_dates: null,
                    // owner: 31,
                  });
                serviceType == 'planners' &&
                  createPlanner({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    price: servicePrice,
                    reviews: null,
                    // owner: 31,
                  });
                serviceType == 'musicbands' &&
                  createMusicBand({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    price: servicePrice,
                    reviews: null,
                    booked_dates: null,
                    // owner: 31,
                  });
                serviceType == 'photosessions' &&
                  createPhotosession({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    price: servicePrice,
                    reviews: null,
                    booked_dates: null,
                    // owner: 31,
                  });
                serviceType == 'fashion' &&
                  createFashion({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    location_link: serviceLocation,
                    city: serviceCity,
                    price: servicePrice,
                    reviews: null,
                    // owner: 31,
                  });
                serviceType == 'cars' &&
                  createCar({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    location_link: serviceLocation,
                    city: serviceCity,
                    price: servicePrice,
                    reviews: null,
                    booked_dates: null,
                    // owner: 31,
                  });
                serviceType == 'trips' &&
                  createTrip({
                    name: serviceName,
                    description: serviceDescription,
                    images: {
                      images: [
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                        'https://s3-us-west-2.amazonaws.com/melingoimages/Images/69813.jpg',
                      ],
                    },
                    price: servicePrice,
                    reviews: null,
                    // owner: 31,
                  });
                props.handleClose();
              }}>
              <div className='row row-cols-2'>
                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getServiceNameChange}
                      placeholder='Service Name'
                      required
                    />
                  </Form.Group>
                </div>

                <div>
                  <Form.Select
                    className='col '
                    aria-label='Default select example'
                    onChange={getServiceTypeChange}
                    required>
                    <option>Service Type</option>
                    <option value='places'>Place for Rent</option>
                    <option value='planners'>Planning</option>
                    <option value='musicbands'>Music Band</option>
                    <option value='photosessions'>Photography</option>
                    <option value='fashion'>Fashion</option>
                    <option value='cars'>Car for Rent</option>
                    <option value='trips'>Trip</option>
                  </Form.Select>
                </div>
              </div>
              <br></br>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  onChange={getDescriptionChange}
                  placeholder='Description'
                  required
                />
              </Form.Group>

              <Form.Group as={Row} className='mb-3'>
                <Col sm={{ span: 10, offset: 2 }}>
                  <input
                    type='button'
                    value='Add a Photo'
                    onClick={handleShow}
                    required
                  />
                </Col>
              </Form.Group>

              <div className='row row-cols-3 '>
                <div className='col'>
                  <Card.Img variant='' alt='First image' src='' />
                </div>
                <div className='col'>
                  <Card.Img alt='Second image' src='' />
                </div>
                <div className='col'>
                  <Card.Img variant='' alt='Third image' src='' />
                </div>
              </div>

              <br></br>
              <div className='row row-cols-2'>
                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getLocationChange}
                      placeholder='Location Link'
                    />
                  </Form.Group>
                </div>

                <div>
                  <Form.Select
                    className='col '
                    aria-label='Default select example'
                    onChange={getCityChange}
                    required>
                    <option>City</option>
                    <option value='Amman'>Amman</option>
                    <option value='Irbid'>Irbid</option>
                    <option value='Zarqa'>Zarqa</option>
                    <option value='Al-Mafraq'>Al-Mafraq</option>
                    <option value='Jarash'>Jarash</option>
                    <option value='Ajloun'>Ajloun</option>
                    <option value='As-Salt'>As-Salt</option>
                    <option value='Madaba'>Madaba</option>
                    <option value='karak'>karak</option>
                    <option value='Tafilah'>Tafilah</option>
                    <option value='Maan'>Maan</option>
                    <option value='Aqaba'>Aqaba</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Select
                    className='col '
                    aria-label='Default select example'
                    onChange={getPlaceTypeChange}>
                    <option>Place Type - for Places</option>
                    <option value='Hall'>Hall</option>
                    <option value='Restaurant'>Restaurant</option>
                    <option value='Farm'>Farm</option>
                  </Form.Select>
                </div>
              </div>

              <br></br>
              <div className='row row-cols-3'>
                {/* <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='email'
                      id='email'
                      pattern='.+@gmail\.com'
                      size='30'
                      required
                      onChange={getEmailChange}
                      placeholder='Email'
                    />
                  </Form.Group>
                </div> */}

                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='tel'
                      onChange={getPhoneNumberChange}
                      placeholder='Phone Number'
                      id='phone'
                      name='phone'
                    />
                  </Form.Group>
                </div>

                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getPriceChange}
                      placeholder='Price'
                      required
                    />
                  </Form.Group>
                </div>

                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>

        <ImageBrowserForm show={show} handleClose={handleClose} />
      </Modal>
    </>
  );
}
