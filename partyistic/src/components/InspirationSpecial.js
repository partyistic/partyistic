import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useResource from '../hook/useInspiration';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

export default function SpecialParty(props) {
  const { resources, loading } = useResource();

  let special = [];

  resources &&
    resources.map((item) => {
      item.type == 'Special' && special.push(item);
    });

  special = special.reverse();
  console.log(special);

  const [showSpe, setShowSpe] = useState(false);
  const [spe, setSpe] = useState(false);

  const handleClose = () => setShowSpe(false);
  const handleShow = (spe) => {
    setSpe(spe);
    setShowSpe(true);
  };

  const modalshow = () => {
    if (showSpe) {
      return (
        <>
          <Modal show={showSpe} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{spe.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {spe.description}
              {spe.images && (
                <Carousel>
                  {spe.images.images &&
                    spe.images.images.map((item) => {
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
      {special &&
        special.map((spe, key) => (
          <>
            <Card
              style={{ width: '18rem' }}
              onClick={() => {
                handleShow(spe);
              }}
            >
              <Card.Img variant="top" src={spe.images.images[0]} />
            </Card>
          </>
        ))}
      {modalshow()}
    </>
  );
}
