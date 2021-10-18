/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function CreateParty(props) {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  });

  async function createParty(info) {
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/parties/',
      info
    );
  }

  const submitParty = (event) => {
    event.preventDefault();
    const invited_emails = event.target.invited_emails.value.split(' ');
    const images = event.target.images.value.split(' ');
    const data = {
      name: event.target.name.value,
      type: event.target.partyType.value,
      description: event.target.description.value,
      images: {
        images: images,
      },
      location_link: event.target.location.value,
      city: event.target.city.value,
      privacy: event.target.privacy.value,
      date: event.target.date.value,
      emailname: event.target.email.value,
      invited_people: {
        people: invited_emails,
      },
      // owner: 30,
    };
    createParty(data);
    props.handleCloseCreateParty();
  };

  return (
    <>
      <Modal
        size='lg'
        show={props.showCreateParty}
        onHide={props.handleCloseCreateParty}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '37px',
            }}>
            Create a Party
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: '25px',
          }}>
          <Form onSubmit={submitParty}>
            <div className='row row-cols-2'>
              <div className='mb-3 col'>
                <Form.Group controlId='name'>
                  <Form.Control type='text' placeholder='Party Name' required />
                </Form.Group>
              </div>
              <div>
                <Form.Group className='mb-3' controlId='partyType'>
                  <Form.Select
                    aria-label='Default select example'
                    controlId='partyType'>
                    <option>Party Type</option>
                    <option value='Wedding'>Wedding</option>
                    <option value='Graduation'>Graduation</option>
                    <option value='Birthday'>Birthday</option>
                    <option value='Special'>Special</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <Form.Group className='mb-3' controlId='description'>
              <Form.Control
                required
                as='textarea'
                placeholder='Add Description'
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

            <Form.Group className='mb-3' controlId='privacy'>
              Privacy:
              <Form.Check
                controlId='privacy'
                type='radio'
                inline
                label='Public'
                id='Public'
                name='privacy'
                value='Public'
              />
              <Form.Check
                controlId='privacy'
                type='radio'
                inline
                label='Private'
                id='Private'
                name='privacy'
                value='Private'
              />
            </Form.Group>

            <div className='row row-cols-2'>
              <div className='mb-3 col'>
                <Form.Group controlId='location'>
                  <Form.Control
                    required
                    type='textarea'
                    placeholder='Location Link'
                  />
                </Form.Group>
              </div>

              <Form.Group className='mb-3' controlId='city'>
                <Form.Select label='City' controlId='city' required>
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
            </div>

            <Form.Group className='mb-3' controlId='date'>
              <Form.Control type='date' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Control type='email' placeholder='Email' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='invited_emails'>
              <Form.Control type='text' placeholder='Invite People' />
            </Form.Group>
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
            {/* style={{background:"transperant" }} */}
          </Form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
