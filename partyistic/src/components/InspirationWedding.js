import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useResource from '../hook/useInspiration';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

export default function WeddingParty(props) {
  const { resources, loading } = useResource();

  let wedding = [];

  resources &&
    resources.map((item) => {
      item.type == 'Wedding' && wedding.push(item);
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
          <Modal show={showWed} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{wed.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {wed.description}
              {wed.images && (
                <Carousel>
                  {wed.images.images &&
                    wed.images.images.map((item) => {
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
      {wedding &&
        wedding.map((item, key) => (
          <>
            <Card
              style={{ width: '18rem' }}
              onClick={() => {
                handleShow(item);
              }}
            >
              <Card.Img variant="top" src={item.images.images[0]} />
            </Card>
          </>
        ))}
      {modalshow()}
    </>
  );
}
