import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import useResource from '../hook/ueseInspiration'
import Carousel from 'react-bootstrap/Carousel'

import { useState } from 'react';


export default function GradParty(props) {
  const { resources, loading } = useResource();

  let grad = []

  resources && resources.map(item => {
    item.type == 'Graduation' &&
      grad.push(item)

  })

  grad = grad.reverse()
  const [showgrad, setShowGrad] = useState(false);
  const [gd, setGrad] = useState(false);

  const handleClose = () => setShowGrad(false);
  const handleShow = (gd) => {
    setGrad(gd);
    setShowGrad(true);
  }


  const modalshow = () => {
    if (showgrad) {
      return (
        <>
          <Modal show={showgrad} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{gd.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{gd.description}
              {gd.images &&

                <Carousel  >
                  {gd.images.images && gd.images.images.map(item => {
                    return (item &&
                      <Carousel.Item interval={3000}>
                        <img
                          src={item}
                          alt={item}
                        />
                      </Carousel.Item>
                    )
                  })}
                </Carousel>
              }

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
    else {
      return <> </>
    }
  }
  return (
    <>
      {grad && grad.map((gd, key) => (
        <>

          <Card style={{ width: '18rem' }} onClick={() => { handleShow(gd) }}>
            <Card.Img variant="top" src={gd.images.images[0]} />
          </Card>

        </>
      ))}
      {modalshow()}
    </>
  );

}