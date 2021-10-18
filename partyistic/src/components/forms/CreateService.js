/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreateService(props) {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  });

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

  const submitService = (event) => {
    event.preventDefault();
    const images = event.target.images.value.split(' ');

    event.target.serviceType.value === 'places' &&
      createPlace({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        location_link: event.target.location.value,
        city: event.target.city.value,
        price: event.target.price.value,
        reviews: null,
        place_type: event.target.placeType.value,
        booked_dates: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'planners' &&
      createPlanner({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        price: event.target.price.value,
        reviews: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'musicbands' &&
      createMusicBand({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        price: event.target.price.value,
        reviews: null,
        booked_dates: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'photosessions' &&
      createPhotosession({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        price: event.target.price.value,
        reviews: null,
        booked_dates: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'fashion' &&
      createFashion({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        location_link: event.target.location.value,
        city: event.target.city.value,
        price: event.target.price.value,
        reviews: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'cars' &&
      createCar({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        location_link: event.target.location.value,
        city: event.target.city.value,
        price: event.target.price.value,
        reviews: null,
        booked_dates: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    event.target.serviceType.value === 'trips' &&
      createTrip({
        name: event.target.name.value,
        description: event.target.description.value,
        images: {
          images: images,
        },
        price: event.target.price.value,
        reviews: null,
        emailname: event.target.email.value,
        // owner: 31,
      });
    props.handleClose();
  };

  return (
    <>
      <Modal size='lg' show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '37px',
            }}>
            Create a Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: '25px',
          }}>
          <Form onSubmit={submitService}>
            <div className='row row-cols-2'>
              <div className='mb-3 col'>
                <Form.Group controlId='name'>
                  <Form.Control
                    type='text'
                    placeholder='Service Name'
                    required
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className='mb-3' controlId='serviceType'>
                  <Form.Select
                    aria-label='Default select example'
                    className='col '
                    controlId='serviceType'
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
                </Form.Group>
              </div>
            </div>

            <Form.Group className='mb-3' controlId='description'>
              <Form.Control
                as='textarea'
                placeholder='Add Description'
                required
                style={{ height: '100px' }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='images'>
              <Form.Control
                as='textarea'
                placeholder='Add Images Links'
                required
              />
            </Form.Group>

            <div className='row row-cols-2'>
              <div className='mb-3 col'>
                <Form.Group controlId='location'>
                  <Form.Control type='textarea' placeholder='Location Link' />
                </Form.Group>
              </div>

              <Form.Group className='mb-3' controlId='city'>
                <Form.Select
                  label='City'
                  controlId='city'
                  className='col '
                  aria-label='Default select example'>
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
              </Form.Group>

              <Form.Group className='mb-3' controlId='placeType'>
                <Form.Select
                  className='col '
                  aria-label='Default select example'
                  controlId='placeType'>
                  <option>Place Type - for Places</option>
                  <option value='Hall'>Hall</option>
                  <option value='Restaurant'>Restaurant</option>
                  <option value='Farm'>Farm</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className='row row-cols-3'>
              <div className='mb-3 col'>
                <Form.Group controlId='email'>
                  <Form.Control
                    type='email'
                    id='email'
                    size='30'
                    required
                    placeholder='Email'
                  />
                </Form.Group>
              </div>

              <div className='mb-3 col'>
                <Form.Group controlId='email'>
                  <Form.Control
                    type='tel'
                    placeholder='Phone Number'
                    id='phone'
                    name='phone'
                  />
                </Form.Group>
              </div>

              <div className='mb-3 col'>
                <Form.Group controlId='price'>
                  <Form.Control type='text' placeholder='Price' required />
                </Form.Group>
              </div>

              <button
                style={{
                  background: 'transparent',
                  color: 'black',
                  borderBlockColor: 'black',
                  width: '100%',
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '30px',
                }}
                variant='primary'
                type='submit'>
                Submit
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
