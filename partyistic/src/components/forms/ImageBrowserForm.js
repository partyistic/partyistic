/** @format */

import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row'
// import { Col, Card } from 'react-bootstrap'
// import ImageBrowserForm from './ImageBrowserForm'

import { useEffect, useState } from 'react';

export default function ImageBrowserForm(props) {
  // FIRST IMAGE

  // const [firstImageChange, setFirstImageChange] = useState('');
  // const getFirstImageChange = (event) => {
  //   setFirstImageChange(event.target.value);
  // };
  // console.log(firstImageChange);

  // SECOND IMAGE
  // const [secondImageChange, setSecondImageChange] = useState('');
  // const getSecondImageChange = (event) => {
  //   setSecondImageChange(event.target.value);
  // };
  // console.log(secondImageChange);

  // THIRD IMAGE
  // const [thirdImageChange, setThirdImageChange] = useState('');
  // const getThirdImageChange = (event) => {
  //   setThirdImageChange(event.target.value);
  // };
  // console.log(thirdImageChange);

  return (
    <>
      <Modal size='lg' show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '37px',
            }}>
            Attach Images
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: '25px',
          }}>
          <Form>
            <div className='row row-cols-3'>
              <div className='col'>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>Image1</Form.Label>
                  <Form.Control
                    type='file'
                    onChange={props.handelOnChangeImage1}
                    ocClick={props.handelUploadImage1}
                  />
                </Form.Group>
              </div>

              <div className='col'>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>Image2</Form.Label>
                  <Form.Control
                    type='file'
                    onChange={props.handelOnChangeImage2}
                    ocClick={props.handelUploadImage2}
                  />
                </Form.Group>
              </div>

              <div className='col'>
                <Form.Group controlId='formFile' className='mb-3'>
                  <Form.Label>Image3</Form.Label>
                  <Form.Control
                    type='file'
                    onChange={props.handelOnChangeImage3}
                    ocClick={props.handelUploadImage3}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>

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
      </Modal>
    </>
  );
}
