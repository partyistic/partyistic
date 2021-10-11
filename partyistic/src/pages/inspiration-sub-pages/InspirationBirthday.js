/* eslint-disable array-callback-return */
/** @format */

import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import useResource from '../../hook/UseInspiration';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

export default function BirthdayParty(props) {
  const { resources } = useResource();
  let birthday = [];

  resources &&
    resources.map((item) => {
      item.type === 'Birthday' && birthday.push(item);
    });

  birthday = birthday.reverse();
  const [showBd, setShowBd] = useState(false);
  const [bd, setBd] = useState(false);

  const handleClose = () => setShowBd(false);
  const handleShow = (bd) => {
    setBd(bd);
    setShowBd(true);
  };

  const modalshow = () => {
    if (showBd) {
      return (
        <>
          <Modal size='lg' show={showBd} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '40px',
                }}>
                {bd.name}
              </Modal.Title>
            </Modal.Header>
            <br></br>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              {bd.description}
              <br />
              {bd.images && (
                <Carousel>
                  {bd.images.images &&
                    bd.images.images.map((item) => {
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
        Birthday Parties Ideas
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent:'center',
          paddingTop: '5%',
        }}>
        {birthday &&
          birthday.map((bd, key) => (
            <>
              <Card
                style={{ width: '30rem', marginLeft: '2%' }}
                onClick={() => {
                  handleShow(bd);
                }}>
                <Card.Img
                  style={{ width: '100%', height: '100%' }}
                  variant='top'
                  src={bd.images.images[0]}
                />
              </Card>
            </>
          ))}
        {modalshow()}
      </div>
    </div>
  );
}
