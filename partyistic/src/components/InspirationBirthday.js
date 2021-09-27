import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useResource from '../hook/useInspiration';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

export default function BirthdayParty(props) {
  const { resources, loading } = useResource();
  let birthday = [];

  resources &&
    resources.map((item) => {
      item.type == 'Birthday' && birthday.push(item);
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
          <Modal show={showBd} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{bd.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {bd.description}
              {bd.images && (
                <Carousel>
                  {bd.images.images &&
                    bd.images.images.map((item) => {
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };
  return (
    <>
      {birthday &&
        birthday.map((bd, key) => (
          <>
            <Card
              style={{ width: '18rem' }}
              onClick={() => {
                handleShow(bd);
              }}
            >
              <Card.Img variant="top" src={bd.images.images[0]} />
            </Card>
          </>
        ))}
      {modalshow()}
    </>
  );
}
