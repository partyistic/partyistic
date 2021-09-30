/** @format */

import React from 'react';

import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ImageBrowserForm from '../components/ImageBrowserForm';

import { Carousel, Form, Modal, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
export default function UserServices(props) {
  let userServices = [];

  props.allServices &&
  props.allServices.map((item) => {
      userServices.push(item);
    });
  console.log(userServices);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // SERVICE NAME
  const [serviceNameChange, setServiceNameChange] = useState('');
  const getServiceNameChange = (event) => {
    setServiceNameChange(event.target.value);
  };
  console.log(serviceNameChange);

  // DESCRIPTION
  const [descriptionChange, setDescriptionChange] = useState('');
  const getDescriptionChange = (event) => {
    setDescriptionChange(event.target.value);
  };
  console.log(descriptionChange);

  // LOCATION
  const [locationChange, setLocationChange] = useState('');
  const getLocationChange = (event) => {
    setLocationChange(event.target.value);
  };
  console.log(locationChange);

  // EMAIL
  const [emailChange, setEmailChange] = useState('');
  const getEmailChange = (event) => {
    setEmailChange(event.target.value);
  };
  console.log(emailChange);

  // PHONE NUMBER
  const [phoneNumberChange, setPhoneNumberChange] = useState('');
  const getPhoneNumberChange = (event) => {
    setPhoneNumberChange(event.target.value);
  };
  console.log(phoneNumberChange);

  // PRICE
  const [priceChange, setPriceChange] = useState('');
  const getPriceChange = (event) => {
    setPriceChange(event.target.value);
  };
  console.log(priceChange);

  return (
    <>
      <div className='row row-cols-6'>
        <Carousel
        fade  style={{ borderRadius:"1%", width:"1200px", marginLeft:"15%" , marginTop:"3%"}}
        >
          {userServices &&
            userServices.map((item) => {
              return (
                item && (
                  <Carousel.Item interval={3000}>
                    <Card


                      style={{ width: '100%', backgroundColor:"transparent" }}
                    
                      onClick={() => {
                        handleShow(item);
                      }}>
                      <Card.Img 
                      style={{width:"100%",  height:"850px",borderRadius:"1%" }}
                      variant='top' src={item.images.images[0]} />

                    </Card>
                  </Carousel.Item>
                )
              );
            })}
        </Carousel>

        <div className='col'></div>
      </div>
      <Modal 
      size="lg"
      show={show} onHide={handleClose}>
        {/* <Modal.Dialog> */}
          <Modal.Header closeButton>
            <Modal.Title
              style={{fontFamily: "'Dancing Script', cursive", fontSize:"37px"}}
              >Create a service</Modal.Title>
          </Modal.Header>

          <Modal.Body
          style={{fontFamily: "'Open Sans Condensed', sans-serif", fontSize:"25px"}}
          >
            <Form>
              <div className='row row-cols-2'>
                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getServiceNameChange}
                      placeholder='Service Name'
                    />
                  </Form.Group>
                </div>

                <div>
                  <Form.Select
                    className='col '
                    aria-label='Default select example'>
                    <option>Service Type</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Select>
                </div>
              </div>
              <br></br>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  onChange={getDescriptionChange}
                  placeholder='Description'
                />
              </Form.Group>

              <Form.Group as={Row} className='mb-3'>
                <Col sm={{ span: 10, offset: 2 }}>
                  <input
                  style={{backgroundColor:"transparent", width:"100%", marginRight:"5%"}}
                   
                    type='button'
                    value='Add a Photo'
                    onClick={handleShow}
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
                    aria-label='Default select example'>
                    <option>City</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </Form.Select>
                </div>
              </div>

              <br></br>
              <div className='row row-cols-3'>
                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='email'
                      onChange={getEmailChange}
                      placeholder='Email'
                    />
                  </Form.Group>
                </div>

                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getPhoneNumberChange}
                      placeholder='Phone Number'
                    />
                  </Form.Group>
                </div>

                <div className='mb-3 col'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      type='text'
                      onChange={getPriceChange}
                      placeholder='Price'
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </Modal.Body>

          
            
            <button 
             style={{background:"transparent", color: "black", borderBlockColor:"black", width:"100%" ,fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
             variant='primary' type='submit'>
              Submit
            </button>
          
        {/* </Modal.Dialog> */}

        <ImageBrowserForm show={show} handleClose={handleClose} />
      </Modal>
    </>
  );
}
