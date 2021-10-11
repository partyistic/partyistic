/* eslint-disable array-callback-return */
/** @format */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import useResource from '../../hook/UseInspiration';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

export default function WeddingParty(props) {
  const { resources } = useResource();

  let wedding = [];

  resources &&
    resources.map((item) => {
      item.type === 'Wedding' && wedding.push(item);
    });

  wedding = wedding.reverse();
  console.log(wedding);

  const [showWed, setShowWed] = useState(false);
  const [wed, setWed] = useState(false);

  const handleClose = () => setShowWed(false);
  const handleShow = (wed) => {
    setWed(wed);
    setShowWed(true);
  };

  const modalshow = () => {
    if (showWed) {
      return (
        <>
          <Modal
            size='lg'
            show={showWed}
            onHide={handleClose}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '40px',
                }}>
                {wed.name}
              </Modal.Title>
            </Modal.Header>
            <br></br>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              {wed.description}
              <br />

              {wed.images && (
                <Carousel>
                  {wed.images.images &&
                    wed.images.images.map((item) => {
                      return (
                        item && (
                          <Carousel.Item interval={3000}>
                            <br></br>
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
            </Modal.Body>
            <br></br>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };
  return (
    <div style={{ height: '530px' }}>
      <h1
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '40px',
          color: '#fff',
          marginTop: '5%',
          textAlign:'center',
        }}>
        Wedding Parties Ideas
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent:'center',
          paddingTop: '5%',
        }}>
        {wedding &&
          wedding.map((item, key) => (
            <>
              <Card
                style={{ width: '30rem', marginLeft: '2%' }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img
                  style={{ width: '100%', height: '100%' }}
                  variant='top'
                  src={item.images.images[0]}
                />
              </Card>
            </>
          ))}
        {modalshow()}
      </div>
    </div>
  );
}
